let texto = prompt('Ingresá un texto')

function esVocal(caracter) {
    return caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u';
}

function esConsonante(caracter) {
    return !esVocal(caracter)
}

function esPuntuacion(caracter) {
    return caracter == '.' || caracter == ',' || caracter == ':' || caracter == ';';
}

function contarCaracteres(texto) {
    if ((texto == null) || (texto.length == 0)) {
        return 'Es necesario ingresar un texto';
    }
    
    let vocales = 0
    let consonantes = 0
    let espacios = 0
    let signosPuntuacion = 0

    for (let i = 0; i < texto.length; i += 1) {
        if (esVocal(texto[i])) {
            vocales += 1;
        }
        else if (texto[i] == ' ') {
            espacios += 1;
        }
        else if ((esPuntuacion(texto[i]))) {
            signosPuntuacion += 1;
        }
        else if (esConsonante(texto[i])) {
            consonantes += 1;
        }
    }
    return { vocales, consonantes, espacios, signosPuntuacion }
}

let result = contarCaracteres(texto);

console.log(result)