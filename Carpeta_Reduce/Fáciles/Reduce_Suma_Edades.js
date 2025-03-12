/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 8
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Reducir (Reduce)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .reduce()----> Valor 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function reducirSumaEdades(edades) {
    return edades.reduce(function(acumulador, edad) {
        return acumulador + edad;
    }, 0);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var edades = [20, 25, 30, 35];
var sumaEdades = reducirSumaEdades(edades);
console.log('La suma de las edades es:', sumaEdades); // 110