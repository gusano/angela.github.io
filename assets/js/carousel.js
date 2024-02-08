const carousel = document.querySelector(".carousel");
// const backgroundImage = document.querySelector(".bg-image");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let gap = 18;
let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

// Use this in your project, if you're doing it locally
// const imageWidth = images[1].getBoundingClientRect().x;

const imageWidth = 580;

leftArrow.addEventListener("click", () => {
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
  }, 490);
});

rightArrow.addEventListener("click", () => {
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
  }, 500);
});
