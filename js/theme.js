const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});
