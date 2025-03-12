/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 9
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Filtrar (Filter)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .filter()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function esPrimo(num) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
}

function filtrarNumerosPrimos(lista) {
    return lista.filter(esPrimo);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var primos = filtrarNumerosPrimos(numeros);
console.log('Los números primos son:', primos); // [2, 3, 5, 7]