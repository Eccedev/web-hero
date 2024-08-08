// botón scroll-to-top 
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    });
});

// modo oscuro switcher 
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

// Mensaje inicio modal pop-up al cargar el DOM
const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', ()=>{
    modal.classList.add('modal--visible');

    modalButtonClose.addEventListener('click', ()=>{
        modal.classList.remove('modal--visible');
    });
});