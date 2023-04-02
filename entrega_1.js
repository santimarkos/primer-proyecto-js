let alta_0km = 10_000
let sellado_alta = 2_000
let deposito_inicial = Number (prompt ("ingresa la seña"))
const monto_minimo = 5000 
while (Number.isNaN(deposito_inicial) || deposito_inicial < monto_minimo) {
alert ("ingresa un monto mayor a 5000")
deposito_inicial =Number(prompt ("ingresa la seña") )
}

let costo_final = alta_0km + sellado_alta
let dinero_a_depositar
let dinero_a_reitegrar
const costo_no_alcanzado = deposito_inicial < costo_final


if (costo_no_alcanzado){ 
    dinero_a_depositar = costo_final - deposito_inicial

    alert("la diferencia a abonar es "+  dinero_a_depositar)
}

else { 
    if (deposito_inicial == costo_final){
        alert("Patentamiento cubierto sin dinero restante a depositar ni a reintegrar")
    } 
    else {
        dinero_a_reitegrar = deposito_inicial - costo_final
        alert("el dinero a reintegrar es "+ dinero_a_reitegrar)
    }
    }



