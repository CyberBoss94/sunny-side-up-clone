const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    let placeId = 'ChIJsTNOmoPRNm8RZEjGw4yJG78';

    // Resolve fresh place ID via Find Place from Text (handles stale IDs)
    try {
      const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        'TowDaddy Inc towing'
      )}&inputtype=textquery&fields=place_id&key=${apiKey}`;
      const findRes = await fetch(findUrl);
      const findData = await findRes.json();
      if (findData.status === 'OK' && findData.candidates?.[0]?.place_id) {
        placeId = findData.candidates[0].place_id;
        console.log('Resolved place ID:', placeId);
      }
    } catch (e) {
      console.warn('Find place lookup failed, using default ID', e);
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API error:', data.status, data.error_message);
      return emptyResponse(`Google API: ${data.status}`);
    }

    const transformedData = {
      name: data.result.name,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews?.map((review: any, index: number) => ({
        id: index + 1,
        author: review.author_name,
        rating: review.rating,
        date: review.relative_time_description,
        text: review.text,
        avatar: review.author_name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
        photoUrl: review.profile_photo_url,
      })) || [],
    };

    return new Response(JSON.stringify(transformedData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return emptyResponse(error instanceof Error ? error.message : 'unknown');
  }
});
