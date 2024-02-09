const allLink = document.querySelectorAll('a');

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

//   navbar dropdown -----------------------------------------------------------------------------------
// laptop screen
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
    categoriesSvgPaths.forEach(path => {
      path.style.fill = 'black';
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
      path.style.fill = 'black';
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

// -----------------------------------------------------offices ------------------------------------------
let map = document.querySelector('iframe');
const officesContainer = document.querySelector('.offices-container');
const offices = Array.from(document.getElementsByClassName('office-container'));
const downArrow = document.querySelector('.arrow-active-tab-container');
const mapContainer = document.querySelector('.office-location');
const mapDirectContainer = document.querySelector('.selected-office-map ');
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

window.addEventListener('resize', handleMapHeight);

let activeOffice = null;

const handleOffice = e => {
  let office = e.currentTarget;

  offices.forEach(otherOffice => {
    if (otherOffice != office) {
      otherOffice.style.background = '';
      otherOffice.style.color = '';
    }
  });
  office.style.background = '#262121';
  office.style.color = '#FCFCFC';
  office.childNodes[3].style.opacity = '1';
  downArrow.style.opacity = '0';
  downArrow.style.opacity = '1';
  handleLocation(office.childNodes[1].innerText.toLowerCase());
  activeOffice = office;
};
const handleLocation = cityName => {
  const obj = {
    spain:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27133626.124768965!2d-28.316144682626973!3d33.88423937455913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2seg!4v1705867862474!5m2!1sen!2seg',
    beirut:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.285824322964!2d35.426341460242064!3d33.889193762453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2seg!4v1705881232181!5m2!1sen!2seg',
  };

  map.src = obj[cityName];
};
window.addEventListener('resize', () => {
  if (activeOffice) {
    handleOffice({ currentTarget: activeOffice });
  }
});
handleOffice({ currentTarget: offices[0] });
offices.forEach(office => {
  office.addEventListener('click', handleOffice.bind(this));
});
