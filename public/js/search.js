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

// const searchFormHandler = async (event) => {
//     event.preventDefault();
  
//     const search = document.querySelector('#search-input').value.trim();
//     if (!search) {
//       alert('Please enter a search term');
//       return;
//     }
  
//     try {
//       const response = await fetch('/movie', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ searchTerm: search }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   document.querySelector('#search-form').addEventListener('submit', searchFormHandler);