let colorBox = document.querySelector(".color-box"),
  settings = document.querySelector(".settings"),
  color = document.querySelectorAll(".color"),
  bodyBg = document.querySelector("body");

settings.addEventListener("click", () => {
  colorBox.classList.toggle("settings-active");
});

color.forEach((color) => {
  let dataColor = color.getAttribute("data-color");

  color.addEventListener("click", () => {
    document
      .querySelector(":root")
      .style.setProperty("--theme-color", dataColor);
  });

  console.log(dataColor);
});
