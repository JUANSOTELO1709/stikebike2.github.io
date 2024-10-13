let currentIndex = {
    grips: 0,
    pedal: 0,
    tenedor: 0,
    platos: 0,
    timon: 0 // Sección de Timones
};

function scrollProducts(section, direction) {
    const productList = document.querySelector(`#${section} .product-container .lista`);
    const totalProducts = productList.children.length;
    const visibleItems = 5; // Cambia este valor según cuántos elementos deseas mostrar
    const itemWidth = 100 / visibleItems; // Ancho de cada elemento

    // Calcula el nuevo índice temporal
    let newIndex = currentIndex[section] + direction;

    // Si el nuevo índice es menor que 0, salta al último producto
    if (newIndex < 0) {
        newIndex = totalProducts - 1;
    }

    // Si el nuevo índice es mayor que el último, salta al primer producto
    if (newIndex >= totalProducts) {
        newIndex = 0;
    }

    // Actualiza el índice actual
    currentIndex[section] = newIndex;

    // Desplaza la lista de productos
    const offset = -newIndex * itemWidth;
    productList.style.transform = `translateX(${offset}%)`;
}