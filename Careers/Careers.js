<<<<<<< HEAD
// laptop screen
const categories_Nav_Button = document.getElementById("active-list-id");
const categories_Dropdown = document.getElementById("categories-dropdown-id");
const categoriesSvgPaths = categories_Nav_Button.querySelectorAll("path");

categories_Nav_Button.addEventListener("click", (e) => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(categories_Dropdown);
  const visibility = computedStyles.getPropertyValue("visibility");

  if (visibility === "hidden") {
    categories_Dropdown.style.visibility = "visible";
    categories_Dropdown.style.opacity = "1";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "#ad1519";
    });
  } else {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "black";
    });
  }
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    categories_Nav_Button.contains(e.target) ||
    categories_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "black";
    });
  }
});

//   cities dropdown -----------------------------------------
const cities_Nav_Button = document.getElementById("cities-dropdown-button");
const cities_Dropdown = document.getElementById("cities-dropdown-id");
const citiesSvgPath = cities_Nav_Button.querySelectorAll("path");

cities_Nav_Button.addEventListener("click", (e) => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(cities_Dropdown);
  const visibility = computedStyles.getPropertyValue("visibility");

  if (visibility === "hidden") {
    cities_Dropdown.style.visibility = "visible";
    cities_Dropdown.style.opacity = "1";
    citiesSvgPath.forEach((path) => {
      path.style.fill = "#ad1519";
    });
  } else {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
    citiesSvgPath.forEach((path) => {
      path.style.fill = "black";
    });
  }
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    cities_Nav_Button.contains(e.target) || cities_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
    citiesSvgPath.forEach((path) => {
      path.style.fill = "black";
    });
  }
=======
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
>>>>>>> 6cc70a8617a59b27d8a0aaf2997e25be53719c86
});
