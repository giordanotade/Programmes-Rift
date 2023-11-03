// Determinar si un estudiante puede acceder al descuento correctamente

let esEstudiante = true;
let tieneDescuento = false;

if (esEstudiante && tieneDescuento) {
  console.log("Tienes un descuento de estudiante.");
}
if (tieneDescuento && !esEstudiante) {
  console.log("Tienes un descuento civil.");
}

