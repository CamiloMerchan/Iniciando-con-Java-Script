//**pedir datos por teclado */
var nombre=prompt("Ingrese su nombre");
console.log("Este es mi nombre",nombre);
alert(nombre);
var edad=prompt("Ingrese su edad");
console.log("Esta es mi edad",edad);
alert(edad);
/**Variables */
var num=5
console.log("num",num);

//**variables de texto
var palabras="palabras";
console.log("palabras",palabras);

//**variables boleanans */
var activo="true";
console.log("activo",activo);

//**variables tipo arreglo */
var colores=["red","cyan",activo,num];
console.log("colores",colores);

//**variables tipo objeto */

var vehiculo={
    tipo:"Automovil",
    modelo:2018,
    usado:true
};
console.log("vehiculo",vehiculo);
console.log("tipo de vehiculo",vehiculo.tipo);

//**Diferencias entre var y let  */
var apellido ="martinez"
console.log("apellido",apellido);
apellido=15;
console.log("apellido Numerico",apellido);

if (true){
    apellido="perez";
    console.log("apellido dentro del if",apellido);
}
console.log("apellido fuera del if",apellido);
var cantidad=30
console.log("cantidad num",cantidad);
if (true);{
    let cantidad=69;

}
//**constantes */
const edad2=20;
console.log("constantes edad".edad2);
//*edad=35;
console.log("constantes edad".edad2);

//**concatenacion de variables */
var anio=2018;
var promedio="25";
console.log("la concatenacion de "+anio+ "y" +promedio+ "es", anio+Number(promedio));