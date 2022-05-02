/**
 * SCOPE & HOISTING
 * 1.A
 * Investiga cuál es la diferencia entre 
 * declarar una variable con var y 
 * directamente asignarle un valor.
 */
 x = 1;
 var a = 5;
 var b = 10;
 var c = function(a, b, c) {
   var x = 10;
   console.log(x);//variable local x de la funcion c
   console.log(a);//valor del parametro de la funcion
   var f = function(a, b, c) {
     b = a; //'b' cambia su valor al de 'a'
     console.log(b);//'b' valía 9, en la línea anterior se igualo a 'a'
     b = c; //'b' cambía su valor al de 'c'
     var x = 5; //se declara una variable inútil 
   }
   f(a,b,c);//llamado de la función 'f'
   console.log(b); //se imrpime al valor de 'b', parametro de la función 'c'
 }
 c(8,9,10); //llamado de la función 'c'
 console.log(b);//se imprime la variable global 'b'
 console.log(x);//se imprime la variable global 'x'

 //1.B
console.log(bar);//existe, pero su valor se encuentra antes de su muestra
//console.log(baz);//no existe en el contexto global
foo();//existe en el contexto global
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//1.C
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//se reescribío la variable instructor (contexto global)

//1.D
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();//Franco se escribe en la función anonima, pero no modifica el contexto global ('Tony')
console.log(instructor);

//1.E
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}//reescritura de valores dentro del contexto global (var)
console.log(instructor);
console.log(pm);//let divide instrucciones o condicionales como nuevos contextos, no solo funciones

/**
 * var   --> sólo vive en el contexto definido, funciones
 * let   --> sólo vive en un bloque de código / stamenets if{}
 * const --> igual que el let, pero no se puede cambiar su valor
 */

/**
 * COERCIÓN DE DATOS
 * ¿Cuál crees que será el resultado de la ejecución 
 * de estas operaciones
 * 2.A
 */
console.log(6 / "3");//2  v/
console.log("2" * "3");//6  v/
console.log(4 + 5 + "px");//9px  v/
console.log("$" + 4 + 5);//$45  v/
console.log("4" - 2);//2  v/
console.log("4px" - 2);//¿?  X - NaN
console.log(7 / 0);//NaN  X - Infinity
console.log({}[0]);//error  X - undefined
console.log(parseInt("09"));//9  v/
console.log(5 && 2);//true  X - 2
console.log(2 && 5);//true  X - 5
console.log(5 || 0);//true  X - 5
console.log(0 || 5);//true  X - 5
console.log([3]+[3]-[10]);//NaN  X - 23
console.log(3>2>1);//false  v/
console.log([] == ![]);//false  X - true

/**
 * HOISTING
 * ¿Cuál es el output o salida en consola luego de 
 * ejecutar este código?
 * Explica por qué:
 */
 function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
//Respuesta (R): undefined & 2, porque a 
//no esta definido aún y foo esta dentro del 
//contexto de la función 'test' v/

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        console.log(snack);//return snack;
    }
    console.log(snack);//return snack;
}

getFood(false);

//R: 'Meow Mix', porque el if 
//funciona si la condición es true  X
//undefined -> porque se declara dentro del 
//contexto de la función, pero no se asigna el valor

/**
 * THIS
 * ¿Cuál es el output o salida en consola luego 
 * de ejecutar esté código? Explica por qué:
 */
 var fullname = 'Juan Perez';
 var obj = {
    fullname: 'Natalia Nerea',
    prop: {
       fullname: 'Aurelio De Rosa',
       getFullname: function() {
          return this.fullname;
       }
    }
 };
 
 console.log(obj.prop.getFullname());
 
 var test = obj.prop.getFullname;
 
 console.log(test());

 //R: 'Aurelio De Rosa' y undefined, porque el atributo
 //prop tiene la función y tiene un fullname; undefined porque 
 //el atributo getFullname no existe

/**
 * EVENT LOOP
 * Considerando el siguiente código, ¿Cuál sería 
 * el orden en el que se muestra por consola? 
 * ¿Por qué?
 */
 function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing();
//R: 1, un segundo después 2, 3 y 4  - X
//1, 4, 3 y 2, primero se muestra lo que esta directo,
//luego el primer setTimeout (3), después el de 1 segundo (4)