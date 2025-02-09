const menuModal = document.getElementById("menuModal");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const opacity = document.getElementById("opacityLayer");

// Open modal when clicking on the trigger (adjust selector as needed)
menuOpen.addEventListener("click", () => {
  menuModal.classList.remove("hideModal");
  menuModal.classList.add("showModal");
  opacity.classList.add("opacityOn");
});

// Close modal when clicking outside of it
document.addEventListener("click", (event) => {
  if (!menuModal.contains(event.target) && event.target !== menuOpen) {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  menuModal.classList.remove("showModal");
  menuModal.classList.add("hideModal");
  opacity.classList.remove("opacityOn");
  opacity.classList.add("opacityOff");
}
