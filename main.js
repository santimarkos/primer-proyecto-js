class Producto {
    constructor(id, nombre, precio, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.cantidad = 1;
    }
  }
  
  const productos = [
    new Producto(1, "Fiat Argo 1.8", 2000000, "img/Auto1.jpg"),
    new Producto(2, "Toyota Etios 1.5 G", 4000000, "img/Auto2.jpg"),
    new Producto(3, "Toyota Corolla 1.8", 3000000, "img/Auto3.jpg"),
    new Producto(4, "Toyota Etios 1.5 B", 5000000, "img/Auto4.jpg"),
    new Producto(5, "Ford Ranger 3.2", 6000000, "img/Auto5.jpg"),
    new Producto(6, "Chery Tiggo 2 1.5", 4000000, "img/Auto6.jpg"),
    new Producto(7, "Honda Civic 2.0", 5000000, "img/Auto7.jpg"),
    new Producto(8, "Peugeot 2008", 6000000, "img/Auto8.jpg")
  ];
  
  let carrito = [];
  
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
  
  const contenedorProductos = document.getElementById("contenedorProductos");
  const contenedorCarrito = document.getElementById("contenedorCarrito");
  const verCarrito = document.getElementById("verCarrito");
  const vaciarCarrito = document.getElementById("vaciarCarrito");
  const total = document.getElementById("total");
  const comprarCarrito = document.getElementById("comprarCarrito");
  
  const mostrarProductos = () => {
    productos.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
      card.innerHTML = `
        <div class="card">
          <img src="${producto.img}" class="card-img-top imgProductos">
          <div class="card-body">
            <h5>${producto.nombre}</h5>
            <p>${producto.precio}</p>
            <button class="btn colorBoton" id="boton${producto.id}">Comprar</button>
          </div>
        </div>
      `;
      contenedorProductos.appendChild(card);
  
      const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
      });
    });
  };
  
  const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
  
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      const producto = productos.find(producto => producto.id === id);
      carrito.push(producto);
    }
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal();
  };
  
  const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
  
    carrito.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
      card.innerHTML = `
        <div class="card">
          <img src="${producto.img}" class="card-img-top imgProductos">
          <div class="card-body">
            <h5>${producto.nombre}</h5>
            <p>${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <button class="btn colorBoton" id="eliminar${producto.id}">Eliminar Producto</button>
          </div>
        </div>
      `;
      contenedorCarrito.appendChild(card);
  
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
      });
    });
  
    calcularTotal();
  };
  
  const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  
  const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
  };
  
  const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
      totalCompra += producto.precio * producto.cantidad;
    });
    total.innerHTML = `Total: $${totalCompra}`;
  };
  
  verCarrito.addEventListener("click", mostrarCarrito);
  vaciarCarrito.addEventListener("click", eliminarTodoElCarrito);
  
  mostrarProductos();
  calcularTotal();
  
  comprarCarrito.addEventListener("click", () => {
    mostrarFormulario();
  });
  
  const mostrarFormulario = () => {
    const formulario = document.createElement("form");
    formulario.innerHTML = `
      <h3>Información del Comprador</h3>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" class="form-control" required>
      </div>
      <button type="submit" class="btn colorBoton">Realizar Compra</button>
    `;
    
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      realizarCompra(nombre, email);
    });
  
    contenedorCarrito.appendChild(formulario);
  };
  
  const realizarCompra = (nombre, email) => {
   
  
    carrito = [];
    mostrarCarrito();
    localStorage.removeItem("carrito");
  
    alert(`Gracias por tu compra, ${nombre}!`);
  };
  