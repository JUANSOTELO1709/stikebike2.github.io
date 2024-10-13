const lista = document.querySelector('.lista');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const liWidth = 200; // ancho de cada elemento li
const elementos = lista.children;
const cantidadElementos = elementos.length;

// Clonar los elementos para crear el efecto de bucle
for (let i = 0; i < cantidadElementos; i++) {
  const clone = elementos[i].cloneNode(true);
  lista.appendChild(clone);
}

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = cantidadElementos - 1;
  }
  lista.style.transform = `translateX(${currentIndex * -liWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex >= cantidadElementos * 2) {
    currentIndex = 0;
  }
  lista.style.transform = `translateX(${currentIndex * -liWidth}px)`;
});