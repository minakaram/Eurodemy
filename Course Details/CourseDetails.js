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
  }
});

// copy course code

const copyButton = document.getElementById("copy-button-id");
const coursCode = document.getElementById("course-code-id").innerText;

copyButton.addEventListener("click", () => {
  // Copy text to clipboard
  navigator.clipboard.writeText(coursCode);
  copyButton.innerHTML = `<img src="Assets/copy.svg" alt="">Copied`;
  //   .then(() => {
  //     console.log("Text copied to clipboard:", coursCode);
  //     alert("Text copied to clipboard!");
  //   })
  //   .catch((error) => {
  //     console.error("Error copying text:", error);
  //     alert("Error copying text. Please try again.");
  //   });
});

//navigation buttons ---------------------------------------------------------------------------------------

$(document).ready(function () {
  // Set the initial state
  $("#about-header").addClass("active");
  $(".about-inner").show();
  $(".content-inner").hide();
  $(".training-inner").hide();
  // Handle click events
  $("#about-header").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#content-header, #training-header").removeClass("active");
      $(".about-inner").show(); // Show the "About" section
      $(".content-inner, .training-inner").hide(); // Hide other sections
    }
  });

  $("#content-header").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#about-header, #training-header").removeClass("active");
      $(".content-inner").show(); // Show the "Content" section
      $(".about-inner, .training-inner").hide(); // Hide other sections
    }
  });

  $("#training-header").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#about-header, #content-header").removeClass("active");
      $(".training-inner").show(); // Show the "Training Methodology" section
      $(".about-inner, .content-inner").hide(); // Hide other sections
    }
  });
});

// about drop downs --------------------------------------------------------------------------------------
//  introduction Dropdown
$(document).ready(function () {
  $("#about-introduction-toggle").click(function () {
    $(".about-introduction-content").slideToggle(function () {
      $(".about-introduction .about-introduction-head h5").toggleClass(
        "remove-border"
      );
    });
    $(this).toggleClass("rotate-180");
  });
});

//seminar Dropdown

$(document).ready(function () {
  $("#about-seminar-toggle").click(function () {
    $(".about-seminar-content").slideToggle(function () {
      $(".about-Seminar-Objectives .about-seminar-head h5").toggleClass(
        "remove-border"
      );
    });
    $(this).toggleClass("rotate-180");
  });
});

// training methodology Dropdown
$(document).ready(function () {
  $("#about-training-toggle").click(function () {
    $(".about-training-content").slideToggle(function () {
      $(".about-training-methodology .about-training-head h5").toggleClass(
        "remove-border"
      );
    });
    $(this).toggleClass("rotate-180");
  });
});

//Organozational impact Dropdown
$(document).ready(function () {
  $("#about-organizational-toggle").click(function () {
    $(".about-organizational-content").slideToggle(function () {
      $(
        ".about-organisational-impact .about-organizational-head h5"
      ).toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

// personal impact Dropdown
$(document).ready(function () {
  $("#about-personal-toggle").click(function () {
    $(".about-personal-content").slideToggle(function () {
      $(".about-personal-impact .about-personal-head h5").toggleClass(
        "remove-border"
      );
    });
    $(this).toggleClass("rotate-180");
  });
});

// attendance Dropdown
$(document).ready(function () {
  $("#about-attendance-toggle").click(function () {
    $(".about-attendance-content").slideToggle(function () {
      $(".about-attendance .about-attendance-head h5").toggleClass(
        "remove-border"
      );
    });
    $(this).toggleClass("rotate-180");
  });
});

// content Dropdowns -----------------------------------------------------------------------------------------
//day1 dropdown
$(document).ready(function () {
  $("#content-day1-toggle").click(function () {
    $(".content-day1-content").slideToggle(function () {
      $(".content-day1 .content-day1-head h5").toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

//day2 dropdown
$(document).ready(function () {
  $("#content-day2-toggle").click(function () {
    $(".content-day2-content").slideToggle(function () {
      $(".content-day2 .content-day2-head h5").toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

//day3 dropdown
$(document).ready(function () {
  $("#content-day3-toggle").click(function () {
    $(".content-day3-content").slideToggle(function () {
      $(".content-day3 .content-day3-head h5").toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

//day4 dropdown
$(document).ready(function () {
  $("#content-day4-toggle").click(function () {
    $(".content-day4-content").slideToggle(function () {
      $(".content-day4 .content-day4-head h5").toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

//day5 dropdown
$(document).ready(function () {
  $("#content-day5-toggle").click(function () {
    $(".content-day5-content").slideToggle(function () {
      $(".content-day5 .content-day5-head h5").toggleClass("remove-border");
    });
    $(this).toggleClass("rotate-180");
  });
});

// Cities dropdown checkboxes -------------------------------------------------------------------------------

$(document).ready(function () {
  $(".filterByCity").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

const allCitiesCheckbox = document.querySelector(
  '.all-cities-checkbox input[type="checkbox"]'
);
const citiesFilterItems = document.querySelectorAll(
  '.city-filter-item-container input[type="checkbox"]'
);
const clearCitiesButton = document.querySelector(".clear-cities");

allCitiesCheckbox.checked = true;
citiesFilterItems.forEach((checkbox) => (checkbox.checked = true));

allCitiesCheckbox.addEventListener("change", function () {
  const isChecked = this.checked;

  citiesFilterItems.forEach((checkbox) => (checkbox.checked = isChecked));
});

citiesFilterItems.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const areAllChecked = Array.from(citiesFilterItems).every(
      (checkbox) => checkbox.checked
    );

    allCitiesCheckbox.checked = areAllChecked;
  });
});

clearCitiesButton.addEventListener("click", function () {
  // Uncheck all checkboxes inside "categories-filter-items"
  citiesFilterItems.forEach((checkbox) => (checkbox.checked = false));

  // Uncheck the "all categories" checkbox
  allCitiesCheckbox.checked = false;
});

//  Online Dropdown checkboxes ------------------------------------------------------------------------------------
$(document).ready(function () {
  $(".filterByStatus").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

// availability dropdown checkboxes  ------------------------------------------------------------------------------
$(document).ready(function () {
  $(".filterByAvailability").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

//swiper recomemnded ----------------------------------------------------------------------------------------------
const mySwiper = new Swiper(".swiper-container1", {
  spaceBetween: 0,
  initialSlide: 2,
  // loop:true,
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
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

      grid: {
        rows: 2,
      },
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 70,
      grid: {
        rows: 2,
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
