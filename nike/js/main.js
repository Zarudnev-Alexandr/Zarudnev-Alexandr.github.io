let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('.header').addClass('header-transparent');
    $('.bg').addClass('bg-scroll');
  } else {
    $('.header').removeClass('header-transparent');
    $('.bg').removeClass('bg-scroll');
  }
});

$(function(){

  $('.input').styler();
  
  $('.main-size').styler();

  $('.select').styler();

  $('.header-btn').on('click', function(){
    $('.header-drop').toggleClass('header-drop--active')
  });

  $('.header-drop__item').on('click', function(){
    $('.header-drop__item').removeClass('header-drop__item--active');
    $(this).addClass('header-drop__item--active');
  });

  $('.man-slider').slick({
    Infinity:true,
    slidesToShow:3,
    slidesToScroll:1,
    centerMode:true,
    arrows:true,
    prevArrow:'<svg class="arrow-prev" width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1L2 16.5L16 32" stroke="#ECECEC" stroke-width="2"/></svg>',
    nextArrow:'<svg class="arrow-next" width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L15 16.5L1 32" stroke="#ECECEC" stroke-width="2"/></svg>',
    responsive: [
      {
        breakpoint: 650,
        settings:{
          // centerMode: false,
          slidesToShow:1,
        }
      },
    ]
  });



  (function init100vh() {
    function setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
  })();


})