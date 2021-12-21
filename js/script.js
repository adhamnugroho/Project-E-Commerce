const humbergerMenu = document.querySelector(".humberger-menu input");
const nav = document.querySelector(".container-logo-garis-batas-features .container-product-event-help");

humbergerMenu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
