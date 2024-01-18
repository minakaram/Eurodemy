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

  updatePagination();
  updateSlideData(); // Call the function to update data when the slide changes
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

function updatePagination() {
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.innerHTML = ''; // Clear existing pagination

  const totalSlides = document.querySelectorAll('.swiper-slide-cities').length;

  for (let i = 0; i < totalSlides; i++) {
    const paginationItem = document.createElement('div');
    paginationItem.classList.add('pagination-item');

    // Add a class to the active pagination item
    if (i === currentIndex) {
      paginationItem.classList.add('active');
    }

    // Add a click event listener to each pagination tab
    paginationItem.addEventListener('click', function () {
      showSlide(i);
    });

    paginationContainer.appendChild(paginationItem);
  }
}

function updateSlideData() {
  // Update data based on currentIndex
  // Example: Fetch new data from an API and update the content
  const cityNameElement = document.querySelector('.courses-city p');
  const courseCountElement = document.querySelector('.courses-city-average');
  // Update these elements based on your data
  const newData = {
    cityName: 'New City', // Example new city name
    courseCount: 'New Course Count', // Example new course count
  };
  cityNameElement.textContent = newData.cityName;
  courseCountElement.textContent = newData.courseCount;
}

// Initial setup
setSecondContainerWidth();
updatePagination();
updateSlideData(); // Call the function to update data for the initial slide

window.addEventListener('resize', setSecondContainerWidth);

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
        rows: 2,
      },
    },
  },
});

// gallery Memory Section ----------------------------------------------------------------------
function handleGalleryWidth() {
  const container = document.getElementById('memorySectionContainer');
  const containerWidth = container.offsetHeight;
  console.log(containerWidth);
  const gallery = document.getElementById('AsideGallery');

  // Check if the screen width is larger than 1025px
  if (window.innerWidth > 1025) {
    gallery.style.height = `${containerWidth}px`;
    const gal = gallery.style.height;
    console.log(gal);
  }
}

handleGalleryWidth();

window.addEventListener('resize', handleGalleryWidth);
