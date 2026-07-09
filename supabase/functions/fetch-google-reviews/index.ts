const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// TowDaddy Inc. — confirmed via Google Maps embed (0x6f36d1839a4e33b1:0xbf1b898cc3c64864)
const TOWDADDY_PLACE_ID = 'ChIJsTNOmoPRNm8RZEjGw4yJG78';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const emptyResponse = (reason?: string) =>
    new Response(
      JSON.stringify({ name: 'TowDaddy Inc.', rating: 0, totalReviews: 0, reviews: [], note: reason }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    if (!apiKey) return emptyResponse('API key not configured');

    // Use Places API (New) — supports sorting reviews by newest and returns up to 5.
    // Google's API caps reviews at 5 per request; we request newest first.
    const url = `https://places.googleapis.com/v1/places/${TOWDADDY_PLACE_ID}?languageCode=en&reviewsSort=newest`;
    const response = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      console.error('Places API (New) error:', response.status, JSON.stringify(data));
      // Fallback to legacy Places Details API
      const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${TOWDADDY_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
      const legacyRes = await fetch(legacyUrl);
      const legacy = await legacyRes.json();
      if (legacy.status !== 'OK') return emptyResponse(`Google API: ${legacy.status}`);
      const transformed = {
        name: legacy.result.name,
        rating: legacy.result.rating,
        totalReviews: legacy.result.user_ratings_total,
        reviews: (legacy.result.reviews || []).map((r: any, i: number) => ({
          id: i + 1,
          author: r.author_name,
          rating: r.rating,
          date: r.relative_time_description,
          text: r.text,
          avatar: r.author_name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
          photoUrl: r.profile_photo_url,
        })),
      };
      return new Response(JSON.stringify(transformed), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const transformed = {
      name: data.displayName?.text || 'TowDaddy Inc.',
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: (data.reviews || []).map((r: any, i: number) => {
        const author = r.authorAttribution?.displayName || 'Google User';
        return {
          id: i + 1,
          author,
          rating: r.rating,
          date: r.relativePublishTimeDescription,
          text: r.text?.text || r.originalText?.text || '',
          avatar: author.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2),
          photoUrl: r.authorAttribution?.photoUri,
        };
      }),
    };

    return new Response(JSON.stringify(transformed), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return emptyResponse(error instanceof Error ? error.message : 'unknown');
  }
});
