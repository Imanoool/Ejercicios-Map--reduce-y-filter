/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 10
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Reducir (Reduce)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .reduce()----> Valor 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function reducirContarVocales(palabras) {
    return palabras.reduce(function(acumulador, palabra) {
        return acumulador + (palabra.match(/[aeiou]/gi) || []).length;
    }, 0);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var palabras = ["hola", "mundo"];
var totalVocales = reducirContarVocales(palabras);
console.log('El total de vocales es:', totalVocales); // 4