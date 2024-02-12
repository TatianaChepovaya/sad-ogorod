$(document).ready(function () {
  $(".product__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow: $('.line__btn-right-arrow'),
    prevArrow: $('.line__btn-left-arrow'), 
    variableWidth: true,

  });
  $('.catalog__item').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })
   if ($(window).width() < 768) {
    $('.login').appendTo('.footer__login-container')
  }
  if ($(window).width() < 768) {
    $('.menu__desk').appendTo('.footer__mob-menu-container')
  }
  $('.footer__mob-menu-container').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })
  $('.footer__login-container').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })
  if ($(window).width() < 768) {
    $('.login__container').appendTo('.footer__login-container')
  }
});


