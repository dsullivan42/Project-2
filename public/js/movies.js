const addMovieHandler = async (event) => {
    event.preventDefault();

if (event.target.hasAttribute('movies.id')) {
    const id = event.target.getAttribute('movies.id');

    const response = await fetch(`/api/movies/${id}`, {
        method: 'PUT',
    });

    if (response.ok) {
        document.location.replace('/movies');
    } else {
        alert('Failed to add movie');
    }
}
};
document.querySelector('#add-movie-btn').addEventListener('click', addMovieHandler);