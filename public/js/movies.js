const rateMovieHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('movie-list')) {
        const imdb_id = event.target.getAttribute('imdb_id');

        const response = await fetch(`/api/movies/${imdb_id}`, {
            method: 'PUT',
        });

        if (response.ok) {
            document.location.replace('/movies');
        } else {
            alert('Failed to add movie');
        }
    }
};

document.querySelector('.add-rating-btn').addEventListener('click', rateMovieHandler);