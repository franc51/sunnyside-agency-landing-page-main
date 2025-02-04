const menuModal = document.getElementById("menuModal");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const opacity = document.getElementById("opacityLayer");

menuClose.addEventListener("click", () => {
  menuModal.classList.remove("showModal");
  menuModal.classList.add("hideModal");
  opacity.classList.add("opacityOff");
});

menuOpen.addEventListener("click", () => {
  menuModal.classList.remove("hideModal");
  menuModal.classList.add("showModal");
  opacity.classList.add("opacityOn");
});
