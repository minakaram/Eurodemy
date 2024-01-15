var navbarToggler = document.getElementById('navbar-toggler-id');
var navbarDropdown = document.getElementById('navbar-toggler-items');
// Toggle visibility when the toggler is clicked
navbarToggler.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
  navbarDropdown.style.visibility =
    navbarDropdown.style.visibility === 'hidden' ? 'visible' : 'hidden';
  navbarDropdown.style.opacity =
    navbarDropdown.style.opacity === '0' ? '1' : '0';
});
// Hide dropdown when clicking outside of it
document.addEventListener('click', event => {
  if (
    navbarDropdown.style.visibility === 'visible' &&
    !navbarDropdown.contains(event.target)
  ) {
    navbarDropdown.style.visibility = 'hidden';
    navbarDropdown.style.opacity = '0';
  }
});
// Stop propagation when clicking inside the dropdown
navbarDropdown.addEventListener('click', event => {
  event.stopPropagation(); // Prevents the click event from reaching the document
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

  let customDotsContainer = carousel.find('.owl-dots');
  let customDots = customDotsContainer.find('.owl-dot');
  let maxVisibleDots = 4; // Set the maximum number of visible dots

  if (customDots.length > maxVisibleDots) {
    // Set the width for the extra dots to 10px
    for (let i = maxVisibleDots; i < customDots.length; i++) {
      // Get the span inside the dot and set its style
      customDots.eq(i).find('span').css('width', '10px');
    }
  }
}

initializeCarousel($('.carousel1'));
initializeCarousel($('.carousel2'));


//------------------------------------ cities slider---------------------------------
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.cities-wrapper');
  const slideWidth = document.querySelector('.swiper-slide-cities').offsetWidth;
  const newPosition = -index * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextCitiesSlide() {
  currentIndex =
    (currentIndex + 1) %
    document.querySelectorAll('.swiper-slide-cities').length;
  showSlide(currentIndex);
}

function prevCitiesSlide() {
  currentIndex =
    (currentIndex -
      1 +
      document.querySelectorAll('.swiper-slide-cities').length) %
    document.querySelectorAll('.swiper-slide-cities').length;
  showSlide(currentIndex);
}

function setSecondContainerWidth() {
  const cityWidth = document.querySelector('.card-city-width');
  const cityCurrentWidth = cityWidth.offsetWidth;

  const loadCourses = document.querySelector('.view-courses-width');
  loadCourses.style.width = `${cityCurrentWidth}px`;
}

setSecondContainerWidth();

window.addEventListener('resize', setSecondContainerWidth);
// course catogries -----------------------------------------------------------------

function setCategoriesWidth() {
  const categoryWidth = document.querySelector(".course-category-item");
  const categoryCurrentWidth = categoryWidth.offsetWidth;
  const categoryCurrentHeight = categoryWidth.offsetHeight;

  const topCategoryWidth = document.querySelectorAll(".top-category-item");

  topCategoryWidth.forEach(function (element) {
    element.style.width = `${categoryCurrentWidth}px`;
    element.style.height = `${categoryCurrentHeight}px`;
  });

}

setCategoriesWidth();

window.addEventListener('resize', setCategoriesWidth);


// category-courses-section----------------------------------------------------------------------------------

// swiper-------------------------

const mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  grid: {
    rows: 1,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next', // CSS class or HTML element for next arrow
    prevEl: '.swiper-button-prev', // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1300:{
      slidesPerView:5,
      spaceBetween: 70,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slideBy: 1,
      grid: {
        rows: 2,
      },
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 70,
      slideBy: 1,
      grid: {
        rows: 1,
     
      },
    },
  },
});
