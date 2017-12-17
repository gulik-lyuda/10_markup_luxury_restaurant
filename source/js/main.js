var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


