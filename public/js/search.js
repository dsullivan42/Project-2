const searchFormHandler = async (event) => {
    event.preventDefault();

const search = document.querySelector('#search-input').value.trim();
if (search) {
    const response = await fetch(`/api/movies`, {
        method: 'POST',
        body: JSON.stringify({ searchTerm: search }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/movies');
    } else {
        alert('Failed to search');
    }
}
};

document.querySelector('#search-form').addEventListener('submit', searchFormHandler);
