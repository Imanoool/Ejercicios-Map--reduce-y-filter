/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 10
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Mapear (Map)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .map()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function mapearAMayusculas(palabras) {
    return palabras.map(function(palabra) {
        return palabra.toUpperCase();
    });
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var palabras = ["hola", "mundo"];
var palabrasMayusculas = mapearAMayusculas(palabras);
console.log('Las palabras en mayúsculas son:', palabrasMayusculas); // ["HOLA", "MUNDO"]