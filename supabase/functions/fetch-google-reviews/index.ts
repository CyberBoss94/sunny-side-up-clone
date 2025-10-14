const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GooglePlaceDetails {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: Array<{
      author_name: string;
      rating: number;
      relative_time_description: string;
      text: string;
      profile_photo_url: string;
    }>;
  };
  status: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = 'ChIJsTNOmoPRNm8RZEjGw4yJG78';
    
    if (!apiKey) {
      throw new Error('Google Places API key not configured');
    }

    console.log('Fetching Google reviews for place:', placeId);

    // Use the newer Places API (New) format
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews.author,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.authorAttribution.photoUri'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google API error response:', errorText);
      throw new Error(`Google API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Google API response received:', JSON.stringify(data, null, 2));

    // Transform the data to match our component's format
    const transformedData = {
      name: data.displayName?.text || 'TowDaddy Inc.',
      rating: data.rating || 0,
      totalReviews: data.userRatingCount || 0,
      reviews: data.reviews?.map((review: any, index: number) => ({
        id: index + 1,
        author: review.authorAttribution?.displayName || 'Anonymous',
        rating: review.rating || 0,
        date: review.relativePublishTimeDescription || 'Recently',
        text: review.text?.text || '',
        avatar: (review.authorAttribution?.displayName || 'A').split(' ').map((n: string) => n[0]).join('').toUpperCase(),
        photoUrl: review.authorAttribution?.photoUri || '',
      })) || [],
    };

    console.log('Successfully fetched', transformedData.reviews.length, 'reviews');

    return new Response(
      JSON.stringify(transformedData),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to fetch reviews' 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
