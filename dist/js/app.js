"use strict";

$(function () {
  $('.slider').slick({
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.tarification__slider').slick({
    dots: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false
  });
  $('.regul-slider__inner').slick({
    arrows: false,
    dots: true,
    slideToScroll: 1,
    slideToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.abonement__slider-info').slick({
    arrows: false,
    dots: true,
    slideToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});