$(function(){
  
  $('.main-size').styler();

  $('.header-btn').on('click', function(){
    $('.header-drop').toggleClass('header-drop--active')
  });

  $('.header-drop__item').on('click', function(){
    $('.header-drop__item').removeClass('header-drop__item--active');
    $(this).addClass('header-drop__item--active');
  });
})