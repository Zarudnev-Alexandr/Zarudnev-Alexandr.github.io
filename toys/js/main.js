$(function(){
  
  $('.header-top__select').styler();

  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('menu--active'),
      $('.menu-btn').toggleClass('menu-btn--active'),
      $('.header-top__connectbox').toggleClass('header-top__connectbox--active'),
      $('.header-top').toggleClass('header-top--active')
  })

  $('.shop-items__box-1').slick({
    dots:true,
    arrows:true,
  });

  $('.shop-items__box-2').slick({
    dots: true,
    arrows: true,
  })


})