// //------------------------------------ cities slider---------------------------------
// let currentIndex = 0;

// function showSlide(index) {
//   const slides = document.querySelector(".cities-wrapper");
//   const slideWidth = document.querySelector(".swiper-slide-cities").offsetWidth;
//   const newPosition = -index * slideWidth;
//   slides.style.transform = `translateX(${newPosition}px)`;
//   currentIndex = index;

//   updatePagination();
//   updateSlideData(); // Call the function to update data when the slide changes
// }

// function nextCitiesSlide() {
//   currentIndex =
//     (currentIndex + 1) %
//     document.querySelectorAll(".swiper-slide-cities").length;
//   showSlide(currentIndex);
// }

// function prevCitiesSlide() {
//   currentIndex =
//     (currentIndex -
//       1 +
//       document.querySelectorAll(".swiper-slide-cities").length) %
//     document.querySelectorAll(".swiper-slide-cities").length;
//   showSlide(currentIndex);
// }

// function setSecondContainerWidth() {
//   const cityWidth = document.querySelector(".card-city-width");
//   const cityCurrentWidth = cityWidth.offsetWidth;

//   const loadCourses = document.querySelector(".view-courses-width");
//   loadCourses.style.width = `${cityCurrentWidth}px`;
// }

// function updatePagination() {
//   const paginationContainer = document.querySelector(".pagination-container");
//   paginationContainer.innerHTML = ""; // Clear existing pagination

//   const totalSlides = document.querySelectorAll(".swiper-slide-cities").length;

//   for (let i = 0; i < totalSlides; i++) {
//     const paginationItem = document.createElement("div");
//     paginationItem.classList.add("pagination-item");

//     // Add a class to the active pagination item
//     if (i === currentIndex) {
//       paginationItem.classList.add("active");
//     }

//     // Add a click event listener to each pagination tab
//     paginationItem.addEventListener("click", function () {
//       showSlide(i);
//     });

//     paginationContainer.appendChild(paginationItem);
//   }
// }

// // function updateSlideData() {
// //   // Update data based on currentIndex
// //   // Example: Fetch new data from an API and update the content
// //   const cityNameElement = document.querySelector(".courses-city p");
// //   const courseCountElement = document.querySelector(".courses-city-average");
// //   // Update these elements based on your data
// //   const newData = {
// //     cityName: "New City", // Example new city name
// //     courseCount: "New Course Count", // Example new course count
// //   };
// //   cityNameElement.textContent = newData.cityName;
// //   courseCountElement.textContent = newData.courseCount;
// // }

// // Initial setup
// setSecondContainerWidth();
// updatePagination();
// updateSlideData(); // Call the function to update data for the initial slide

// window.addEventListener("resize", setSecondContainerWidth);
