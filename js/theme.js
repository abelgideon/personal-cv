const toggleBtn = document.getElementById("theme-toggle-btn");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark-mode");
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  // Save preference
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
