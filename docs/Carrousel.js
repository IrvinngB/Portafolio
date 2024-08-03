const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentItem = 0;

carouselItems[currentItem].classList.add('active');

carouselContainer.addEventListener('wheel', (e) => {
  e.preventDefault();
  carouselItems[currentItem].classList.remove('active');
  if (e.deltaY > 0) {
    currentItem = (currentItem + 1) % carouselItems.length;
  } else {
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  }
  carouselItems[currentItem].classList.add('active');
});