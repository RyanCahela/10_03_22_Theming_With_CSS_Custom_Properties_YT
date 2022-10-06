//grab select box
const themeSelectForm = document.querySelector(".js-theme-select-form");
const selectBox = document.querySelector("#themeSelect");
//grab body tag
const bodyEl = document.body;

//add listener to select box to add selected class to body element

selectBox.addEventListener("change", (e) => {
  const formData = new FormData(themeSelectForm);
  console.log("formData", formData);

  for (const value of formData.values()) {
    bodyEl.className = "";
    bodyEl.classList.add(value);
  }
});
