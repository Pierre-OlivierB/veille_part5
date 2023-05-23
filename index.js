var searchBtn = document.querySelector(".search-btn");
var closeBtn = document.querySelector(".close-btn");
var searchInputContainer = document.getElementById("search-input-container");
searchBtn.addEventListener("click", () => {
  searchInputContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  searchInputContainer.classList.remove("show");
  searchInputContainer.querySelector("input").value = "";
});
