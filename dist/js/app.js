"use strict";

$(function () {
  $(".slider").slick({
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
  $('.abonement__slider-info').slick({
    arrows: false,
    dots: true,
    slideToShow: 1,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});