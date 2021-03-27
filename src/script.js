const icon = document.querySelector(".container__wrapper__b__footer__icon");
const popup = document.querySelector(".container__wrapper__b__footer__popup");

icon.addEventListener("click", (e) => {
  popup.classList.toggle("display");
  icon.classList.toggle("color");
  console.log(icon);
});
