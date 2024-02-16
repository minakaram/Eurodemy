// navbar dropdown -----------------------------------------------------------------
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

const cities_Button_small_Screen = document.getElementById("collapse-dropdown");
const small_screen_dropdown = document.getElementById(
  "cities-dropdown-collapse-id"
);
let isCopllaseDropdownVisible = false;

cities_Button_small_Screen.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!isCopllaseDropdownVisible) {
    closeOtherDropdowns();
    small_screen_dropdown.style.visibility = "visible";
    small_screen_dropdown.style.opacity = "1";
    isCopllaseDropdownVisible = true;
  } else {
    small_screen_dropdown.style.visibility = "hidden";
    small_screen_dropdown.style.opacity = "0";
    isCopllaseDropdownVisible = false;
  }
});

var navbarToggler = document.getElementById("navbar-toggler-id");
var navbarDropdown = document.getElementById("navbar-toggler-items");
let isNavbarDropdownVisible = false;

navbarToggler.addEventListener("click", (event) => {
  event.stopPropagation();

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isNavbarDropdownVisible = false;
  } else {
    closeOtherDropdowns();
    navbarDropdown.style.visibility = "visible";
    navbarDropdown.style.opacity = "1";
    isNavbarDropdownVisible = true;
  }
});

document.addEventListener("click", (event) => {
  closeOtherDropdowns();
});

function closeOtherDropdowns() {
  if (isCopllaseDropdownVisible) {
    small_screen_dropdown.style.visibility = "hidden";
    small_screen_dropdown.style.opacity = "0";
    isCopllaseDropdownVisible = false;
  }

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isNavbarDropdownVisible = false;
  }
}
const cities_Nav_Button = document.getElementById("active-ul-list");
const cities_Dropdown = document.getElementById("cities-dropdown-id");

cities_Nav_Button.addEventListener("click", (e) => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(cities_Dropdown);

  if (computedStyles.visibility === "hidden") {
    console.log("in");
    cities_Dropdown.style.visibility = "visible";
    cities_Dropdown.style.opacity = "1";
  } else {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
    console.log("o");
  }
});

// Event listener to close dropdown when clicking outside
document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    cities_Nav_Button.contains(e.target) || cities_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
    console.log("o");
  }
});

function show(option) {
  document.querySelector(".textBox").value = option;
}

let orderByDropdown = document.querySelector(".orderBy-dropdown");
orderByDropdown.addEventListener("click", () => {
  orderByDropdown.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (!orderByDropdown.contains(targetElement)) {
    orderByDropdown.classList.remove("active");
  }
});

// categories dropddown show --------------------------------------------------------------------------------------
$(document).ready(function () {
  $(".categories-filter-container").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

// Get the elements
const allCategoriesCheckbox = document.querySelector(
  '.all-cateogories-checkbox input[type="checkbox"]'
);
const categoriesFilterItems = document.querySelectorAll(
  '.categories-filter-item-container input[type="checkbox"]'
);
const clearCategoriesButton = document.querySelector(".clear-categories");

// Check the "all categories" checkbox and all checkboxes inside "categories-filter-items" at the beginning
allCategoriesCheckbox.checked = true;
categoriesFilterItems.forEach((checkbox) => (checkbox.checked = true));

// Listen for changes on the "all categories" checkbox
allCategoriesCheckbox.addEventListener("change", function () {
  const isChecked = this.checked;

  // Update the checkboxes inside "categories-filter-items" based on the "all categories" checkbox state
  categoriesFilterItems.forEach((checkbox) => (checkbox.checked = isChecked));
});

// Listen for changes on the checkboxes inside "categories-filter-items"
categoriesFilterItems.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Check if all checkboxes inside "categories-filter-items" are checked
    const areAllChecked = Array.from(categoriesFilterItems).every(
      (checkbox) => checkbox.checked
    );

    // Update the "all categories" checkbox based on the state of checkboxes inside "categories-filter-items"
    allCategoriesCheckbox.checked = areAllChecked;
  });
});

// Listen for click on the "Clear" button
clearCategoriesButton.addEventListener("click", function () {
  // Uncheck all checkboxes inside "categories-filter-items"
  categoriesFilterItems.forEach((checkbox) => (checkbox.checked = false));

  // Uncheck the "all categories" checkbox
  allCategoriesCheckbox.checked = false;
});

// durations dropdown ----------------------------------------------------------------------------------

$(document).ready(function () {
  $(".filterByDurations").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

const allDurationsCheckbox = document.querySelector(
  '.all-durations-checkbox input[type="checkbox"]'
);
const durationFilterItems = document.querySelectorAll(
  '.duration-filter-item-container input[type="checkbox"]'
);
const clearDurationsButton = document.querySelector(".clear-durations");

allDurationsCheckbox.checked = true;
durationFilterItems.forEach((checkbox) => (checkbox.checked = true));

allDurationsCheckbox.addEventListener("change", function () {
  const isChecked = this.checked;

  durationFilterItems.forEach((checkbox) => (checkbox.checked = isChecked));
});

durationFilterItems.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const areAllChecked = Array.from(durationFilterItems).every(
      (checkbox) => checkbox.checked
    );

    allDurationsCheckbox.checked = areAllChecked;
  });
});

clearDurationsButton.addEventListener("click", function () {
  // Uncheck all checkboxes inside "categories-filter-items"
  durationFilterItems.forEach((checkbox) => (checkbox.checked = false));

  // Uncheck the "all categories" checkbox
  allDurationsCheckbox.checked = false;
});

//  Online Dropdown --------------------------------------------------------------------------------------
$(document).ready(function () {
  $(".filterByStatus").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

// availability dropdown ---------------------------------------------------------------------------------
$(document).ready(function () {
  $(".filterByAvailability").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

//swiper -------------------------------------------------------------------------------------------------
// const mySwiper = new Swiper(".swiper-container1", {
//   // spaceBetween: 30,
//   slidesPerView: 2,
//   grid: {
//     rows: 5,
//   },
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination1",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // on: {
//   //   init: function () {
//   //     const paginationContainer = document.querySelector(".swiper-pagination1");
//   //     const maxVisibleDots = 4;

//   //     const paginationDots = Array.from(paginationContainer.children);

//   //     paginationDots.forEach((dot, index) => {
//   //       if (index >= maxVisibleDots) {
//   //         dot.style.display = "none";
//   //       }
//   //     });

//   //     const svgDots = document.createElement("div");
//   //     svgDots.style.display = "flex";
//   //     svgDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
//   //     <rect width="8" height="8" rx="1" fill="#F2EDED"/>
//   //     <rect x="10" width="8" height="8" rx="1" fill="#F2EDED"/>
//   //     <rect x="20" width="8" height="8" rx="1" fill="#F2EDED"/>
//   //     <rect x="30" width="8" height="8" rx="1" fill="#F2EDED"/>
//   //   </svg>`;
//   //     paginationContainer.appendChild(svgDots);
//   //   },
//   // },
//   breakpoints: {
//     1400: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       grid: {
//         rows: 5,
//       },
//     },
//     1025: {
//       slidesPerView: 4,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       // grid: {
//       //   rows: 2,
//       // },
//     },
//     576: {
//       slidesPerView: 1,
//       spaceBetween: 70,
//       // grid: {
//       //   rows: 2,
//       // },
//     },
//   },
// });

const mySwiper = new Swiper(".swiper-container1", {
  spaceBetween: 0,
  initialSlide: 2,
  loop:true,
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
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 5,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

      grid: {
        rows: 5,
      },
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 70,
      grid: {
        rows: 3,
      },
    },
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(".swiper-pagination1");
      const maxVisibleDots = 4;

      const paginationDots = Array.from(paginationContainer.children);

      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none";
        }
      });

      if (paginationDots.length > maxVisibleDots) {
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
mySwiper.on("slideChange", function () {
  const activeSlideIndex = mySwiper.realIndex;
  const paginationContainer = document.querySelector(".swiper-pagination1");
  const maxVisibleDots = 4;

  if (activeSlideIndex >= maxVisibleDots) {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        if (index < maxVisibleDots) {
          rect.style.fill = "black";
        }
      });
    }
  } else {
    const svgDots = paginationContainer.querySelector("svg");
    if (svgDots) {
      const rects = svgDots.querySelectorAll("rect");
      rects.forEach((rect, index) => {
        rect.style.fill = "#F2EDED";
      });
    }
  }
});
