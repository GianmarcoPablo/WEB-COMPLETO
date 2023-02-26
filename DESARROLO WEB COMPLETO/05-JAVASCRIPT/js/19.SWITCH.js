const metodosPago = 'tarjeta';

switch (metodosPago) {
  case "tarjeta":
    console.log(`Pagaste con ${metodosPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodosPago}`);
    break;
  case "efectivo":
    console.log(`Pagaste con ${metodosPago}`);
    break;
  default:
    console.log("Aun no has pagado");
    break;
}