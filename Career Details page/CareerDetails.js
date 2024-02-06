
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








const fileCvInput = document.querySelector("#file-cv-input");
const fileCvImage = document.querySelector("#file-cv-image");
const fileCvName = document.querySelector("#file-cv-name");

fileCvImage.addEventListener("click", function () {
  fileCvInput.click();
});

fileCvInput.addEventListener("change", function () {
  const file = fileCvInput.files[0];
  if (file) {
    fileCvName.value = file.name;
  } else {
    fileCvName.value = "";
  }
});

const fileCoverInput = document.querySelector("#file-cover-input");
const fileCoverImage = document.querySelector("#file-cover-image");
const fileCoverName = document.querySelector("#file-cover-name");

fileCoverImage.addEventListener("click", function () {
  fileCoverInput.click();
});

fileCoverInput.addEventListener("change", function () {
  const file = fileCoverInput.files[0];
  if (file) {
    fileCoverName.value = file.name;
  } else {
    fileCoverName.value = "";
  }
});

const FORM_ID = document.getElementById("form-id");
const apply_btn = document.getElementById("apply-btn-id");


apply_btn.addEventListener("click", () => {
    FORM_ID.scrollIntoView({ behavior: "smooth" });
  });