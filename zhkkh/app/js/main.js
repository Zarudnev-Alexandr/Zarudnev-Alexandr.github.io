$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.tabs__top-item').on('click', function(e){    
    e.preventDefault();
    $('.tabs__top-item').removeClass('tabs__top-item--active');
    $(this).addClass('tabs__top-item--active')

    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).addClass('tabs__content-item--active');
  });

  $('.pay-detail__label').on('click', function(){
    $(this).toggleClass('span--active');
  });

  $(".address").suggestions({
    token: "6a17cd66d7e8283bf152d75f89e61bf198e79433",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });

});