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
  };

  const moveToPrevSlide = () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSlider();
  };

  const updateSlider = () => {
    sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
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

  startAutoPlay();
});

//Меню
document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".menu-button");

  const menuBlocks = document.querySelectorAll(
    ".menu-coffee, .menu-tea, .menu-desert"
  );

  menuButtons[0].classList.add("active");

  menuButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      menuButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      menuBlocks.forEach(function (block) {
        block.style.display = "none";
      });

      const targetBlockId = button.getAttribute("data-target");
      const targetBlock = document.getElementById(targetBlockId);

      if (targetBlock) {
        targetBlock.style.display = "flex";
      }
    });
  });
});
