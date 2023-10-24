// Conversor de temperatura
let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32;

console.log("La temperatura en Fahrenheit es: " + temperaturaFahrenheit.toFixed(2));