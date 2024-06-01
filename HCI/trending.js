// Your existing code
const zentreBtn = document.getElementById('one');
const homeBtn = document.getElementById('two');
const trendingBtn = document.getElementById('three');

// Event listeners for navigation buttons
zentreBtn.addEventListener('click', () => {
  window.location.href = 'login.html';
});

homeBtn.addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});

trendingBtn.addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});

// Your existing code

// Array of movie objects
const movies = [
  {
    title: "The First Omen",
    duration: "1hr 57mins",
    rating: "7/10"
  },
  // Add more movie objects here
];

// Function to filter movies based on search input
function filterMovies(searchTerm) {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Function to display filtered movies
function displayMovies(filteredMovies) {
  const movieRows = document.querySelectorAll('.movie-row');
  movieRows.forEach(row => {
    const movieCards = row.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
      const cardTitle = card.getAttribute('data-title');
      if (filteredMovies.includes(cardTitle)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Event listener for search bar
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.trim();
  const filteredMovies = filterMovies(searchTerm);
  displayMovies(filteredMovies);
});
