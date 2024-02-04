var myStaffSwiper = new Swiper('.courses-container', {
  spaceBetween: 0,
  slidesPerView: 3,
  initialSlide: 0,
  loop: true,
  grid: {
    rows: 4,
  },
  pagination: {
    el: '.staff-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.staff-button-next', // CSS class or HTML element for next arrow
    prevEl: '.staff-button-prev', // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
    1025: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    320: {
      slidesPerView: 1,
    },
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        '.staff-swiper-pagination'
      );
      console.log(paginationContainer);
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      // Hide dots more than 4 and replace them with an image
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = 'none'; // Hide the dot
          // Replace hidden dots with an image
        }
      });
      const svgDots = document.createElement('div');
      svgDots.style.display = 'flex';
      svgDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
      <rect width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="10" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="20" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="30" width="8" height="8" rx="1" fill="#F2EDED"/>
    </svg>`;
      paginationContainer.appendChild(svgDots);
    },
    slideChangeTransitionEnd: function () {
      updateImageShow();
    },
  },
});
