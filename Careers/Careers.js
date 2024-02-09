//   navbar dropdown ----------------------------------------------------------------------------------

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
});


var navbarToggler = document.getElementById('navbar-toggler-id');
var navbarDropdown = document.getElementById('navbar-toggler-items');
var isDropdownVisible = false;

// Toggle visibility when the toggler is clicked
navbarToggler.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
  isDropdownVisible = !isDropdownVisible; // Toggle the visibility state
  navbarDropdown.style.visibility = isDropdownVisible ? 'visible' : 'hidden';
  navbarDropdown.style.opacity = isDropdownVisible ? '1' : '0';
});

// Hide dropdown when clicking outside of it
document.addEventListener('click', event => {
  if (isDropdownVisible && !navbarDropdown.contains(event.target)) {
    navbarDropdown.style.visibility = 'hidden';
    navbarDropdown.style.opacity = '0';
    isDropdownVisible = false; // Update the visibility state
  }
});

// Stop propagation when clicking inside the dropdown
navbarDropdown.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
});


// swiper ---------------------------------------------------------------------------------------------

var myStaffSwiper = new Swiper(".swiper-container1", {
  initialSlide: 2,
  loop: false,
  pagination: {
    el: ".experience-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".experience-button-next", // CSS class or HTML element for next arrow
    prevEl: ".experience-button-prev", // CSS class or HTML element for prev arrow
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
        ".experience-swiper-pagination"
      );
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      if (paginationDots.length > maxVisibleDots) {
        // Hide dots more than 4 and replace them with an image
        paginationDots.forEach((dot, index) => {
          if (index >= maxVisibleDots) {
            dot.style.display = "none"; // Hide the dot
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
      }
    },
  },
});

// ------------------------------------------- form -------------------------------------------
const fileCoverInput = document.querySelector("#file-cv-careers");
const fileCoverImage = document.querySelector("#file-cover-image");
const fileCoverName = document.querySelector("#cv-careers");
const fileCvInput = document.querySelector("#cover-input-careers");
const fileCvImage = document.querySelector("#file-cv-image");
const fileCvName = document.querySelector("#cover-letter-input-careers");

fileCoverImage.addEventListener("click", function () {
  fileCoverInput.click();
});
fileCvImage.addEventListener("click", function () {
  fileCvInput.click();
});
fileCoverInput.addEventListener("change", function () {
  const file = fileCoverInput.files[0];
  if (file) {
    fileCoverName.value = file.name;
  } else {
    fileCoverName.value = "";
  }
});
fileCvInput.addEventListener("change", function () {
  const file = fileCvInput.files[0];
  if (file) {
    fileCvName.value = file.name;
  } else {
    fileCvName.value = "";
  }
});
const clearCv = document.getElementById("clearCv");

clearCv.addEventListener("click", () => {
  fileCoverName.value = "";
});
