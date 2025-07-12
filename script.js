// Arreglo inicial de productos
let productos = [
  {
    nombre: "Camisa",
    precio: 25.99,
    descripcion: "Camisa de algodón talla M"
  },
  {
    nombre: "Zapatos",
    precio: 49.99,
    descripcion: "Zapatos deportivos negros"
  },
  {
    nombre: "Gorra",
    precio: 12.00,
    descripcion: "Gorra azul con visera curva"
  }
];

// Función para renderizar la lista de productos
function renderizarProductos() {
  const lista = document.getElementById("product-list");
  lista.innerHTML = ""; // Limpiar la lista antes de renderizar

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio.toFixed(2)}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(item);
  });
}

// Función para agregar un nuevo producto (predefinido o aleatorio)
function agregarProducto() {
  const nuevoProducto = {
    nombre: "Producto Nuevo",
    precio: Math.random() * 100,
    descripcion: "Descripción del nuevo producto"
  };

  productos.push(nuevoProducto);
  renderizarProductos(); // Volver a renderizar
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos();

  const botonAgregar = document.getElementById("add-product");
  botonAgregar.addEventListener("click", agregarProducto);
});
