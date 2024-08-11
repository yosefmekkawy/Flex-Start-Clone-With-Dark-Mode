const filterItems = document.querySelectorAll(".filter-item");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterItems.forEach((filter) => {
  filter.onclick = function () {
    document.querySelector(".filter-item.active").classList.remove("active");
    event.target.classList.add("active");
    const filterClass = this.textContent.toLowerCase();

    portfolioItems.forEach((item) => {
      if (filterClass === "all" || item.classList.contains(filterClass)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
});

const toggleButton = document.getElementById("dark-mode-toggle");
const theme = document.getElementById("theme-link"); // Your link tag at the end of the head

toggleButton.onclick = function () {
  if (theme.getAttribute("href") === "") {
    theme.setAttribute("href", "dark-mode.css"); // Path to your dark mode CSS file
  } else {
    theme.setAttribute("href", "");
  }
};
