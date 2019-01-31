const modalOpenButtons = document.querySelectorAll(".card__button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const escKeyCode = 27;

modalOpenButtons.forEach(element =>
  element.addEventListener("click", () => modalOpen())
);

const modalOpen = () => {
  modal.classList.add("modal--opened");
  modalCloseButton.addEventListener("click", () => modalClose());
};

const modalClose = () => {
  modal.classList.remove("modal--opened");
};

document.addEventListener("keydown", evt => {
  if (
    modal.classList.contains("modal--opened") &&
    event.keyCode === escKeyCode
  ) {
    modalClose();
  }
});

document.addEventListener("click", evt => {
  if (evt.target === modal) {
    modalClose();
  }
});
