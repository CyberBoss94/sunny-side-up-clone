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
    const placeId = 'ChIJYeN7bRLJ1IkR0u7RQXHQe9o';
    
    if (!apiKey) {
      throw new Error('Google Places API key not configured');
    }

    console.log('Fetching Google reviews for place:', placeId);

    // Fetch place details including reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json() as GooglePlaceDetails;

    console.log('Google API response status:', data.status);

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Transform the data to match our component's format
    const transformedData = {
      name: data.result.name,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews?.map((review, index) => ({
        id: index + 1,
        author: review.author_name,
        rating: review.rating,
        date: review.relative_time_description,
        text: review.text,
        avatar: review.author_name.split(' ').map(n => n[0]).join('').toUpperCase(),
        photoUrl: review.profile_photo_url,
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
