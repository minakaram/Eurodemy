// navbar tablet and mobile toggler -------------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------------------------------------------

$(".carousel1").owlCarousel({
  loop: false,
  margin: 24,
  nav: true,
  dots: true,
  slideBy: 4,
  responsive: {
    0: {
      items: 1,
    },
    610: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
$(".carousel2").owlCarousel({
  loop: false,
  margin: 24,
  nav: true,
  dots: true,
  slideBy: 4,
  responsive: {
    0: {
      items: 1,
    },
    610: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// Function to initialize Owl Carousel
function initializeCarousel(carousel, items) {
  carousel.owlCarousel({
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    margin: 24,
    nav: false,
    dots: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      610: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}

// Function to handle custom navigation events
function customNavigation(carousel1, carousel2) {
  $(".custom-next").click(function () {
    carousel1.trigger("next.owl.carousel");
    carousel2.trigger("next.owl.carousel");
  });

  $(".custom-prev").click(function () {
    carousel1.trigger("prev.owl.carousel");
    carousel2.trigger("prev.owl.carousel");
  });
}

// Function to generate and handle custom dots
function customDots(carousel1, carousel2) {
  var customDotsContainer = $("#custom-dots");
  var dotCount = carousel1.find(".owl-dot").length;

  for (var i = 0; i < dotCount; i++) {
    customDotsContainer.append(
      '<div class="custom-dot" data-dot-index="' + i + '"></div>'
    );
  }

  $(".custom-dot").click(function () {
    var dotIndex = $(this).data("dot-index");
    carousel1.trigger("to.owl.carousel", dotIndex);
    carousel2.trigger("to.owl.carousel", dotIndex);
  });

  // Update custom dots on changing the slide
  carousel1.on("changed.owl.carousel", function (event) {
    updateCustomDots(event.item.index);
  });

  carousel2.on("changed.owl.carousel", function (event) {
    updateCustomDots(event.item.index);
  });

  // Function to update custom dots
  function updateCustomDots(currentIndex) {
    $(".custom-dot").removeClass("active");
    $('.custom-dot[data-dot-index="' + currentIndex + '"]').addClass("active");
  }

  // Initialize dots for the initial state
  updateCustomDots(0);
}

var carouselRow1 = $("#carousel-row-1");
var carouselRow2 = $("#carousel-row-2");

initializeCarousel(carouselRow1, 4);
initializeCarousel(carouselRow2, 4);

customNavigation(carouselRow1, carouselRow2);
customDots(carouselRow1, carouselRow2);

// cities section ---------------------------------------------------------------------------------------------
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".cities-wrapper");
  const slideWidth = document.querySelector(".swiper-slide").offsetWidth;
  const newPosition = -index * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex =
    (currentIndex + 1) % document.querySelectorAll(".swiper-slide").length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + document.querySelectorAll(".swiper-slide").length) %
    document.querySelectorAll(".swiper-slide").length;
  showSlide(currentIndex);
}

function setSecondContainerWidth() {
  const cityWidth = document.querySelector(".card-city-width");
  const cityCurrentWidth = cityWidth.offsetWidth;

  const loadCourses = document.querySelector(".view-courses-width");
  loadCourses.style.width = `${cityCurrentWidth}px`;
}

setSecondContainerWidth()

window.addEventListener('resize', setSecondContainerWidth);

