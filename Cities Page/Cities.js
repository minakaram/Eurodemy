// navbar dropdown -----------------------------------------------------------------
const cities_Button_small_Screen = document.getElementById("collapse-dropdown");
const small_screen_dropdown = document.getElementById(
  "cities-dropdown-collapse-id"
);

cities_Button_small_Screen.addEventListener("click", () => {
  const computedStyles = window.getComputedStyle(small_screen_dropdown);

  if (
    computedStyles.visibility === "hidden" ||
    computedStyles.visibility === ""
  ) {
    console.log("in");
    small_screen_dropdown.style.visibility = "visible";
    small_screen_dropdown.style.opacity = "1";
  } else {
    small_screen_dropdown.style.visibility = "hidden";
    small_screen_dropdown.style.opacity = "0";
    console.log("no");
  }
});

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
// document.addEventListener("click", (e) => {
//   const isClickInsideDropdown =
//     cities_Nav_Button.contains(e.target) || cities_Dropdown.contains(e.target);

//   if (!isClickInsideDropdown) {
//     closeDropdown();
//   }
// });
//------------------------------------ cities slider---------------------------------
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".cities-wrapper");
  const slideWidth = document.querySelector(".swiper-slide-cities").offsetWidth;
  const newPosition = -index * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;

  updatePagination();
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
const cities_input_search = document.getElementById("cities-input");

function updatePagination() {
  const screenWidth = window.innerWidth;
  const paginationContainer = document.querySelector(".pagination-container");
  const prevArrow = document.querySelector(".cities-button-prev");
  const nextArrow = document.querySelector(".cities-button-next");
  paginationContainer.innerHTML = ""; // Clear existing pagination
  if (cities_input_search.value !== "") {
    // Hide the pagination container and arrows when there is a search
    paginationContainer.style.display = "none";
    prevArrow.style.display = "none";
    nextArrow.style.display = "none";
  } else {
    paginationContainer.style.display = "flex";
    prevArrow.style.display = "block";
    nextArrow.style.display = "block";
  }
  const totalSlides = document.querySelectorAll(".swiper-slide-cities").length;
  const maxPaginationItems = screenWidth < 768 ? 2 : totalSlides; // Maximum number of pagination items

  for (let i = 0; i < maxPaginationItems; i++) {
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
updatePagination();

// searching cities --------------------------------------------------------------------------------------------
const CITIES = [
  "cairo",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "amaan",
  "assuit",
  "amaan",
  "amaan",
  "cairo",
  "amaan",
  "fayoum",
];
let citiesCards = [];
let originalCitiesHtml = ""; // Store the original HTML content

const fetchingCities = () => {
  const classes = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
  ];
  const citiesPerGroup = 15;
  let citiesHtmlArray = [];

  for (let i = 0; i < CITIES.length; i += citiesPerGroup) {
    const currentCities = CITIES.slice(i, i + citiesPerGroup);
    const currentClasses = classes.slice(0, currentCities.length);

    citiesHtmlArray.push(`
      <div class="container-cards swiper-slide-cities">
        ${currentCities
          .map(
            (city, index) => `
              <div class="cities-courses-card ${currentClasses[index]}">
                <img src="../Assets/cities/City2.png" class="cities-image-abslute" alt="" />
                <img src="../Assets/cities/Overlay.png" class="cities-image-abslute" alt="" />
                <div class="courses-city-details">
                  <div class="courses-city">
                    <p>${city}</p>
                  </div>
                  <div class="courses-avrg-view">
                    <p class="courses-city-average">16 Course</p>
                    <div class="view-course-city">
                      <p>View Course</p>
                      <img src="../Assets/Right Arrow - mini.svg" alt="view course" class="right-arrow-mini" />
                    </div>
                  </div>
                </div>
              </div>
          `
          )
          .join("")}
      </div>
    `);
  }

  const CITIES_CONTAINER = document.getElementById("cities-container");

  if (CITIES_CONTAINER) {
    CITIES_CONTAINER.innerHTML = citiesHtmlArray.join("");
    originalCitiesHtml = CITIES_CONTAINER.innerHTML; // Save the original HTML
    setSecondContainerWidth();
    showSlide(0);
    citiesCards = document.querySelectorAll(".cities-courses-card");

    updatePagination(); // Add this line to update the pagination

    // Check screen width and hide extra swiper-slide-cities elements if needed
    const screenWidth = window.innerWidth;
    const swiperSlideCitiesElements = document.querySelectorAll(
      ".swiper-slide-cities"
    );

    if (screenWidth < 768 && swiperSlideCitiesElements.length > 2) {
      for (let i = 2; i < swiperSlideCitiesElements.length; i++) {
        swiperSlideCitiesElements[i].style.display = "none";
      }
    }
  }
  if (CITIES_CONTAINER) {
    CITIES_CONTAINER.innerHTML = citiesHtmlArray.join("");
    originalCitiesHtml = CITIES_CONTAINER.innerHTML; // Save the original HTML
    setSecondContainerWidth();
    showSlide(0);
    citiesCards = document.querySelectorAll(".cities-courses-card");

    updatePagination(); // Add this line to update the pagination

    // Check screen width and hide extra swiper-slide-cities elements if needed
    const screenWidth = window.innerWidth;
    const swiperSlideCitiesElements = document.querySelectorAll(
      ".swiper-slide-cities"
    );

    if (screenWidth < 768 && swiperSlideCitiesElements.length > 2) {
      for (let i = 2; i < swiperSlideCitiesElements.length; i++) {
        swiperSlideCitiesElements[i].style.display = "none";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  fetchingCities();
  updatePagination();
});

// Listen for resize events
window.addEventListener("resize", function () {
  // Check screen width and update visibility of swiper-slide-cities elements
  const screenWidth = window.innerWidth;
  const swiperSlideCitiesElements = document.querySelectorAll(
    ".swiper-slide-cities"
  );

  if (screenWidth < 768 && swiperSlideCitiesElements.length > 2) {
    for (let i = 2; i < swiperSlideCitiesElements.length; i++) {
      swiperSlideCitiesElements[i].style.display = "none";
    }
  } else {
    for (let i = 2; i < swiperSlideCitiesElements.length; i++) {
      swiperSlideCitiesElements[i].style.display = "block";
    }
  }

  // Update other layout elements if needed
  setSecondContainerWidth();
  showSlide(0);
  updatePagination();
});

window.addEventListener("resize", setSecondContainerWidth);
cities_input_search.addEventListener("input", function (event) {
  const inputText = event.target.value.toLowerCase();
  const all_courses = document.querySelector(".view-courses-width");
  const cities_container = document.querySelector(".cities-wrapper");

  if (inputText === "") {
    // If input is empty, restore the original HTML
    cities_container.innerHTML = originalCitiesHtml;
    setSecondContainerWidth();
    showSlide(0);
    updatePagination(); // Add this line to update the pagination
    all_courses.style.display = "block";
    return;
  }

  const matchedCities = [];

  citiesCards.forEach((card) => {
    const cityName = card
      .querySelector(".courses-city p")
      .textContent.toLowerCase();
    if (cityName.includes(inputText)) {
      const modifiedCard = card.cloneNode(true);
      modifiedCard.classList = "search-div-style";
      matchedCities.push(modifiedCard.outerHTML);
    }
  });

  // Display matched cities
  if (matchedCities.length > 0) {
    cities_container.innerHTML = `
      <div class="swiper-slide-cities m-auto d-flex w-100 align-items-center justify-content-center gap-3 my-5 flex-wrap">
        ${matchedCities.join("")}
      </div>
    `;
    setSecondContainerWidth();
    showSlide(0);
    all_courses.style.display = "none";
  } else {
    // Display no results found message
    cities_container.innerHTML = "<p>No results found</p>";
    all_courses.style.display = "none";
  }

  updatePagination(); // Add this line to update the pagination
});

function setSecondContainerWidth() {
  const cityWidth = document.querySelector(".cities-courses-card");
  if (cityWidth) {
    const cityCurrentWidth = cityWidth.offsetWidth;
    const loadCourses = document.querySelector(".view-courses-width");
    if (loadCourses) {
      loadCourses.style.width = `${cityCurrentWidth}px`;
    } else {
      console.error("Element with class view-courses-width not found.");
    }
  } else {
    console.error("Element with class card-city-width not found.");
  }
}

// Listen for resize events
window.addEventListener("resize", setSecondContainerWidth);
