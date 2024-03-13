const menu = document.querySelector(".menu");
const linkGrp = document.querySelector(".hero--header_links");

function showNav() {
  linkGrp.classList.toggle("show");
}

menu.addEventListener("click", showNav);
