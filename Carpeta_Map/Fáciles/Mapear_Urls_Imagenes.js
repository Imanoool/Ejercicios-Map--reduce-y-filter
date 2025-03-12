/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 7
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Mapear (Map)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .map()----> Lista[] 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function mapearURLsDeImagenes(nombresArchivos, rutaBase) {
    return nombresArchivos.map(function(nombre) {
        return rutaBase + nombre;
    });
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var nombresArchivos = ["imagen1.jpg", "imagen2.png"];
var rutaBase = "https://ejemplo.com/imagenes/";
var urls = mapearURLsDeImagenes(nombresArchivos, rutaBase);
console.log('Las URLs de las imágenes son:', urls); // ["https://ejemplo.com/imagenes/imagen1.jpg", "https://ejemplo.com/imagenes/imagen2.png"]