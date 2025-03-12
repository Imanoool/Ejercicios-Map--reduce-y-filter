/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 7
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Filtrar (Filter)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .filter()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function esPalindromo(palabra) {
    return palabra === palabra.split('').reverse().join('');
}

function filtrarPalindromos(palabras) {
    return palabras.filter(esPalindromo);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var palabras = ["ana", "oso", "casa", "reconocer"];
var palindromos = filtrarPalindromos(palabras);
console.log('Los palíndromos son:', palindromos); // ["ana", "oso", "reconocer"]