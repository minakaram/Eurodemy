const fileCvInput = document.querySelector("#file-cv-input");
const fileCvImage = document.querySelector("#file-cv-image");
const fileCvName = document.querySelector("#file-cv-name");

fileCvImage.addEventListener("click", function () {
  fileCvInput.click();
});

fileCvInput.addEventListener("change", function () {
  const file = fileCvInput.files[0];
  if (file) {
    fileCvName.value = file.name;
  } else {
    fileCvName.value = "";
  }
});

const fileCoverInput = document.querySelector("#file-cover-input");
const fileCoverImage = document.querySelector("#file-cover-image");
const fileCoverName = document.querySelector("#file-cover-name");

fileCoverImage.addEventListener("click", function () {
  fileCoverInput.click();
});

fileCoverInput.addEventListener("change", function () {
  const file = fileCoverInput.files[0];
  if (file) {
    fileCoverName.value = file.name;
  } else {
    fileCoverName.value = "";
  }
});

const FORM_ID = document.getElementById("form-id");
const apply_btn = document.getElementById("apply-btn-id");


apply_btn.addEventListener("click", () => {
    FORM_ID.scrollIntoView({ behavior: "smooth" });
  });