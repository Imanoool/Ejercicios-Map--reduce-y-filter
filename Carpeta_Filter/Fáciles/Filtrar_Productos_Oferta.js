/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 6
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Filtrar (Filter)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .filter()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function filtrarProductosEnOferta(productos) {
    return productos.filter(function(producto) {
        return producto.enOferta;
    });
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var productos = [
    { nombre: "Laptop", enOferta: true },
    { nombre: "Mouse", enOferta: false }
];

var productosEnOferta = filtrarProductosEnOferta(productos);
console.log('Los productos en oferta son:', productosEnOferta); // [{ nombre: "Laptop", enOferta: true }]