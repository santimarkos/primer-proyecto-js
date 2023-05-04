//
//let alta_0km = 10_000
//let sellado_alta = 2_000
//let deposito_inicial = Number (prompt ("ingresa la seña"))
//const monto_minimo = 5000 
//while (Number.isNaN(deposito_inicial) || deposito_inicial < monto_minimo) {//
//alert ("ingresa un monto mayor a 5000")
//deposito_inicial =Number(prompt ("ingresa la seña") )
//}
//let costo_final = alta_0km + sellado_alta
//let dinero_a_depositar
//let dinero_a_reitegrar
//const costo_no_alcanzado = deposito_inicial < costo_final
//
//
//if (costo_no_alcanzado){ //
//    dinero_a_depositar = costo_final - deposito_inicial

//    alert("la diferencia a abonar es "+  dinero_a_depositar)
//}
//
//else { 
//    if (deposito_inicial == costo_final){//
//        alert("Patentamiento cubierto sin dinero restante a depositar ni a reintegrar")
//    } 
//    else {
//        dinero_a_reitegrar = deposito_inicial - costo_final
//        alert("el dinero a reintegrar es "+ dinero_a_reitegrar)
//    }
//    }


//___________________________________________________
//segunda entrega

// class Automovil{
//     constructor (id,nombre,precio){
//         this.id= id;
//         this.nombre= nombre;
//         this.precio = precio;
//     }
// };

// const ford_focus = new Automovil ("ford_foc_23","Ford focus 2023", 4000000);
// const chevrolet_cruz = new Automovil ("chev_cruz_23","chevrolet cruz 2023", 3000000);
// const fiat_uno = new Automovil ("fiat1_23","fiat uno 2023", 2000000);
// const bmw_serie_1 = new Automovil ("bmw_s1_23","bmw serie 1 2023", 6000000);

// const arrayCarros = [ford_focus, chevrolet_cruz, fiat_uno, bmw_serie_1];
// const idDelCarro = "fiat1_23"
// const carroSeleccionado = arrayCarros.find(automovil => automovil.id == idDelCarro);

// console.log("su nuevo " + carroSeleccionado.nombre + " cuesta $" + carroSeleccionado.precio)
//console.log (carroSeleccionado)


 
// Automovil {id: 'ford_foc_23', nombre: 'Ford focus 2023', precio: 4000000} => carroSeleccionado

// console.log("Automoviles en stock:  ");
// console.log (arrayProductos);

// -----------------------------------------------------
// tercera entrega


// localStorage
// JSON
// DOM

const app = document.getElementById('app')
    
const html = /* HTML */`<header>
<img src=./assets/fiat1.jpg alt="#">
      <h2>auto</h2>
      <p>precio</p> 
      </header>
  <form id="carrito" >
      <select name="" id="tipoPago">
          <option selected disabled>Tipo de Pago</option>
          <option value="0.85">15% descuento con efectivo</option>
          <option value="1.10">10% de recargo debito</option>
          <option value="0.50">50% con cupon</option>
      </select> 
      <span id="precioFinal"></span>
      <button type="submit">Comprar</button>
  </form>`

app.innerHTML = html

const carro = {
    precio: 10000,
    nombre: 'uno',
    marca: 'ferrari',
    color: 'rojo'
}

const formulario = document.getElementById('carrito')

const tipoPago = document.getElementById('tipoPago')

let descuento 
const calcular = function (event) {
    event.preventDefault()
    window.localStorage.setItem('valorConDescuento',descuento)
}

tipoPago.addEventListener('input', (e) => {
    const rawValue = e.target.value
    const valueDescuento = Number(rawValue)
    descuento = rawValue
    const total = carro.precio * valueDescuento
    console.log(total);
})
formulario.addEventListener('submit',calcular)
// window.localStorage.setItem('valorConDescuento')


// .setAttribute("selected", "selected")