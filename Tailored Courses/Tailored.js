//   navbar dropdown -----------------------------------------------------------------------------------
//small screen
const small_screen_cities_dropdown_button = document.getElementById(
    "categories-id-collapse"
  );
  const dropdown_collapse = document.getElementById(
    "categories-dropdown-collapse"
  );
  small_screen_cities_dropdown_button.addEventListener("click", () => {
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
    
  
  
  // laptop screen
  const categories_Nav_Button = document.getElementById("active-list-id");
  const categories_Dropdown = document.getElementById("categories-dropdown-id");
  categories_Nav_Button.addEventListener("click", (e) => {
    e.preventDefault();
    if (categories_Dropdown.style.visibility === "hidden") {
      categories_Dropdown.style.visibility = "visible";
      categories_Dropdown.style.opacity = "1";
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
  
  document.addEventListener("click", (e) => {
      const isClickInsideDropdown =
      cities_Nav_Button.contains(e.target) ||
      cities_Dropdown.contains(e.target);
    
      if (!isClickInsideDropdown) {
          cities_Dropdown.style.visibility = "hidden";
          cities_Dropdown.style.opacity = "0";
      }
    });



    const fileInput = document.querySelector('#file-input');
const fileImage = document.querySelector('#file-image');
const fileName = document.querySelector('#file-name');

fileImage.addEventListener('click', function() {
  fileInput.click();
});

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  if (file) {
    fileName.value = file.name;
  } else {
    fileName.value = '';
  }
});