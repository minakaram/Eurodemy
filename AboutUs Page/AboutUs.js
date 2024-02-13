

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


// ------------------------------------------ footer --------------------------------------
// TO MAKE YEAR IN FOOTER UP TO DATE
const yearEl = document.querySelector('.year');
console.log(yearEl);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
