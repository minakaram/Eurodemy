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




// document.addEventListener("DOMContentLoaded", function() {
//   // Get references to the elements
//   var aboutHeader = document.getElementById("about-header");
//   var contentHeader = document.getElementById("content-header");
//   var trainingHeader = document.getElementById("training-header");
//   var courseDetailsInner = document.querySelector(".course-details-inner");
//   var aboutInner = document.querySelector(".about-inner");
//   var contentInner = document.querySelector(".content-inner");
//   var trainingInner = document.querySelector(".training-inner");

//   // Set the initial state
//   aboutHeader.classList.add("active");
//   showSection(aboutInner);

//   // Handle click events
//   aboutHeader.addEventListener("click", function() {
//     if (!aboutHeader.classList.contains("active")) {
//       aboutHeader.classList.add("active");
//       contentHeader.classList.remove("active");
//       trainingHeader.classList.remove("active");
//       showSection(aboutInner);
//     }
//   });

//   contentHeader.addEventListener("click", function() {
//     if (!contentHeader.classList.contains("active")) {
//       aboutHeader.classList.remove("active");
//       contentHeader.classList.add("active");
//       trainingHeader.classList.remove("active");
//       showSection(contentInner);
//     }
//   });

//   trainingHeader.addEventListener("click", function() {
//     if (!trainingHeader.classList.contains("active")) {
//       aboutHeader.classList.remove("active");
//       contentHeader.classList.remove("active");
//       trainingHeader.classList.add("active");
//       showSection(trainingInner);
//     }
//   });

//   // Function to show a section and hide others
//   function showSection(section) {
//     aboutInner.style.display = "none";
//     contentInner.style.display = "none";
//     trainingInner.style.display = "none";
//     section.style.display = "block";
//   }
// });


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
