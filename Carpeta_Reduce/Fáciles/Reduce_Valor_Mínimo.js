/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 5
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Reducir (Reduce)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .reduce()----> Valor 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function reducirValorMinimo(numeros) {
    return numeros.reduce(function(acumulador, num) {
        return Math.min(acumulador, num);
    }, Infinity);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var numeros = [1, 2, 3, 4];
var minimo = reducirValorMinimo(numeros);
console.log('El valor mínimo es:', minimo); // 1