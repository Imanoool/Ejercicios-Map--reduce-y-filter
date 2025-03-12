/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 9
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Reducir (Reduce)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .reduce()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function reducirAplanarArray(arrays) {
    return arrays.reduce(function(acumulador, arr) {
        return acumulador.concat(arr);
    }, []);
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var arrays = [[1, 2], [3, 4], [5, 6]];
var aplanado = reducirAplanarArray(arrays);
console.log('El array aplanado es:', aplanado); // [1, 2, 3, 4, 5, 6]