// traz todos os elementos de uma determinada tag
var p = document.getElementsByTagName('p');

// o p passou a ser um objeto, podendo ter suas propriedades e valores acessados e manipulados
// console.log(p[0].innerHTML = 'Hobo');

// faz um loop no comprimento do objeto
// for(var i = 0; i < p.length; i++){
//     p[i].innerHTML = 'Lindo dia!';
// }


// faz um loop em um número específico
for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}