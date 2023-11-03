  const saveToProfileButtonHandler = async (movieData) => {
    try {
      const response = await fetch('/api/movies/save-to-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });
  
      if (response.ok) {
        const savedMovie = await response.json();
        console.log('Movie saved to user profile:', savedMovie);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Assuming you have a way to get the specific movie data
  const specificMovieData = {
    title: 'Movie Title',
    poster: 'Poster URL',
    release_date: 'Release Date',
    imdb_id: 'IMDB ID',
    type: 'Movie Type',
  };
  
  // Attach this function to the button press event
  saveToProfileButtonHandler(specificMovieData);