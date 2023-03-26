function extraerInfoPersonal(objeto) {
    const { nombre, apellido, altura, peso } = objeto;
    let alturaStr = "";
    if (altura) {
        alturaStr = `${altura}cm`;
    }
    
    let pesoStr = "";
    
    if (peso) {
        pesoStr = `${peso}kg`;
    }
    return {
        nombre,
        apellido,
        altura: alturaStr,
        peso: pesoStr,
    };
}

const infoPersonal = {
    nombre: "Juan",
    apellido: "Pérez",
    altura: 170,
    peso: 75,
    edad: 30,
};

const infoExtraida = extraerInfoPersonal(infoPersonal);

console.log(infoExtraida);
