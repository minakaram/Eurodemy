const detailsHeadlines = document.querySelectorAll('.details-title');
const moreDetailsContainer = document.querySelector(
  '.more-details-inner-container'
);
const moreDetailsData = [
  {
    title: 'Privacy policy agreement',
    header:
      ' Using this website is according to the following terms and conditions:',

    details:
      '1-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Terms of use',
    header:
      ' Using this website is according to the following terms and conditions:',

    details:
      '2-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Copy Rights',
    header:
      ' Using this website is according to the following terms and conditions:',

    details:
      '3-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Registration, payment & cancelation policies',
    header:
      ' Using this website is according to the following terms and conditions:',

    details:
      '4-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Why to choose us ?',
    header:
      ' Using this website is according to the following terms and conditions:',

    details:
      '5-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Add us to your safe mailing list',
    header:
      ' Using this website is according to the following terms and conditions:',
    details:
      '6-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
  {
    title: 'Program venue’s terms and conditions',
    header:
      ' Using this website is according to the following terms and conditions:',
    details:
      '7-EURODEMY does not collect any of your personal information when surfing their website unless you give us the permission. When you agree to give us your personal information, we do not use it for any purpose except for processing your orders for getting information or getting a service. By using our website, you agree to this privacy policy. It is important to note that EURODEMY is entitled to change, modify, or update some or all terms of this privacy policy without prior notice. So by continuing to use our website after making changes, you agree to these changes. This website and its staff follow a comprehensive and rigorous information security policy. So, none can access your identifying personal data except for the authorized ones who acknowledge to keep this data secure and confidential. You have to know that we collect your information only for helping in improving our services provided to you and we guarantee all you information is kept confidential and secure. Moreover, all the information collected will be used when replying to your inquiries, comments, and orders.Your collected personal information confidentiality and security are our main priority at all times. This information may be disclosed in the case of necessity under the applicable law or when this is to obey the law and to protect and defend EURODEMY website rights or its users. It is important to note that when we collect your information, we ask you to give us it freely, as this information is very important for us so that we can contact you and process your orders, as required.If you have any questions or inquiries about our terms & conditions and privacy policy, do not hesitate to contact us through our contact channels available on our website.',
  },
];
console.log(detailsHeadlines);
let previousClickedTab = null; // Variable to keep track of the previously clicked tab

// Function to handle tab click event
function handleTabClick(tab) {
  // Remove styles from the previously clicked tab
  if (previousClickedTab) {
    previousClickedTab.style.backgroundColor = ''; // Remove background color
    previousClickedTab.style.color = ''; // Remove text color
  }

  // Apply styles to the newly clicked tab
  tab.style.backgroundColor = '#262121';
  tab.style.color = '#fff';

  // Update the previous clicked tab to the current one
  previousClickedTab = tab;

  // Find the details corresponding to the clicked tab
  const selectedDetails = moreDetailsData.find(
    detail => detail.title === tab.innerText
  );

  // Update the more details container with the selected details
  moreDetailsContainer.innerHTML = `<h4 class="detailsHeader">${selectedDetails.header}</h4>
    <p class="detailsArticle">&#x2022 ${selectedDetails.details}</p>`;
}

// Attach click event listeners to all tab elements
detailsHeadlines.forEach(el => {
  el.addEventListener('click', e => {
    handleTabClick(e.target); // Handle tab click event
  });
});

// Set the first tab as active by default
if (detailsHeadlines.length > 0) {
  handleTabClick(detailsHeadlines[0]); // Trigger click event on the first tab
}
