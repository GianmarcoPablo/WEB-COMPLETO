//& RETURN

let total = 0;

function agregarCarrito(precio) {
  return total += precio;
}
function calcularImpuesto(total) {
  return 1.18 * total;
}

total = agregarCarrito(300);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`Total a pagar: ${totalPagar}`);