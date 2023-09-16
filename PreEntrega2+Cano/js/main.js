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

function contarCaracteres(caracteres) {
    if ((caracteres == null) || (caracteres.length == 0)) {
        return 'Es necesario ingresar un texto';
    }

   const result = { 
        vocales: 0, 
        consonantes: 0, 
        espacios: 0, 
        signosPuntuacion: 0
    }


    result.vocales = caracteres.filter(esVocal).length
    result.consonantes = caracteres.filter(esConsonante).length
    result.signosPuntuacion = caracteres.filter(esPuntuacion).length
    result.espacios = caracteres.filter((caracter) => caracter === " ").length

    return result
}

const caracteres = texto.split("").map((caracter) => caracter.toLowerCase())
const result = contarCaracteres(caracteres);


console.log(result)
