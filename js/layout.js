document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modal_img = document.querySelector(".modal_content");
  const span = document.querySelector(".close");
  const imgs = document.querySelectorAll(".img");

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      modalDisplay("block");
      modal_img.src = img.src;
    });
  });

  span.addEventListener("click", () => {
    modalDisplay("none");
  });
  modal.addEventListener("click", () => {
    modalDisplay("none");
  });
  function modalDisplay(text) {
    modal.style.display = text;
  }
});
