const copyButton = document.getElementById("copy-button-id");
const coursCode = document.getElementById("course-code-id").innerText;

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(coursCode);
  copyButton.innerHTML = `<img src="Assets/copy.svg" alt="">Copied`;
});
