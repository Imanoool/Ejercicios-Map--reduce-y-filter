/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
伊 𝐏𝐫á𝐜𝐭𝐢𝐜𝐚 8
伊 𝐅𝐢𝐜𝐡𝐞𝐫𝐨: Reducir (Reduce)
伊 𝐍𝐨𝐦𝐛𝐫𝐞: 𝐈𝐦𝐚𝐧𝐨𝐥 𝐅𝐢𝐠𝐮𝐞𝐫𝐨 𝐏𝐚𝐫𝐫𝐚𝐬
伊 𝐅𝐞𝐜𝐡𝐚: 10/03/𝟐𝟎𝟐4
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

/*Diseño*/
/*◤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◥
Lista[]---> .reduce()----> Objeto 
◣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◢*/

function reducirAgruparPorPropiedad(objetos, propiedad) {
    return objetos.reduce(function(acumulador, objeto) {
        var clave = objeto[propiedad];
        if (!acumulador[clave]) {
            acumulador[clave] = [];
        }
        acumulador[clave].push(objeto);
        return acumulador;
    }, {});
}

/*◤━━━━━━━━━━━━━◥
       main
◣━━━━━━━━━━━━━━━◢*/

var usuarios = [
    { nombre: "Juan", rol: "admin" },
    { nombre: "Ana", rol: "user" },
    { nombre: "Pedro", rol: "admin" }
];

var agrupados = reducirAgruparPorPropiedad(usuarios, "rol");
console.log('Los usuarios agrupados por rol son:', agrupados); // { admin: [{ nombre: "Juan", rol: "admin" }, { nombre: "Pedro", rol: "admin" }], user: [{ nombre: "Ana", rol: "user" }] }