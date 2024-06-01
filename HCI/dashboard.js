const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');
const $items = document.querySelectorAll('.item');
let currentIndex = 0;

function showCurrentItem() {
  $items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

$next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % $items.length;
  showCurrentItem();
});

$prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + $items.length) % $items.length;
  showCurrentItem();
});

// Show the first item initially
showCurrentItem();

const $genre = document.querySelector('#three');
const $zentre = document.querySelector('#one');

$genre.addEventListener('click', () => {
  window.location.href = 'trending.html';
});

$zentre.addEventListener('click', () => {
  window.location.href = 'login.html';
});
