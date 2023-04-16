import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
        clickable: true,
        grabCursor: true,
        mousewheel: {
          invert: true,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 640px
          1200: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});