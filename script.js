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
const theme = document.getElementById("theme-link");

toggleButton.onclick = function () {
  if (theme.getAttribute("href") === "") {
    theme.setAttribute("href", "dark-mode.css");
    window.localStorage.setItem('theme', 'dark');
  } else {
    theme.setAttribute("href", "");
    window.localStorage.setItem('theme', 'light');
  }
};
document.addEventListener('DOMContentLoaded',()=>  {
  if(window.localStorage.getItem('theme')==='dark'){
    theme.setAttribute("href", "dark-mode.css");

  }
  else theme.setAttribute("href", "");
});