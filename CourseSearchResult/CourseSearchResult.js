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
