$(function () {

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('menu--active'),
      $('.firstslider').toggleClass('firstslider--active'),
      $('.header-top__box').toggleClass('header-top__box--active'),
      $('.header-title').toggleClass('header-title--active')
  });

  // $('.header-top__select-form').on('click', function(){
  //   $('.firstslider').toggleClass('firstslider--active')
  // })

  $('.header-top__select').styler();

  $('.firstslider-items').slick({
    autoplay: true,
    arrows: false,
    dots: true,
  });

  $('.info-items').slick({
    autoplay: true,
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.place-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  $('.connect-checkbox').styler();
})