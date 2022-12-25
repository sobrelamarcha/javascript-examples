function first() {
    console.log(`First`);
}

function second() {
    console.log(`Second`);
}

function third() {
    console.log(`Third`);
}

function fourth() {
    console.log(`Fourth`);
}

// la siguiente función no tiene nombre (véase cómo se accede a ella en index.html y se exporta usando un export default. Recuerda que habitualmente en un archivo js o se usa un solo export default o múltiples exports pero nunca mezcla de ambos. Aquí se mezclan aunque no es una buena práctica.)
export default function () {
    console.log(`Fifth`);
}

export {
    first,
    second,
    third,
    fourth
};