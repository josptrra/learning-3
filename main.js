window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
