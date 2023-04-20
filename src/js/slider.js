  import Swiper from 'swiper/bundle';

  //   const swiper = new Swiper('.swiper', {
  //       loop: true, longSwipesRatio: 0.5,
  //         pagination: {
  //   el: '.slider-pagination',
  //   type: 'bullets',
  // },
  //   });
  const swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
        mousewheel: {
          invert: true,
        },
      });