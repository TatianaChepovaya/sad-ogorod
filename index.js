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
});
