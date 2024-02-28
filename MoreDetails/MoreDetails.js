// navbar dropdown -----------------------------------------------------------------
const categories_Nav_Button = document.getElementById("active-list-id");
const categories_Dropdown = document.getElementById("categories-dropdown-id");
const categoriesSvgPaths = categories_Nav_Button.querySelectorAll("path");

categories_Nav_Button.addEventListener("click", (e) => {
  e.preventDefault();

  const computedStyles = window.getComputedStyle(categories_Dropdown);
  const visibility = computedStyles.getPropertyValue("visibility");

  if (visibility === "hidden") {
    categories_Dropdown.style.visibility = "visible";
    categories_Dropdown.style.opacity = "1";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "#ad1519";
    });
  } else {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "black";
    });
  }
});

document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    categories_Nav_Button.contains(e.target) ||
    categories_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    categories_Dropdown.style.visibility = "hidden";
    categories_Dropdown.style.opacity = "0";
    categoriesSvgPaths.forEach((path) => {
      path.style.fill = "black";
    });
  }
});

const cities_Button_small_Screen = document.getElementById("collapse-dropdown");
const small_screen_dropdown = document.getElementById(
  "cities-dropdown-collapse-id"
);
let isCopllaseDropdownVisible = false;

cities_Button_small_Screen.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (!isCopllaseDropdownVisible) {
    closeOtherDropdowns();
    small_screen_dropdown.style.visibility = "visible";
    small_screen_dropdown.style.opacity = "1";
    isCopllaseDropdownVisible = true;
  } else {
    small_screen_dropdown.style.visibility = "hidden";
    small_screen_dropdown.style.opacity = "0";
    isCopllaseDropdownVisible = false;
  }
});

var navbarToggler = document.getElementById("navbar-toggler-id");
var navbarDropdown = document.getElementById("navbar-toggler-items");
let isNavbarDropdownVisible = false;

navbarToggler.addEventListener("click", (event) => {
  event.stopPropagation();

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isNavbarDropdownVisible = false;
  } else {
    closeOtherDropdowns();
    navbarDropdown.style.visibility = "visible";
    navbarDropdown.style.opacity = "1";
    isNavbarDropdownVisible = true;
  }
});

document.addEventListener("click", (event) => {
  closeOtherDropdowns();
});

function closeOtherDropdowns() {
  if (isCopllaseDropdownVisible) {
    small_screen_dropdown.style.visibility = "hidden";
    small_screen_dropdown.style.opacity = "0";
    isCopllaseDropdownVisible = false;
  }

  if (isNavbarDropdownVisible) {
    navbarDropdown.style.visibility = "hidden";
    navbarDropdown.style.opacity = "0";
    isNavbarDropdownVisible = false;
  }
}
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
document.addEventListener("click", (e) => {
  const isClickInsideDropdown =
    cities_Nav_Button.contains(e.target) || cities_Dropdown.contains(e.target);

  if (!isClickInsideDropdown) {
    cities_Dropdown.style.visibility = "hidden";
    cities_Dropdown.style.opacity = "0";
  }
});

const detailsHeadlines = document.querySelectorAll(".details-title");
const moreDetailsContainer = document.querySelector(
  ".more-details-inner-container"
);
const moreDetailsData = [
  {
    title: "Privacy policy agreement",
    header:
      " Using this website is according to the following terms and conditions:",

    details:
      "1-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Terms of use",
    header:
      " Using this website is according to the following terms and conditions:",

    details:
      "2-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Copy Rights",
    header:
      " Using this website is according to the following terms and conditions:",

    details:
      "3-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Registration, payment & cancelation policies",
    header:
      " Using this website is according to the following terms and conditions:",

    details:
      "4-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Why to choose us ?",
    header:
      " Using this website is according to the following terms and conditions:",

    details:
      "5-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Add us to your safe mailing list",
    header:
      " Using this website is according to the following terms and conditions:",
    details:
      "6-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
  {
    title: "Program venue’s terms and conditions",
    header:
      " Using this website is according to the following terms and conditions:",
    details:
      "7-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.",
  },
];
console.log(detailsHeadlines);
let previousClickedTab = null; // Variable to keep track of the previously clicked tab

// Function to handle tab click event
function handleTabClick(tab) {
  // Remove styles from the previously clicked tab
  if (previousClickedTab) {
    previousClickedTab.style.backgroundColor = ""; // Remove background color
    previousClickedTab.style.color = ""; // Remove text color
  }

  // Apply styles to the newly clicked tab
  tab.style.backgroundColor = "#262121";
  tab.style.color = "#fff";

  // Update the previous clicked tab to the current one
  previousClickedTab = tab;

  // Find the details corresponding to the clicked tab
  const selectedDetails = moreDetailsData.find(
    (detail) => detail.title === tab.innerText
  );

  // Update the more details container with the selected details
  moreDetailsContainer.innerHTML = `<h4 class="detailsHeader">${selectedDetails.header}</h4>
    <p class="detailsArticle">&#x2022 ${selectedDetails.details}</p>`;
}

// Attach click event listeners to all tab elements
detailsHeadlines.forEach((el) => {
  el.addEventListener("click", (e) => {
    handleTabClick(e.target); // Handle tab click event
  });
});

// Set the first tab as active by default
if (detailsHeadlines.length > 0) {
  handleTabClick(detailsHeadlines[0]); // Trigger click event on the first tab
}
