const stars = document.querySelectorAll('.rating > span');
let userRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        userRating = index + 1;
        stars.forEach((s) => s.classList.remove('star-filled'));
        for(let i = 0; i <= index; i++) {
          stars[i].classList.add('star-filled');
        }
        
      });
    });

async function sendRatingToBackend(){
   const imdb_id = document.querySelector('.rating').getAttribute('data-imdb_id');
   const movie_title = document.querySelector('#movie-title').textContent;
   const movie_poster = document.querySelector('#movie-poster').getAttribute('src');
   const movie_release_date = document.querySelector('#movie-release-date').textContent;
   const movie_type = document.querySelector('#movie-type').textContent;

   console.log(movie_release_date);
    console.log(movie_type);
    const response = await fetch(`/api/ratings/${imdb_id}`, {
        method: 'POST',
        body: JSON.stringify({rating: userRating, title: movie_title, poster: movie_poster, release_date: movie_release_date, type: movie_type}),
        headers: {
        'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/movie');
    } else {
        alert(response.statusText);
    }
}
