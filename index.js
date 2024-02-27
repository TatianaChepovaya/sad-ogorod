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
  $('.btn__phone').on('click',function(event){
    event.preventDefault();
    $('.phone__list').toggleClass('active');
    $('.phone__container').toggleClass('active');
  })
  $('.phone__list').on('click',function(event){
    event.preventDefault();
    $(".contact__form").toggleClass('active');
  })
  $('.login__part').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })
  $('.btn__search').on('click',function(event){
    event.preventDefault();
    $('.search').toggleClass('active');
    $('.search__container').toggleClass('active');
  })
  $('.btn__menu').on('click',function(event){
    event.preventDefault();
    $(".mob__menu").toggleClass('active');
    $(".mob__menu-container").toggleClass('active');
  })
  $('.mob__menu-item').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })
  $('.catalog__btn').on('click',function(event){
    event.preventDefault();
    $(".catalog__menu-list").toggleClass('active');
  })
  $('.catalog__menu-item').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  })


  $(".product__gallery-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor:".product__gallery-slider-nav"
  });
  $(".product__gallery-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product__gallery-slider",
    dots: false,
    
    focusOnSelect: true
  });
});


