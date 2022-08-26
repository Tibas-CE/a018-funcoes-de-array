const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

//Parte 1
const triplos = (arrayNumeros) => {
    const arraytriplo = [];
    for(let numero of arrayNumeros){
        arrayNumeros.push(numero * 3);
    }
    return arrayNumeros;
};

console.log(triplos(listaNumeros));

//forma mais simples com uso do map
// const triplos = [];
// const triplosComMap = listaNumeros.map((numero) => {
//     return numero * 3;
// });

// console.log(triplosComMap);

//Parte 2
const metades = (arrayNumeros) => {
    const arraytriplo = [];
    for(let numero of arrayNumeros){
        arrayNumeros.push(numero / 2);
    }
    return arrayNumeros;
};

console.log(metades(listaNumeros));

//forma mais simples com uso de map
// const metades = [];
// const metadesComMap = listaNumeros.map((numero) => {
//     return numero / 2;
// });

// console.log(metadesComMap);

//Usando callback
const imprime = (arrayNumeros, callback) => {
    const resposta = callback(arrayNumeros);

    console.log('Imprime operações', resposta);
};

imprime(listaNumeros, triplos);
imprime(listaNumeros, metades);