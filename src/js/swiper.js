import Swiper, { Pagination } from 'swiper';


const ourProductsSwiper = new Swiper('#our-products-swiper', {
  loop: true,
  modules: [Pagination],
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3

    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 28

    }
  }
});


const reviewsSwiper = new Swiper('#reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  grabCursor: true,
  modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  }
});