$(function () {

  $('.stock-item__number').styler()

  $('.reviews-items').slick({
    centerMode: true,
    slidesToShow: 3,
    dots:true,
    responsive:[
      {

        breakpoint:700,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.stock-slider').on('init reInit', function (event, slick) {
    var amount = slick.slideCount;
    $('#range').attr('max', amount);
  })

  $('.stock-slider').on('afterChange', function (e, slick, currentSlide) {
    $('#range').val(currentSlide + 1);
  })

  $('#range').on('input change', function () {
    $('.stock-slider').slick('slickGoTo', this.value - 1);
  });

  $('.stock-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    cssEase: 'linear'
  })

  $('.stock-slider__2').slick({
    dots: true,
    infinite: true,
  })

  $('.stock-slider__3').slick({
    dots: true,
    infinite: true,
  })

  $('#range').ionRangeSlider({
    min: 1,
    max: 4,
    from: 2,
  });

  $('.header-top__btn').on('click', function () {
    $('.menu').toggleClass('menu--active'),
      $('.header-top__btn').toggleClass('header-top__btn--active')
  })



})
