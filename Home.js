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
      path.style.fill = "#ad1519 !important";
    });
  } else {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "#fff";
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
      path.style.fill = "#fff";
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
      path.style.fill = "#ad1519 !important";
    });
  } else {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
    citiesSvgPath.forEach((path) => {
      path.style.fill = "#fff";
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
      path.style.fill = "#fff";
    });
  }
});

var navbarToggler = document.getElementById("navbar-toggler-id");
var navbarDropdown = document.getElementById("navbar-toggler-items");
var isDropdownVisible = false;

// Toggle visibility when the toggler is clicked
navbarToggler.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the click event from reaching the document
  isDropdownVisible = !isDropdownVisible; // Toggle the visibility state
  navbarDropdown.style.visibility = isDropdownVisible ? "visible" : "hidden";
  navbarDropdown.style.opacity = isDropdownVisible ? "1" : "0";
});

// Hide dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  if (isDropdownVisible && !navbarDropdown.contains(event.target)) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isDropdownVisible = false; // Update the visibility state
  }
});

// Stop propagation when clicking inside the dropdown
navbarDropdown.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the click event from reaching the document
});

// saerch overlay section ---------------------------------------------------------------------------------------
$(document).ready(function () {
  $("#search-close-btn").click(function () {
    $("#search-overlay").fadeOut();
    $("#search-open-btn").show();
  });
  $("#search-open-btn").click(function () {
    // $(this).hide();
    $("#search-overlay").fadeIn();
  });
});

const CATEGORIES = [
  "Effective project management is crucial for timely completion of tasks.",
  "The principles of management guide organizational decision-making.",
  "Classroom management is key to a productive learning environment.",
  "Strategic management involves planning for long-term success.",
  "Crisis management skills are essential in times of uncertainty.",
  "Financial management plays a vital role in business sustainability.",
  "Resource management ensures optimal utilization of available assets.",
  "Time management is critical for maintaining work-life balance.",
  "Human resource management focuses on employee development.",
  "Risk management helps identify and mitigate potential threats.",
  "Quality management systems ensure product and service excellence.",
  "Stakeholder management is important for maintaining positive relationships.",
  "Classroom management techniques vary based on teaching styles.",
  "The healthcare system requires effective management for patient care.",
  "Change management addresses transitions within an organization.",
  "Knowledge management enhances organizational learning.",
  "Conflict management strategies help resolve disputes amicably.",
  "Facility management oversees the maintenance of physical spaces.",
  "Talent management is crucial for attracting and retaining skilled employees.",
  "Vendor management is essential for successful partnerships.",
];
const CLOSE_OVERLAY = document.getElementById("search-close-btn");
const CATEGORY_ARROW = document.getElementById("search-by-category-arrow");
const DROP_DOWN_CONTAINER = document.getElementById(
  "search-overlay-dropdown-container"
);
const overlayInputs = Array.from(
  document.querySelectorAll("#search-overlay input")
);
const SEARCH_BUTTON = document.querySelector(".search-button-overlay");
const CATEGORY_INPUT = document.getElementById("category-input-search-overlay");
CATEGORY_ARROW.addEventListener("click", () => {
  // Check if the dropdown is currently visible
  const isDropdownVisible = DROP_DOWN_CONTAINER.style.display === "block";

  if (isDropdownVisible) {
    // Hide the dropdown
    DROP_DOWN_CONTAINER.style.display = "none";
    // Clear the content of the dropdown when hiding it
    DROP_DOWN_CONTAINER.innerHTML = "";
  } else {
    // Show the dropdown
    CATEGORIES.forEach((category) => {
      DROP_DOWN_CONTAINER.innerHTML += `<div class="search-overlay-dropdown-item">
        ${category}
        <label class="custom-checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>`;
    });

    DROP_DOWN_CONTAINER.style.display = "block";
  }
});

CATEGORY_INPUT.addEventListener("input", (e) => {
  const inputValue = e.target.value.toLowerCase();
  const filteredCategories = CATEGORIES.filter((item) =>
    item.toLowerCase().includes(inputValue)
  );

  if (inputValue === "") {
    DROP_DOWN_CONTAINER.innerHTML = "";
    DROP_DOWN_CONTAINER.style.display = "none";
    return;
  }

  DROP_DOWN_CONTAINER.style.display = "block"; // Show the dropdown container

  DROP_DOWN_CONTAINER.innerHTML = ""; // Clear existing content

  filteredCategories.forEach((item) => {
    const highlightedItem = item.replace(
      new RegExp(inputValue, "ig"),
      (match) => `<span style="color: #FABD00;">${match}</span>`
    );

    DROP_DOWN_CONTAINER.innerHTML += `
      <div class="search-overlay-dropdown-item">
        ${highlightedItem}
        <label class="custom-checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    `;
  });
});

CLOSE_OVERLAY.addEventListener("click", () => {
  overlayInputs.forEach((input) => {
    input.value = "";
    SEARCH_BUTTON.style.display = "none";
  });
  DROP_DOWN_CONTAINER.innerHTML = "";
});

function updateSearchButtonVisibility() {
  let hasValue = false;

  overlayInputs.forEach((input) => {
    if (input.value) {
      hasValue = true;
    }
  });

  const hasMatchedCategories =
    DROP_DOWN_CONTAINER.querySelectorAll(".search-overlay-dropdown-item")
      .length > 0;

  if (hasValue && hasMatchedCategories) {
    SEARCH_BUTTON.style.visibility = "visible";
  } else {
    SEARCH_BUTTON.style.visibility = "hidden";
  }
}

overlayInputs.forEach((input) => {
  input.addEventListener("input", updateSearchButtonVisibility);
});

updateSearchButtonVisibility();

SEARCH_BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  const checkedCheckboxes = Array.from(
    DROP_DOWN_CONTAINER.querySelectorAll("input[type='checkbox']:checked")
  );
  const selectedCourses = checkedCheckboxes.map(
    (checkbox) => checkbox.nextSibling.parentNode.offsetParent.innerText
  );

  localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  window.location = "./CourseSearchResult/CourseSearchResult.html";
});

// hero section ---------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".owl-carousel-hero").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: true,
    // autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      610: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
const searchCourseHero = document.querySelector(".searchInput");
const searchCourseHeroDropdown = document.getElementById(
  "search-course-dropdown-container"
);
searchCourseHeroDropdown.style.display = "none";

const handleSearchCourseHero = (e) => {
  const inputValue = e.target.value.toLowerCase();
  const filteredCategories = CATEGORIES.filter((item) =>
    item.toLowerCase().includes(inputValue)
  );
  console.log(filteredCategories);

  if (inputValue === "") {
    searchCourseHeroDropdown.innerHTML = "";
    searchCourseHeroDropdown.style.display = "none";
    return;
  }

  searchCourseHeroDropdown.style.display = "block"; // Show the dropdown container
  searchCourseHeroDropdown.innerHTML = ""; // Clear existing content

  if (!filteredCategories.length) {
    searchCourseHeroDropdown.style.display = "none";
  }
  filteredCategories.forEach((item) => {
    const highlightedItem = item.replace(
      new RegExp(inputValue, "ig"),
      (match) => `<span style="color: #FABD00;">${match}</span>`
    );

    searchCourseHeroDropdown.innerHTML += `
      <div class="search-overlay-dropdown-item" style="color:white">
        ${highlightedItem}
      </div>
    `;
  });
};
window.addEventListener("click", () => {
  searchCourseHeroDropdown.style.display = "none";
  searchCourseHero.value = "";
});
searchCourseHero.addEventListener("input", handleSearchCourseHero);

window.addEventListener("scroll", function () {
  let navigationBar = document.querySelector(".navigationBar");
  let logoImg = document.querySelector(".logo-image");
  let arabicTxt = document.querySelector(".arabic-course-txt");
  let arabicIcon = document.querySelector(".arabic-icon-img");
  let downArrowsNav = document.querySelectorAll(".down-arrow-nav");
  let scrollHeight = window.scrollY;

  if (scrollHeight > 0) {
    navigationBar.classList.add("sticky");
    logoImg.src = "./Assets/Logoheroblack.svg";
    arabicTxt.style.color = "#fff";
    arabicIcon.src = "./Assets/Arabic_Iconwhite.svg";
    downArrowsNav.forEach(function (arrow) {
      arrow.src = "./Assets/DownArrowBlack.svg";
    });
    citiesSvgPath.forEach((path) => {
      path.style.fill = "#fff";
    });
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "#fff";
    });
  } else {
    navigationBar.classList.remove("sticky");
    logoImg.src = "./Assets/Logoherowhite.svg";
    arabicTxt.style.color = "#bfb6b6";
    arabicIcon.src = "./Assets/Arabic_Icon.svg";
    downArrowsNav.forEach(function (arrow) {
      arrow.src = "./Assets/DownArrowWhite.svg";
    });
  }
});
document.addEventListener("click", function (event) {
  let navigationBar = document.querySelector(".navigationBar");
  if (!navigationBar.contains(event.target)) {
    event.stopPropagation();
  }
});
// ----------------------------------------------------------------------------------------------------------------

function initializeCarousel(carousel) {
  carousel.owlCarousel({
    loop: false,
    margin: 24,
    nav: true,
    dots: true,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
      },
      681: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1025: {
        items: 4,
      },
    },
  });

  let customDotsContainer = carousel.find(".owl-dots");
  let customDots = customDotsContainer.find(".owl-dot");
  let maxVisibleDots = 3; // Set the maximum number of visible dots

  if (customDots.length > maxVisibleDots) {
    // Set the width for the extra dots to 10px
    for (let i = maxVisibleDots; i < customDots.length; i++) {
      // Get the span inside the dot and set its style
      customDots.eq(i).find("span").css("width", "10px");
      customDots.eq(i).find("span").css("margin", "0 2px");
    }
  }

  //   let customDotsContainer = carousel.find(".owl-dots");
  // let customDots = customDotsContainer.find(".owl-dot");
  // let maxVisibleDots = 3; // Set the maximum number of visible dots

  // if (customDots.length > maxVisibleDots) {
  //   // Set the width and margin for the extra dots
  //   for (let i = maxVisibleDots; i < customDots.length; i++) {
  //     // Get the span inside the dot and set its style
  //     let dotSpan = customDots.eq(i).find("span");
  //     dotSpan.css("width", "10px");
  //     dotSpan.css("margin", "0 2px"); // Set the margin to 2px
  //   }
  // }
}

initializeCarousel($(".carousel1"));
initializeCarousel($(".carousel2"));

//------------------------------------ cities slider---------------------------------
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".cities-wrapper");
  const slideWidth = document.querySelector(".swiper-slide-cities").offsetWidth;
  const newPosition = -index * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;

  updatePagination();
  // Call the function to update data when the slide changes
}

function nextCitiesSlide() {
  currentIndex =
    (currentIndex + 1) %
    document.querySelectorAll(".swiper-slide-cities").length;
  showSlide(currentIndex);
}

function prevCitiesSlide() {
  currentIndex =
    (currentIndex -
      1 +
      document.querySelectorAll(".swiper-slide-cities").length) %
    document.querySelectorAll(".swiper-slide-cities").length;
  showSlide(currentIndex);
}

function setSecondContainerWidth() {
  const cityWidth = document.querySelector(".card-city-width");
  const cityCurrentWidth = cityWidth.offsetWidth;

  const loadCourses = document.querySelector(".view-courses-width");
  loadCourses.style.width = `${cityCurrentWidth}px`;
  showSlide(0);
}

function updatePagination() {
  const paginationContainer = document.querySelector(".pagination-container");
  paginationContainer.innerHTML = ""; // Clear existing pagination

  const totalSlides = document.querySelectorAll(".swiper-slide-cities").length;

  for (let i = 0; i < totalSlides; i++) {
    const paginationItem = document.createElement("div");
    paginationItem.classList.add("pagination-item");

    // Add a class to the active pagination item
    if (i === currentIndex) {
      paginationItem.classList.add("active");
    }

    // Add a click event listener to each pagination tab
    paginationItem.addEventListener("click", function () {
      showSlide(i);
    });

    paginationContainer.appendChild(paginationItem);
  }
}
setSecondContainerWidth();

window.addEventListener("resize", setSecondContainerWidth);

// category-courses-section----------------------------------------------------------------------------------

// swiper-------------------------

const mySwiper = new Swiper(".swiper-container1", {
  spaceBetween: 30,
  loop: true,
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

      const svgDots = document.createElement("div");
      svgDots.style.display = "flex";
      svgDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
      <rect width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="10" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="20" width="8" height="8" rx="1" fill="#F2EDED"/>
      <rect x="30" width="8" height="8" rx="1" fill="#F2EDED"/>
    </svg>`;
      paginationContainer.appendChild(svgDots);
    },
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
    1025: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 70,
      grid: {
        rows: 2,
      },
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

// gallery Memory Section ------------------------------------------------------------------------------
function handleGalleryWidth() {
  const container = document.getElementById("memorySectionContainer");
  const containerWidth = container.offsetHeight;
  const gallery = document.getElementById("AsideGallery");

  // Check if the screen width is larger than 1025px
  if (window.innerWidth > 1024) {
    gallery.style.height = `${containerWidth}px`;
  }
}
handleGalleryWidth();
window.addEventListener("resize", handleGalleryWidth);
const certificateInput = document.getElementById("training-certificate-code");
const certificateInputIcon = document.querySelector(".searchIcon-certificate");
const certificateSvg = document.querySelector(".certificate-pana-container");
const certificateContainer = document.querySelector(
  ".trainee-certificates-container"
);
const downloadIcon = document.getElementById("downloadIcon");

const certificateObj = [
  {
    name: "Javascript-intermediate",
    date: "17/3/2023",
    website: "www.eurodemy.com",
  },
  {
    name: "css-3",
    date: "17/3/2023",
    website: "www.eurodemy.com",
  },
  {
    name: "Javascript-basics",
    date: "17/3/2023",
    website: "www.eurodemy.com",
  },
];
const resultedData = document.createElement("div");
resultedData.className = "filteredResultsContainer";
function handleSearchCertificate(e) {
  const inputVal = e.target.value;

  if (inputVal === "") {
    certificateInputIcon.src = "./Assets/searchIcon.svg";
    certificateSvg.style.display = "block";
    resultedData.innerHTML = "";
  } else {
    resultedData.innerHTML = "";
    certificateInputIcon.src = "./Assets/searchIcon-certificateHover.svg";
    certificateSvg.style.display = "none";
    const selectedCertificate = certificateObj.filter((item) =>
      item.name.toLowerCase().includes(inputVal)
    );
    console.log(selectedCertificate);

    const averageResult = document.createElement("div");
    averageResult.innerHTML = `<div class="average-result-certificate">${selectedCertificate.length} Result <img src="./Assets/Exit_button_certificate.svg" alt="exit" style="cursor:pointer" onclick="handleExitFilteredResult()"/></div>`;
    resultedData.appendChild(averageResult);
    const filteredResultWrapper = document.createElement("div");
    filteredResultWrapper.className = "filteredResultWrapper";
    resultedData.appendChild(filteredResultWrapper);
    selectedCertificate.forEach((item) => {
      filteredResultWrapper.innerHTML += `<div class="filteredResult">
        <div>
          <div class="crt-name"><span class="spanRed">${item.name}</span><span> ${item.name}</span></div>
          <div class="crt-date"><span>Certificate was issued on : </span>${item.date}</div>
          <div id="imageModal" class="certificate-modal">
            <span class="certificate-modal-close" onclick="closeImageModal()">&times;</span>
            <img id="displayedImage" src="./Assets/searchIcon.svg" alt="Displayed Image">
          </div>
          <div class="crt-website">Gained from [<span>${item.website}</span>]</div>
        </div>
        <div class="filteredResultIcons">
          <img src="./Assets/downloadFile.svg" alt="download" id="downloadIcon" onclick="downloadFile()"/>
          <img src="./Assets/seeFile.svg" alt="see certificate" id="showImageIcon" onclick="openImageModal()"/>
        </div>
      </div>`;
    });
    // Now you can manipulate textContainer

    certificateContainer.appendChild(resultedData);
  }
}
function handleExitFilteredResult() {
  certificateInput.value = "";
  certificateInputIcon.src = "./Assets/searchIcon.svg";
  certificateSvg.style.display = "block";
  resultedData.innerHTML = "";
}
function openImageModal() {
  const modal = document.getElementById("imageModal");
  const image = document.getElementById("displayedImage");

  modal.style.display = "block";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close modal if clicked outside the image
window.addEventListener("click", function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function downloadFile() {
  // Create a Blob with your file content or a data URI
  const fileContent = "Hello, this is your file content!";
  const blob = new Blob([fileContent], { type: "text/plain" });

  // Create an anchor element and set its attributes
  const downloadLink = document.createElement("a");
  downloadLink.href = window.URL.createObjectURL(blob);
  downloadLink.download = "example.txt"; // Set the desired file name

  // Append the anchor to the document and trigger a click event
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up: remove the anchor element
  document.body.removeChild(downloadLink);
}

certificateInput.addEventListener("input", handleSearchCertificate);
// testimonial section ---------------------------------------------------------------------------------

var swiper = new Swiper(".testimonialSwiper", {
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    reverseDirection: true, // Set the delay to 10 seconds (in milliseconds)
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2", // CSS class or HTML element for next arrow
    prevEl: ".swiper-button-prev2", // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  initialSlide: 0,
  on: {
    init: function () {
      const paginationContainer = document.querySelector(".swiper-pagination2");
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      // Hide dots more than 4 and replace them with an image
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none"; // Hide the dot
          // Replace hidden dots with an image
        }
      });
      const svgDots = document.createElement("div");
      svgDots.style.display = "flex";
      svgDots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="8" viewBox="0 0 38 8" fill="none">
      <g opacity="0.2">
        <rect width="8" height="8" rx="1" fill="white"/>
        <rect x="10" width="8" height="8" rx="1" fill="white"/>
        <rect x="20" width="8" height="8" rx="1" fill="white"/>
        <rect x="30" width="8" height="8" rx="1" fill="white"/>
      </g>
    </svg>`;
      paginationContainer.appendChild(svgDots);
    },
    slideChangeTransitionEnd: function () {
      updateImageShow();
    },
  },
});


function updateImageShow() {
  // Check if the screen width is larger than 1024 pixels
  if (window.innerWidth > 1024) {
    var activeSlide = document.querySelector(
      ".testimonial-section .swiper-slide.swiper-slide-active"
    );
    var allSlides = document.querySelectorAll(
      ".testimonial-section .swiper-slide"
    );
    var allSlidersTestimonialInfo = document.querySelectorAll(
      ".testimonials-person-info"
    );
    var positionParagraphs = document.querySelectorAll(
      ".testimonial-position-paragraph"
    );
    var testimonialName = document.querySelectorAll(".testimonial-name");
    var testimonialInfo;
    var testimonialTxt;

    allSlides.forEach(function (slide) {
      if (slide === activeSlide) {
        slide.classList.add("active-testimonial");
      } else {
        slide.classList.remove("active-testimonial");
        slide.classList.add("notActiveTestimonial");
      }
    });

    if (activeSlide) {
      testimonialInfo = activeSlide.querySelector(".testimonials-person-info");
      testimonialTxt = activeSlide.querySelector(
        ".tesimonials-title-container"
      );

      if (testimonialInfo) {
        testimonialInfo.style.display = "block";
      }
    }

    allSlidersTestimonialInfo.forEach(function (info) {
      if (info !== testimonialInfo) {
        info.style.display = "none";
      }
      document
        .querySelectorAll(".tesimonials-title-container")
        .forEach((title) => {
          if (title !== testimonialTxt) {
            title.style.flexDirection = "column";
            title.style.background = "transparent";
            title.style.alignItems = "center";
          } else {
            title.style.flexDirection = "row";
            title.style.background = "var(--Nuturals-N-6)";
          }
        });
    });

    positionParagraphs.forEach(function (paragraph) {
      if (!activeSlide.contains(paragraph)) {
        paragraph.style.display = "none";
      } else {
        paragraph.style.display = "block";
      }
    });

    testimonialName.forEach(function (name) {
      if (!activeSlide.contains(name)) {
        name.style.color = "var(--NuturalsN-5)";
        name.style.marginTop = "0.5rem";
        name.style.fontSize = "1.1rem";
        name.style.textAlign = "center";
      } else {
        name.style.color = "var(--Nuturals-N-1)";
      }
    });
  }
}

// Execute the function initially
updateImageShow();

// Handle window resize to trigger the function
window.addEventListener("resize", updateImageShow);
// staff slider ----------------------------------------------------------------------------------------------------

var myStaffSwiper = new Swiper(".staff-swiper", {
  spaceBetween: 0,
  slidesPerView: 3,
  initialSlide: 0,
  loop: true,
  autoplay: {
    delay: 5000, // Set the delay to 10 seconds (in milliseconds)
  },
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".staff-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".staff-button-next", // CSS class or HTML element for next arrow
    prevEl: ".staff-button-prev", // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
    1025: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,

      grid: {
        rows: 2,
      },
    },
    320: {
      slidesPerView: 1,
      // spaceBetween: 70,
      grid: {
        rows: 2,
      },
    },
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".staff-swiper-pagination"
      );
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      // Hide dots more than 4 and replace them with an image
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none"; // Hide the dot
          // Replace hidden dots with an image
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
    },
    slideChangeTransitionEnd: function () {
      updateImageShow();
    },
  },
});

myStaffSwiper.on("slideChange", function () {
  const activeSlideIndex = myStaffSwiper.realIndex;
  const paginationContainer = document.querySelector(
    ".staff-swiper-pagination"
  );
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

// international section swiper ------------------------------------------------------------------------------------

var swiperInternational = new Swiper(".international-swiper", {
  effect: "coverflow",
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  initialSlide: 0,
  loop: true,
  autoplay: {
    delay: 5000, // Set the delay to 10 seconds (in milliseconds)
  },
  pagination: {
    el: ".international-swiper-pagination",
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  on: {
    init: function () {
      const paginationContainer = document.querySelector(
        ".international-swiper-pagination"
      );
      const maxVisibleDots = 4; // Set the maximum number of visible dots

      const paginationDots = Array.from(paginationContainer.children);

      // Hide dots more than 4 and replace them with an image
      paginationDots.forEach((dot, index) => {
        if (index >= maxVisibleDots) {
          dot.style.display = "none"; // Hide the dot
          // Replace hidden dots with an image
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
    },
  },
});

swiperInternational.on("slideChange", function () {
  const activeSlideIndex = swiperInternational.realIndex;
  const paginationContainer = document.querySelector(
    ".international-swiper-pagination"
  );
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
// ----------------------------------------------- Eurodemy offices ---------------------------------------
let map = document.querySelector("iframe");
const officesContainer = document.querySelector(".offices-container");
const offices = Array.from(document.getElementsByClassName("office-container"));
const downArrow = document.querySelector(".arrow-active-tab-container");
const mapContainer = document.querySelector(".office-location");
const mapDirectContainer = document.querySelector(".selected-office-map ");
function handleMapHeight() {
  const mapContainerHeight = mapContainer.offsetHeight;
  const officesContainerHeight = officesContainer.offsetHeight;
  const mapDirectContainerHeight = mapDirectContainer.offsetHeight;
  const mapHeight = map.offsetHeight;
  if (window.innerWidth >= 1025) {
    mapContainer.style.height = `${officesContainerHeight}px`;
  } else if (window.innerWidth < 1025) {
    mapDirectContainer.style.height = `${mapHeight}px`;
  }
}

handleMapHeight();

window.addEventListener("resize", handleMapHeight);

let activeOffice = null;

const handleOffice = (e) => {
  let office = e.currentTarget;

  offices.forEach((otherOffice) => {
    if (otherOffice != office) {
      otherOffice.style.background = "";
      otherOffice.style.color = "";
      otherOffice.img = "";
      const existingImage = otherOffice.querySelector(".office-arrow-img");
      if (existingImage) {
        otherOffice.removeChild(existingImage);
      }
      downArrow.style.opacity = "0";
    }
  });
  office.style.background = "#262121";
  office.style.color = "#FCFCFC";
  office.childNodes[3].style.opacity = "1";
  if (window.innerWidth > 1024) {
    const img = document.createElement("img");
    img.className = "office-arrow-img";
    img.src = "./Assets/location-arrow.svg";
    img.style.position = "absolute";
    img.style.width = "30px";
    img.style.height = "34px";
    office.style.position = "relative";
    img.style.right = "-2.5rem";
    img.style.top = "50%";
    img.style.transform = "translateY(-50%)";
    const existingImage = office.querySelector(".office-arrow-img");
    if (existingImage) {
      office.removeChild(existingImage);
    }
    office.appendChild(img);
  } else if (window.innerWidth < 1024) {
    downArrow.style.opacity = "0";
    downArrow.style.opacity = "1";
  }
  handleLocation(office.childNodes[1].innerText.toLowerCase());
  activeOffice = office;
};
const handleLocation = (cityName) => {
  const obj = {
    spain:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27133626.124768965!2d-28.316144682626973!3d33.88423937455913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2seg!4v1705867862474!5m2!1sen!2seg",
    beirut:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.285824322964!2d35.426341460242064!3d33.889193762453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2seg!4v1705881232181!5m2!1sen!2seg",
  };

  map.src = obj[cityName];
};
window.addEventListener("resize", () => {
  if (activeOffice) {
    handleOffice({ currentTarget: activeOffice });
  }
});
handleOffice({ currentTarget: offices[0] });
offices.forEach((office) => {
  office.addEventListener("click", handleOffice.bind(this));
});
// ------------------------------------------ footer --------------------------------------
// TO MAKE YEAR IN FOOTER UP TO DATE
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ------------------------------------------ general logic -------------------------------------
const allLink = document.querySelectorAll(".navigationBar a");

allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }
  });
});
