let bar = window.document.querySelector(".container");
let closeIcon = window.document.querySelector(".close");
let openIcon = window.document.querySelector(".open");

function closeBar() {
  bar.style.opacity = 0.1;
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
}

function openBar() {
  bar.style.opacity = 1;
  closeIcon.style.display = "block";
  openIcon.style.display = "none";
}
