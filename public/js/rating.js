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
    const response = await fetch(`/api/ratings/${imdb_id}`, {
        method: 'POST',
        body: JSON.stringify({rating: userRating, title: movie_title}),
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

