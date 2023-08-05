const collapse = document.querySelector("ul");
const navToggle = document.querySelector(".hamburger");

const Fabulous = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", Fabulous);
