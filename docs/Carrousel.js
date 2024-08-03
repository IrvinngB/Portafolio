const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentItem = 0;
let touchStartX = 0;
let touchEndX = 0;

carouselItems[currentItem].classList.add('active');

// Add event listener for wheel event
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

// Add event listeners for touch events
carouselContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) > 50) { // adjust the threshold value as needed
    carouselItems[currentItem].classList.remove('active');
    if (deltaX > 0) {
      currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    } else {
      currentItem = (currentItem + 1) % carouselItems.length;
    }
    carouselItems[currentItem].classList.add('active');
  }
});

// Auto-scrolling feature
setInterval(() => {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}, 8000); // scroll every 8 seconds
