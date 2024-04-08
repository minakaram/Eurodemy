// category-courses-section----------------------------------------------------------------------------------

// swiper-------------------------

const mySwiper = new Swiper('.categories-swiper-container1', {
  spaceBetween: 0,
  slidesPerGroup: 5,
  initialSlide: 3,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next', // CSS class or HTML element for next arrow
    prevEl: '.swiper-button-prev', // CSS class or HTML element for prev arrow
  },
  breakpoints: {
    1025: {
      slidesPerView: 5,
      spaceBetween: 70,
      grid: {
        rows: 4,
      },
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      initialSlide: 3,
      spaceBetween: 20,

      grid: {
        rows: 4,
      },
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 70,
      grid: {
        rows: 4,
      },
    },
  },
});

//   navbar dropdown -----------------------------------------------------------------------------------
//small screen
var small_screen_cities_dropdown_button = document.getElementById(
  'categories-id-collapse'
);
var dropdown_collapse = document.getElementById('categories-dropdown-collapse');
var isCollapseDropdownVisible = false;

small_screen_cities_dropdown_button.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation(); // Stop the event from propagating to the document

  if (!isCollapseDropdownVisible) {
    closeOtherDropdowns();
    dropdown_collapse.style.visibility = 'visible';
    dropdown_collapse.style.opacity = '1';
    isCollapseDropdownVisible = true;
  } else {
    dropdown_collapse.style.visibility = 'hidden';
    dropdown_collapse.style.opacity = '0';
    isCollapseDropdownVisible = false;
  }
});

var navbarToggler = document.getElementById('navbar-toggler-id');
var navbarDropdown = document.getElementById('navbar-toggler-items');
var isNavbarDropdownVisible = false;

navbarToggler.addEventListener('click', event => {
  event.stopPropagation();

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = 'hidden';
    navbarDropdown.style.opacity = '0';
    isNavbarDropdownVisible = false;
  } else {
    closeOtherDropdowns();
    navbarDropdown.style.visibility = 'visible';
    navbarDropdown.style.opacity = '1';
    isNavbarDropdownVisible = true;
  }
});

document.addEventListener('click', event => {
  closeOtherDropdowns();
});

function closeOtherDropdowns() {
  if (isCollapseDropdownVisible) {
    dropdown_collapse.style.visibility = 'hidden';
    dropdown_collapse.style.opacity = '0';
    isCollapseDropdownVisible = false;
  }

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = 'hidden';
    navbarDropdown.style.opacity = '0';
    isNavbarDropdownVisible = false;
  }
}

const categories_Nav_Button = document.getElementById('active-list-id');
const categories_Dropdown = document.getElementById('categories-dropdown-id');
const categoriesSvgPaths = categories_Nav_Button.querySelectorAll('path');

categories_Nav_Button.addEventListener('click', e => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(categories_Dropdown);
  const visibility = computedStyles.getPropertyValue('visibility');

  if (visibility === 'hidden') {
    categories_Dropdown.style.visibility = 'visible';
    categories_Dropdown.style.opacity = '1';
    categoriesSvgPaths.forEach(path => {
      path.style.fill = '#ad1519';
    });
  } else {
    categories_Dropdown.style.visibility = 'hidden';
    categories_Dropdown.style.opacity = '0';
  }
});

document.addEventListener('click', e => {
  const isClickInsideDropdown =
    categories_Nav_Button.contains(e.target) ||
    categories_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    categories_Dropdown.style.visibility = 'hidden';
    categories_Dropdown.style.opacity = '0';
  }
});

//   cities dropdown -----------------------------------------
const cities_Nav_Button = document.getElementById('cities-dropdown-button');
const cities_Dropdown = document.getElementById('cities-dropdown-id');
const citiesSvgPath = cities_Nav_Button.querySelectorAll('path');

cities_Nav_Button.addEventListener('click', e => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(cities_Dropdown);
  const visibility = computedStyles.getPropertyValue('visibility');

  if (visibility === 'hidden') {
    cities_Dropdown.style.visibility = 'visible';
    cities_Dropdown.style.opacity = '1';
    citiesSvgPath.forEach(path => {
      path.style.fill = '#ad1519';
    });
  } else {
    cities_Dropdown.style.visibility = 'hidden';
    cities_Dropdown.style.opacity = '0';
    citiesSvgPath.forEach(path => {
      path.style.fill = 'black';
    });
  }
});

document.addEventListener('click', e => {
  const isClickInsideDropdown =
    cities_Nav_Button.contains(e.target) || cities_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    cities_Dropdown.style.visibility = 'hidden';
    cities_Dropdown.style.opacity = '0';
    citiesSvgPath.forEach(path => {
      path.style.fill = 'black';
    });
  }
});
// order by
function show(option) {
  document.querySelector('.textBox').value = option;
}

let orderByDropdown = document.querySelector('.orderBy-dropdown');
orderByDropdown.addEventListener('click', () => {
  orderByDropdown.classList.toggle('active');
});

document.addEventListener('click', event => {
  const targetElement = event.target;
  if (!orderByDropdown.contains(targetElement)) {
    orderByDropdown.classList.remove('active');
  }
});
// categories dropddown show --------------------------------------------------------------------------------------
$(document).ready(function () {
  $('.categories-filter-container').click(function () {
    var selected = $(this);
    var selectedP = selected.next();
    selectedP.toggle();
  });
});
// var navbarToggler = document.getElementById('navbar-toggler-id');
// var navbarDropdown = document.getElementById('navbar-toggler-items');
// var isDropdownVisible = false;

// navbarToggler.addEventListener('click', event => {
//   event.stopPropagation();
//   isDropdownVisible = !isDropdownVisible;
//   navbarDropdown.style.visibility = isDropdownVisible ? 'visible' : 'hidden';
//   navbarDropdown.style.opacity = isDropdownVisible ? '1' : '0';

//   if (isDropdownVisible) {
//     console.log("Dropdown shown");
//   } else {
//     console.log("Dropdown hidden");
//   }
// });

// document.addEventListener('click', event => {
//   if (isDropdownVisible && !navbarDropdown.contains(event.target)) {
//     navbarDropdown.style.visibility = 'hidden';
//     navbarDropdown.style.opacity = '0';
//     isDropdownVisible = false;
//     console.log("Click outside dropdown, hiding dropdown");
//   }
// });

// navbarDropdown.addEventListener('click', event => {
//   event.stopPropagation();
// });
