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
  const sliderPaginationButtons = document.querySelectorAll(
    ".slider-pagination__button"
  );
  const progressBarWrappers = document.querySelectorAll(".slider-progress");
  const totalSlides = document.querySelectorAll(".slider-content").length;
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
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlider();
    updatePagination();
    updateProgressBar();
  };

  const moveToPrevSlide = () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSlider();
    updatePagination();
    updateProgressBar();
  };

  const updateSlider = () => {
    sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
  };

  const updatePagination = () => {
    sliderPaginationButtons.forEach((button, index) => {
      button.classList.toggle("active", index === currentSlide);
    });
  };

  const updateProgressBar = () => {
    const progressBar = progressBarWrappers[currentSlide];
    progressBar.style.width = "0%";

    const slideDuration = 5000; // Длительность показа слайда (в миллисекундах)
    const progressBarDuration = 5000; // Длительность анимации прогресс-бара (в миллисекундах)

    let progress = 0;
    const updateProgress = () => {
      progress += (100 / progressBarDuration) * 1000;
      progressBar.style.width = `${progress}%`;

      if (progress < 100) {
        setTimeout(updateProgress, 1000);
      }
    };

    updateProgress();

    setTimeout(() => {
      progress = 0;
      progressBar.style.width = "0%";
    }, slideDuration);
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

  sliderPaginationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
      updatePagination();
      updateProgressBar();
      stopAutoPlay();
      startAutoPlay();
    });
  });

  startAutoPlay();
});
