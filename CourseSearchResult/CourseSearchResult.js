// ------------------------------------------ footer --------------------------------------
// TO MAKE YEAR IN FOOTER UP TO DATE
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ------------------------------------------ general logic -------------------------------------
const allLink = document.querySelectorAll('.navigationBar a');

allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth',
      });
    }
  });
});
// -------------------------------------------- categories dropdown ---------------------------------------
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
      path.style.fill = '#ad1519 !important';
    });
  } else {
    categories_Dropdown.style.visibility = 'hidden';
    categories_Dropdown.style.opacity = '0';
    categoriesSvgPaths.forEach(path => {
      path.style.fill = '#fff';
    });
  }
});

document.addEventListener('click', e => {
  const isClickInsideDropdown =
    categories_Nav_Button.contains(e.target) ||
    categories_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    categories_Dropdown.style.visibility = 'hidden';
    categories_Dropdown.style.opacity = '0';
    categoriesSvgPaths.forEach(path => {
      path.style.fill = '#fff';
    });
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
      path.style.fill = '#ad1519 !important';
    });
  } else {
    cities_Dropdown.style.visibility = 'hidden';
    cities_Dropdown.style.opacity = '0';
    citiesSvgPath.forEach(path => {
      path.style.fill = '#fff';
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
      path.style.fill = '#fff';
    });
  }
});

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
// ---------------------------------------------- search result ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const storedCourses = localStorage.getItem('selectedCourses');
  const storedCoursesArr = storedCourses ? JSON.parse(storedCourses) : [];

  console.log('Selected Courses:', storedCoursesArr);
  const searchResultDetailsContainer = document.querySelector(
    '.searchResult-details-container'
  );
  const searchResultLenght = document.querySelector(
    '.course-search-lenght-container'
  );
  const coursesResultContainer = document.querySelector(
    '.coming-training-card-container'
  );
  searchResultLenght.innerHTML = `<p class="course-search-lenght">${storedCoursesArr.length} Search Results </p><img
  src="./Assets/clear.svg"
  alt="clear"
  class="searchIcon-courseByName"
/>`;
  storedCoursesArr.forEach(course => {
    searchResultDetailsContainer.innerHTML = `
    <div class="searchResultDetails"><p>Category: <span> ${course}</span> </p> <img src="./Assets/xIcon.svg" alt="clear"/></div>
     <div class="searchResultDetails"><p>Duration: <span> 7 Days </span></p><img src="./Assets/xIcon.svg" alt="clear"/></div> 
     <div class="searchResultDetails"><p>Year: <span> 2024 </span></p><img src="./Assets/xIcon.svg" alt="clear"/></div>
      <div class="searchResultDetails"><p>Month: <span> January </span></p><img src="./Assets/xIcon.svg" alt="clear"/></div>
     <div class="searchResultDetails"><p>Search for: <span> Data </span> </p><img src="./Assets/xIcon.svg" alt="clear"/></div>`;
  });
  storedCoursesArr.forEach(course => {
    coursesResultContainer.innerHTML += `<div class="coming-training-card">
    <div class="coming-training-card-header">
      <img src="../Assets/Course Category Image.png" alt="Category Image.png" class="coming-training-card-img" />
    </div>
    <div class="coming-training-card-content">
      <p class="card-paragraph">
        ${course}: Creating Stronger
        Relationships for a Stronger Organisation
      </p>
      <div class="card-date-container">
        <p>14 Aug, 2024</p>
        <img src="../Assets/duration.svg" alt="duration" />
        <p>18 Aug, 2024</p>
      </div>
      <div class="card-details-container">
        <p>Offline</p>
        <p class="card-details-city">Sharm Elshiekh</p>
        <p>4,950 $</p>
      </div>
    </div>
    <div class="coming-training-card-footer">
      <div class="right-arrow">
        <img src="../Assets/Right Arrow.svg" />
      </div>
      <div class="view-course-box d-flex">
        <p class="view-course-text">View Course</p>
      </div>
    </div>
  </div>`;
  });
});
// -------------
