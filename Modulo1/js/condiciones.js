//**Realizar un script que pida al usuario dos numeros y diga cual es el mayor de los dos numero, si son iguales */
var nombre=prompt("Ingrese su nombre");
console.log("Este es mi nombre",nombre);

var numero=prompt("Ingrese el primer numero ");
console.log("Este es el primer numero",numero);

var numero2=prompt("Ingrese el segundo numero ");
console.log("Este es el segundo numero",numero2);

if (numero>numero2){
    console.log("el numero mayor es ",numero);
}
else if (numero<numero2){
    console.log("el numero menor es ",numero2);
}
else if (numero==numero2){
    console.log("los numeros son iguales");
}
/*ingresar por pantalla la edad de una persona si es mayor a 18 entonces e smayor de 
edad sino menor de edad, si la edad es menor o igual a 33 eres milenea, mayor o igual a 70 eres anciano 
y si es mayor o igual a 36 ya no es milenium 70*/

var edadd=prompt("Ingrese su edad");
console.log("su edad es ",edadd);
function calcularEdad(edad)
{

if (edadd>=18){
console.log("Es mayor de edad");
}
else {(edadd<18)
        console.log("Es menor de  edad");
}
if (edadd<=33){
    console.log("eres milenea");
}
if (edadd>=70){
    console.log("eres anciano");
}
else{
        console.log(" ya npo eres milenea");
}
}
debugger;
calcularEdad(edadd);
calcularEdad(23);
calcularEdad(89);
calcularEdad(15);
calcularEdad(67);


