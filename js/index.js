const modal = document.querySelector("#modal");
const closeModal = document.getElementById("closeModal");
const openModal = document.getElementById("openModal");

closeModal.addEventListener("click", () => {
  console.log(modal);
  modal.style.display = "none";
});

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});
