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

function filtrarElementosUnicos(lista) {
    return lista.filter(function(elemento, index, arr) {
        return arr.indexOf(elemento) === index;
    });
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var elementos = [1, 2, 2, 3, 4, 4, 5];
var elementosUnicos = filtrarElementosUnicos(elementos);
console.log('Los elementos únicos son:', elementosUnicos); // [1, 2, 3, 4, 5]