// Datos de los productos
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
    {
        img: "img/stike/gripas/Grips_kink_samurai.jpg",
        title: "Grips kink samurai",
        price: "$50.000",
        description: "Grips kink con un diseño innovador para un mejor agarre."
    },
    {
        img: "img/stike/gripas/Grips_odyssey_Broc_Rayford.jpg",
        title: "Grips odyssey Broc Rayford",
        price: "$50.000",
        description: "Grips de la serie Odyssey, ideales para BMX."
    },
    {
        img: "img/stike/gripas/grips_merrit_ITSY.jpg",
        title: "Grips merrit ITSY",
        price: "$45.000",
        description: "Grips pequeños pero de gran calidad, perfectos para cualquier bici."
    },
    {
        img: "img/stike/gripas/Grips_cult_Ricany.jpg",
        title: "Grips cult Ricany",
        price: "$50.000",
        description: "Grips cult diseñados para un rendimiento superior."
    }
];


// Función para abrir el modal
function openModal(index) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");

    modal.style.display = "block";
    modalImg.src = products[index].img;
    modalTitle.textContent = products[index].title;
    modalPrice.textContent = products[index].price;
    modalDescription.textContent = products[index].description;
}

// Cerrar el modal al hacer clic en la 'X'
const closeModalBtn = document.querySelector(".close");
closeModalBtn.onclick = function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
