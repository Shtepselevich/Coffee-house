// Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open");
    if (document.querySelector(".header").classList.contains("open")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
  document
    .querySelectorAll(".navbar-menu__item, .header-menu__link")
    .forEach((item) => {
      item.addEventListener("click", function (event) {
        document.querySelector(".header").classList.remove("open");
        document.body.classList.remove("no-scroll");
      });
    });
});
// Слайдер
document.addEventListener("DOMContentLoaded", function () {
  const sliderLine = document.querySelector(".slider-line");
  const sliderBtnNext = document.querySelector(".slider-button__next");
  const sliderBtnPrev = document.querySelector(".slider-button__prev");
  const totalSlides = document.querySelectorAll(".slider-content").length;
  const progressBars = document.querySelectorAll(".slider-progress");
  let currentSlide = 0;
  let intervalId;

  const startAutoPlay = () => {
    intervalId = setInterval(() => {
      moveToNextSlide();
    }, 5000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalId);
  };

  const moveToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      updateProgressBars(currentSlide, "reset");
      currentSlide++;
      updateProgressBars(currentSlide, "active");
    } else {
      updateProgressBars(currentSlide, "reset");
      currentSlide = 0;
      updateProgressBars(currentSlide, "active");
    }
    updateSlider();
  };

  const moveToPrevSlide = () => {
    if (currentSlide > 0) {
      updateProgressBars(currentSlide, "reset");
      currentSlide--;
      updateProgressBars(currentSlide, "active");
    } else {
      updateProgressBars(currentSlide, "reset");
      currentSlide = totalSlides - 1;
      updateProgressBars(currentSlide, "active");
    }
    updateSlider();
  };

  const updateSlider = () => {
    sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
  };

  const updateProgressBars = (index, className) => {
    progressBars[index].classList.remove("active", "reset");
    progressBars[index].classList.add(className);
  };

  sliderBtnNext.addEventListener("click", () => {
    moveToNextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  sliderBtnPrev.addEventListener("click", () => {
    moveToPrevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  // Начать автоматическое воспроизведение при загрузке страницы
  startAutoPlay();
});
