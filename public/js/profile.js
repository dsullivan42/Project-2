// const addMovieHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#movie-name').value.trim();
//   // const needed_funding = document.querySelector('#project-funding').value.trim();
//   // const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/movies`, {
//       method: 'POST',
//       body: JSON.stringify({ id, title, poster, release_date, imdb_id, type }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create movie');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/movies/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete movie');
//     }
//   }
// };

// document
//   .querySelector('.new-movie-form')
//   .addEventListener('submit', addMovieHandler);

// document
//   .querySelector('.movie-list')
//   .addEventListener('click', delButtonHandler);

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