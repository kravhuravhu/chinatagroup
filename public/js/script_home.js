document.addEventListener("DOMContentLoaded", function() {
  // Initialize video settings
  function initVideo() {
    const video = document.querySelector('.background-video');
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.muted = true;
    video.playbackRate = 0.75;
  }

  // global
  let currentSlide = 0;

  // Slide based on the index
  function changeSlide(index) {
    const slides = document.querySelectorAll('.main_slider');
    const dots = document.querySelectorAll('.slider_dot');
    const totalSlides = slides.length;

    let currentSlide = index;

    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;

    // Remove active class from all slides and dots
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    dots.forEach((dot) => {
      dot.classList.remove('active');
    });

    // Activate the current slide and corresponding dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Auto slide
  function setupAutoSlide() {
    setInterval(() => {
      changeSlide(currentSlide + 1);
      currentSlide = (currentSlide + 1) % document.querySelectorAll('.main_slider_container .main_slider').length;
    }, 3000);
  }

  // Slide buttons
  function setupNavigation() {
    const leftButton = document.querySelector('.button_left');
    const rightButton = document.querySelector('.button_right');
    const dots = document.querySelectorAll('.slider_dot');

    //let currentSlide = 0;
    leftButton.addEventListener('click', () => {
      changeSlide(currentSlide - 1);
    });

    rightButton.addEventListener('click', () => {
      changeSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        changeSlide(index);
      });
    });
  }

  function init() {
    initVideo();
    setupAutoSlide();
    setupNavigation();

    changeSlide(0);
  }

  init();
});
