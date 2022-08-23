
$(function(){

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('header--menu');
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

    if ($('#tabs-top__1').hasClass('tabs__top-item--active')){
      $('.tabs__content-switch__input').prop('checked', false);
    }else{
      $('.tabs__content-switch__input').prop('checked', true);
    }

    if ($('.tabs__content-item__table').hasClass('tabs__content-item--active')){
      $('.tabs__content-switch').hide();
    }else{
      $('.tabs__content-switch').show();
    }
  });

  $('.tabs__content-switch__input').on('click', function() {
    if ($('.tabs__content-switch__input').is(':checked')) {
      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $('#tab-2').addClass('tabs__content-item--active');
      $('#tabs-top__1').removeClass('tabs__top-item--active'); 
      $('#tabs-top__2').addClass('tabs__top-item--active');           
    } else {
      $('.tabs__content-item').removeClass('tabs__content-item--active');
      $('#tab-1').addClass('tabs__content-item--active');
      $('#tabs-top__2').removeClass('tabs__top-item--active');
      $('#tabs-top__1').addClass('tabs__top-item--active');      
    }
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
  const select = $('.pay-detail__walltype-select').filterMultiSelect({
    placeholderText: "nothing selected",
    filterText: "Filter",
    selectAllText: "Select All",
    selectionLimit: 0,
    caseSensitive:false,


  });


});
