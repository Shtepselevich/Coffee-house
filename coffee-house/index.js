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

  sliderBtnNext.addEventListener("click", function () {
    if (currentSlide < totalSlides - 1) {
      // Если не последний слайд, сдвигаем на 100%
      currentSlide++;
      sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
    } else {
      // Если последний слайд, возвращаемся на начало
      currentSlide = 0;
      sliderLine.style.marginLeft = "0";
    }
  });

  sliderBtnPrev.addEventListener("click", function () {
    if (currentSlide > 0) {
      // Если не первый слайд, сдвигаем на 100% назад
      currentSlide--;
      sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
    } else {
      // Если первый слайд, переходим на последний
      currentSlide = totalSlides - 1;
      sliderLine.style.marginLeft = `-${currentSlide * 100}%`;
    }
  });
});
