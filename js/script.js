// Selección de elementos del DOM
const header = document.getElementById("header");
const navBurguer = document.querySelector(".nav_burguer");
const navBurguerLine1 = document.querySelector(".nav_burguer-line-1");
const navBurguerLine2 = document.querySelector(".nav_burguer-line-2");
const navBurguerLine3 = document.querySelector(".nav_burguer-line-3");
const itemContainer = document.querySelector(".items_container");
const menuItems = document.querySelectorAll(".menuItems");
const backgroundBlur = document.querySelector(".background_blur");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Función para mostrar el menú de navegación
const showNavMenu = () => {
    navBurguerLine1.classList.toggle("active");
    navBurguerLine2.classList.toggle("active");
    navBurguerLine3.classList.toggle("active");
    itemContainer.classList.toggle("active");
    backgroundBlur.classList.toggle("active");
}

// Evento para el ícono de menú
navBurguer.addEventListener("click", showNavMenu);

// Ocultar el menú al hacer clic en un item
menuItems.forEach((item) => {
    item.addEventListener("click", showNavMenu);
})

// Cambiar color del header al hacer scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// Datos de los productos
const products = [
    {
        img: "img/stike/gripas/Gripa_cult_crew.jpg",
        title: "Grips cult crew",
        price: "$50.000",
        description: "Grips de alta calidad para mejorar el control de tu bicicleta."
    },
    {
        img: "img/stike/gripas/Gripa_eanster_Riblet.jpg",
        title: "Grips eanster riblet",
        price: "$45.000",
        description: "Grips eanster con diseño ergonómico para mayor comodidad."
    },
];

// Función para abrir el modal con la información del producto
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = products[index].img;
    modalTitle.textContent = products[index].title;
    modalPrice.textContent = products[index].price;
    modalDescription.textContent = products[index].description;
}

// Función para cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido del modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
