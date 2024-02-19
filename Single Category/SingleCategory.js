//   navbar dropdown -----------------------------------------------------------------------------------
//small screen
var small_screen_cities_dropdown_button = document.getElementById(
  "categories-id-collapse"
);
var dropdown_collapse = document.getElementById("categories-dropdown-collapse");
var isCollapseDropdownVisible = false;

small_screen_cities_dropdown_button.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation(); // Stop the event from propagating to the document

  if (!isCollapseDropdownVisible) {
    closeOtherDropdowns();
    dropdown_collapse.style.visibility = "visible";
    dropdown_collapse.style.opacity = "1";
    isCollapseDropdownVisible = true;
  } else {
    dropdown_collapse.style.visibility = "hidden";
    dropdown_collapse.style.opacity = "0";
    isCollapseDropdownVisible = false;
  }
});

var navbarToggler = document.getElementById("navbar-toggler-id");
var navbarDropdown = document.getElementById("navbar-toggler-items");
var isNavbarDropdownVisible = false;

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
  if (isCollapseDropdownVisible) {
    dropdown_collapse.style.visibility = "hidden";
    dropdown_collapse.style.opacity = "0";
    isCollapseDropdownVisible = false;
  }

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isNavbarDropdownVisible = false;
  }
}

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

// order by dropdown

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
  $(".courses-filter-container").click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});

// Get the elements
const allCoursesCheckbox = document.querySelector(
  '.all-courses-checkbox input[type="checkbox"]'
);
const coursesFilterItems = document.querySelectorAll(
  '.courses-filter-item-container input[type="checkbox"]'
);
const clearCoursesButton = document.querySelector(".clear-courses");

// Check the "all categories" checkbox and all checkboxes inside "categories-filter-items" at the beginning
allCoursesCheckbox.checked = true;
coursesFilterItems.forEach((checkbox) => (checkbox.checked = true));

// Listen for changes on the "all categories" checkbox
allCoursesCheckbox.addEventListener("change", function () {
  const isChecked = this.checked;

  // Update the checkboxes inside "categories-filter-items" based on the "all categories" checkbox state
  coursesFilterItems.forEach((checkbox) => (checkbox.checked = isChecked));
});

// Listen for changes on the checkboxes inside "categories-filter-items"
coursesFilterItems.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Check if all checkboxes inside "categories-filter-items" are checked
    const areAllChecked = Array.from(coursesFilterItems).every(
      (checkbox) => checkbox.checked
    );

    // Update the "all categories" checkbox based on the state of checkboxes inside "categories-filter-items"
    allCoursesCheckbox.checked = areAllChecked;
  });
});

// Listen for click on the "Clear" button
clearCoursesButton.addEventListener("click", function () {
  // Uncheck all checkboxes inside "categories-filter-items"
  coursesFilterItems.forEach((checkbox) => (checkbox.checked = false));

  // Uncheck the "all categories" checkbox
  allCoursesCheckbox.checked = false;
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


// Cities dropdown ----------------------------------------------------------------------------------

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