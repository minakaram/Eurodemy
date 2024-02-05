var myStaffSwiper = new Swiper(".swiper-container1", {
  // initialSlide: 2,
  // loop: true,
  pagination: {
    el: ".staff-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".staff-button-next", // CSS class or HTML element for next arrow
    prevEl: ".staff-button-prev", // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 0,
      grid: {
        rows: 4,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 4,
      },
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 8,
      },
    },
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".staff-swiper-pagination"
      );
      console.log(paginationContainer);
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      // Hide dots more than 4 and replace them with an image
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none"; // Hide the dot
          // Replace hidden dots with an image
        }
      });
      const svgDots = document.createElement("div");
      svgDots.style.display = "flex";
      svgDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
      <rect width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="10" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="20" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="30" width="8" height="8" rx="1" fill="#F2EDED"/>
    </svg>`;
      paginationContainer.appendChild(svgDots);
    },
  },
});
// ------------------------------------------- form -------------------------------------------
const fileInput = document.querySelector('#cover-input-careers');
const fileImage = document.querySelector('#file-image');
const fileName = document.querySelector('#cover-letter-input-careers');

fileImage.addEventListener('click', function () {
  fileInput.click();
});

fileInput.addEventListener('change', function () {
  const file = fileInput.files[0];
  if (file) {
    fileName.value = file.name;
  } else {
    fileName.value = '';
  }
});
// const clearCv = document.getElementById('clearCv');
// const clearCvInput = document.getElementById('file-cv');
// const clearCvInput2 = document.getElementById('file-cv-careers');

// clearCv.addEventListener('click', () => {
//   clearCvInput.value = '';
//   clearCvInput2.value = '';
// });
