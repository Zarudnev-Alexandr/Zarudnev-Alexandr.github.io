$(function(){
  $('.shop-items').slick({
    dots: true,
    prevArrow:false,
    nextArrow: '<svg width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M73 29C73 45.0163 57.5538 58 38.5 58C19.4462 58 4 45.0163 4 29C4 12.9837 19.4462 0 38.5 0C57.5538 0 73 12.9837 73 29Z" fill="#070707" fill-opacity="0.75"/></g><path d="M28 29.5085H50M50 29.5085L37.2812 19M50 29.5085L37.2812 39" stroke="white"/><defs><filter id="filter0_d" x="0" y="0" width="77" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>'
  });

  $('.menu__btn').on('click', function(){
    $('.menu-list').toggleClass('menu--active')
  })
  $('.menu__btn').on('click', function(){
    $('.menu__dop').toggleClass('menu__dop--active')
  })
})