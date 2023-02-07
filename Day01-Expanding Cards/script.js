const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveCalsses();
    panel.classList.add("active");
  });
});

const removeActiveCalsses = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
