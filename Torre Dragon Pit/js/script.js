let jugarDeNuevo;

do {
    let usuario = prompt("Ingrese piedra, papel, tijera, lagarto o Spock");
    usuario = usuario.toLowerCase();

    // Elección random CPU
    let random = Math.floor(Math.random() * 5);
    let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    let computadora = opciones[random];

    console.log("La computadora eligió: " + computadora);

    if (usuario === "piedra" || usuario === "papel" || usuario === "tijera" || usuario === "lagarto" || usuario === "spock") {
        if (usuario === computadora) {
            console.log("Empate, juguemos de nuevo");
        } else if (
            (usuario === "piedra" && (computadora === "tijera" || computadora === "lagarto")) ||
            (usuario === "papel" && (computadora === "piedra" || computadora === "spock")) ||
            (usuario === "tijera" && (computadora === "papel" || computadora === "lagarto")) ||
            (usuario === "lagarto" && (computadora === "papel" || computadora === "spock")) ||
            (usuario === "spock" && (computadora === "piedra" || computadora === "tijera"))
        ) {
            console.log("¡Ganaste!");
        } else {
            console.log("¡Perdiste! La computadora gana.");
        }
    } else {
        console.log("Por favor, ingrese una opción válida: piedra, papel, tijera, lagarto o Spock.");
    }

    jugarDeNuevo = prompt("¿Quieres jugar de nuevo? (s/n)").toLowerCase();
} while (jugarDeNuevo === 's');
