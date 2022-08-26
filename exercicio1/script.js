//Exercício 1

const usuario = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//console.log(usuario);

// // Parte 1

// const caixaAlta = (objeto) => {
//     return {
//         nome: objeto.nome.toUpperCase(),
//         profissao: objeto.profissao.toUpperCase(),
//         username: objeto.username.toUpperCase(),
//         senha: objeto.senha.toUpperCase(),
//     }
// }

// console.log(caixaAlta(usuario));

// //Parte 2

// const texto = (objeto) => {
    
//     return string = `Seu nome é ${objeto.nome}, sua profissão é ${objeto.profissao}, seu nome de usuário é ${objeto.username}, sua senha é ${objeto.senha}`
// }

// console.log(texto(usuario));

// //Parte 3

// const imprimeObjeto = (objeto, callback) => {
//     const response = callback(objeto);

//     console.log("Imprime usuário", response);
// };

// console.log('Usando callback');
// imprimeObjeto(usuario, caixaAlta);
// imprimeObjeto(usuario, texto);

//Outras formas
function retornaTexto(objeto) {
    let textoCorrido = '';
    for(let key in objeto){
        textoCorrido= textoCorrido+ " "+ objeto[key]
    }
    return textoCorrido
} 
console.log(retornaTexto(usuario));

function retornaCaixaAlta(objeto) {
    let caixaAlta = {...objeto};
    for(let key in objeto){
        caixaAlta[key] = objeto[key].toUpperCase()
    }
    console.log(caixaAlta);
    //return caixaAlta
}

retornaCaixaAlta(usuario)
//console.log(retornaCaixaAlta(usuario));