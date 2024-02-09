// category-courses-section----------------------------------------------------------------------------------

// swiper-------------------------

const mySwiper = new Swiper(".categories-swiper-container1", {
  spaceBetween: 0,
  slidesPerGroup: 5,
  initialSlide: 3,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // CSS class or HTML element for next arrow
    prevEl: ".swiper-button-prev", // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1025: {
      slidesPerView: 5,
      spaceBetween: 70,
      grid: {
        rows: 4,
      },
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      initialSlide: 3,
      spaceBetween: 20,

      grid: {
        rows: 4,
      },
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 70,
      grid: {
        rows: 4,
      },
    },
  },
});

//   navbar dropdown -----------------------------------------------------------------------------------
//small screen
const small_screen_cities_dropdown_button = document.getElementById(
  "categories-id-collapse"
);
const dropdown_collapse = document.getElementById(
  "categories-dropdown-collapse"
);
small_screen_cities_dropdown_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (dropdown_collapse.style.visibility === "hidden") {
    dropdown_collapse.style.visibility = "visible";
    dropdown_collapse.style.opacity = "1";
    console.log("s");
  } else {
    dropdown_collapse.style.visibility = "hidden";
    dropdown_collapse.style.opacity = "0";
  }
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    small_screen_cities_dropdown_button.contains(e.target) ||
    dropdown_collapse.contains(e.target);

  if (!isClickInsideDropdown) {
    dropdown_collapse.style.visibility = "hidden";
    dropdown_collapse.style.opacity = "0";
  }
});






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
  }
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    categories_Nav_Button.contains(e.target) ||
    categories_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
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
// Toggle visibility when the toggler is clicked
navbarToggler.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
  navbarDropdown.style.visibility =
    navbarDropdown.style.visibility === 'hidden' ? 'visible' : 'hidden';
  navbarDropdown.style.opacity =
    navbarDropdown.style.opacity === '0' ? '1' : '0';
});
// Hide dropdown when clicking outside of it
document.addEventListener('click', event => {
  if (
    navbarDropdown.style.visibility === 'visible' &&
    !navbarDropdown.contains(event.target)
  ) {
    navbarDropdown.style.visibility = 'hidden';
    navbarDropdown.style.opacity = '0';
  }
});
// Stop propagation when clicking inside the dropdown
navbarDropdown.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
});
