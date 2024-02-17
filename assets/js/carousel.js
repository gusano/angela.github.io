const carousel = document.querySelector(".carousel");

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

// Swipe
let touchstartX = 0;
let touchendX = 0;

let gap = 18;
let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

const imageWidth = 580;

// Swipe left
function swipeLeft() {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;

  // Use previous image width
  const index = prevIndex === 0 ? (images.length - 1) : (prevIndex - 1)
  const w = images[index].getBoundingClientRect().width + gap;
  // carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.style.transform = `translateX(-${w}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
    done = true;
  }, 490);
}

// Swipe right
function swipeRight() {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  // Use current image width
  const w = images[prevIndex].getBoundingClientRect().width + gap;

  // carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.style.transform = `translateX(-${w}px)`;

  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
    done = true;
  }, 500);
}

// Gesture
function handleGesture() {
  if (touchendX < touchstartX) swipeLeft();
  if (touchendX > touchstartX) swipeRight();
}

// init
let done = true;

// Swipe
if (!!carousel) {
  carousel.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
  }, false);

  carousel.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    handleGesture();
  }, false);
}


if (!!leftArrow) {
  leftArrow.addEventListener("click", () => {
    if (done === false) return;

    done = false;
    swipeLeft();
  });
}

if (!!rightArrow) {
  rightArrow.addEventListener("click", () => {
    if (done === false) return;

    done = false;
    swipeRight();
  });
}
