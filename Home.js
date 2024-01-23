var navbarToggler = document.getElementById("navbar-toggler-id");
var navbarDropdown = document.getElementById("navbar-toggler-items");
// Toggle visibility when the toggler is clicked
navbarToggler.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the click event from reaching the document
  navbarDropdown.style.visibility =
    navbarDropdown.style.visibility === "hidden" ? "visible" : "hidden";
  navbarDropdown.style.opacity =
    navbarDropdown.style.opacity === "0" ? "1" : "0";
});
// Hide dropdown when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    navbarDropdown.style.visibility === "visible" &&
    !navbarDropdown.contains(event.target)
  ) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
  }
});
// Stop propagation when clicking inside the dropdown
navbarDropdown.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents the click event from reaching the document
});
// search overlay -------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $('#search-close-btn').click(function () {
    $('#search-overlay').fadeOut();
    $('#search-open-btn').show();
  });
  $('#search-open-btn').click(function () {
    // $(this).hide();
    $('#search-overlay').fadeIn();
  });
});



// hero section ---------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".owl-carousel-hero").owlCarousel({
    // loop: true,
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
  let maxVisibleDots = 4; // Set the maximum number of visible dots

  if (customDots.length > maxVisibleDots) {
    // Set the width for the extra dots to 10px
    for (let i = maxVisibleDots; i < customDots.length; i++) {
      // Get the span inside the dot and set its style
      customDots.eq(i).find("span").css("width", "10px");
    }
  }
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
  updateSlideData(); // Call the function to update data when the slide changes
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

function updateSlideData() {
  // Update data based on currentIndex
  // Example: Fetch new data from an API and update the content
  const cityNameElement = document.querySelector(".courses-city p");
  const courseCountElement = document.querySelector(".courses-city-average");
  // Update these elements based on your data
  const newData = {
    cityName: "New City", // Example new city name
    courseCount: "New Course Count", // Example new course count
  };
  cityNameElement.textContent = newData.cityName;
  courseCountElement.textContent = newData.courseCount;
}

// Initial setup
setSecondContainerWidth();
updatePagination();
updateSlideData(); // Call the function to update data for the initial slide

window.addEventListener("resize", setSecondContainerWidth);

// category-courses-section----------------------------------------------------------------------------------

// swiper-------------------------

const mySwiper = new Swiper(".swiper-container1", {
  spaceBetween: 30,
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", // CSS class or HTML element for next arrow
    prevEl: ".swiper-button-prev", // CSS class or HTML element for prev arrow
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

// gallery Memory Section ------------------------------------------------------------------------------
function handleGalleryWidth() {
  const container = document.getElementById("memorySectionContainer");
  const containerWidth = container.offsetHeight;
  console.log(containerWidth);
  const gallery = document.getElementById("AsideGallery");

  // Check if the screen width is larger than 1025px
  if (window.innerWidth > 1024) {
    gallery.style.height = `${containerWidth}px`;
  }
}
handleGalleryWidth();
window.addEventListener("resize", handleGalleryWidth);

// testimonial section ---------------------------------------------------------------------------------

var swiper = new Swiper(".testimonialSwiper", {
  centeredSlides: true,
  initialSlide: 3,
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
  initialSlide: 2,
  on: {
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
});

// international section swiper ------------------------------------------------------------------------------------

var swiper = new Swiper(".international-swiper", {
  effect: "coverflow",
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  initialSlide: 4,
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
});
