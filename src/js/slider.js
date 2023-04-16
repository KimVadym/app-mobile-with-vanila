  import Swiper from 'swiper/bundle';

    const swiper = new Swiper('.swiper', {
        loop: true, longSwipesRatio: 0.5,
          pagination: {
    el: '.slider-pagination',
    type: 'bullets',
  },
  });