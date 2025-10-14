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
    console.log('Using API key (first 10 chars):', apiKey.substring(0, 10) + '...');

    // Use the standard Places API Details endpoint
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    console.log('Making request to Google Places API...');
    const response = await fetch(url);
    const data = await response.json() as GooglePlaceDetails;

    console.log('Google API response status:', data.status);
    
    if (data.status !== 'OK') {
      console.error('Google API full response:', JSON.stringify(data, null, 2));
      
      // Provide helpful error messages
      let errorMessage = `Google API error: ${data.status}`;
      if (data.status === 'REQUEST_DENIED') {
        errorMessage += ' - Check that the Places API is enabled in Google Cloud Console and billing is set up';
      } else if (data.status === 'INVALID_REQUEST') {
        errorMessage += ' - The place ID or request format may be invalid';
      } else if (data.status === 'NOT_FOUND') {
        errorMessage += ' - The place ID was not found. Please verify the Place ID is correct';
      }
      
      throw new Error(errorMessage);
    }

    console.log('Successfully received place data:', data.result.name);

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
