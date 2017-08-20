//Primer Clase: Nivelación. Let y Const.
// Let: Agregar información.
if (true) {
  let name = 'Nicolas';
  console.log(name);
}

let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
console.log('valor final de i es:', i);

// Let en funciones: Agregar información.
function ejemplo1() {
  let color = 'rojo';

  if (true) {
    let color = 'amarillo';
    console.log('subBloque 1 color:', color);
  }

  console.log('ejemplo 1 color:', color);
}
ejemplo1();

// Const: Agregar información.
var name = 'Juan';
console.log('Mi nombre es: ', name);

name = 'Pablo';

console.log('Mi nuevo nombre es: ', name);

// Objetos
const obj = { frutas: { manzana: { color: 'rojo' } } };
console.log('El color de la fruta es: ', obj.frutas.manzana.color);

obj.frutas.manzana.color = 'verde';

console.log('Mi nuevo color de fruta es: ', obj.frutas.manzana.color);

// Concatenación: Strings Templates.
let nombre = 'Nicolás';
console.log(`¡Hola!
Mi nombre es ${nombre}`);

// Crear una función y pasarle por parámetro un nombre.
function getName(name) {
  return name;
}
let str = `¡Hola! Soy Desarrollador FrontEnd
Mi nombre es ${getName('Nicolás')}`;

console.log(str);

// Array: Método Find.
let numeros = [2, 30, 1, 5, 10];
let resultado = numeros.find(function(x) {
  return x % 10 == 0;
});
console.log('El primer número que cumple la condición es: ', resultado);

let nombres = ['Alan', 'Zoe', 'Ana', 'Jose'];
let resultado2 = nombres.find(function(nombre) {
  return nombre.length == 3;
});

console.log('El nombre que cumple la condición es: ' + resultado2);

// Declarar un array sin elementos en los índices 2, 3 y 4
var a = [0, 1, , , , 5, 6];

// Muestra todos los índices, no sólo aquellos que tienen valores asignados
a.find(function(value, index) {
  console.log('Indice: ' + index + ' valor ' + value);
});

// Recorrer el html y cambiar el style de la clase 'ACTIVE'.
let lista = document.getElementsByTagName('li');
Array.from(lista).find(function(node) {
  if (node.className == 'active') {
    console.log(node.innerHTML);
    node.style.color = 'red';
  }
});

// Arrow Function
function add(a, b) {
  return a + b;
}
console.log('Suma sin arrow function: ', add(5, 3));

var add2 = (x, y) => x + y;
console.log('Suma con arrow function', add(5, 3));

function saludar(msg, nombre) {
  console.log(msg + ' ' + nombre);
}
saludar('¡Hola!', 'Nicolás');

// Si la función tiene una sola línea, me ahorro las llaves de apertura y cierre.
let saludar2 = (msg, nombre) => console.log(`${msg} ${nombre}`);
saludar2('¡Buenas tardes!', 'Miguel');

// Map
let elementos = ['Hidrógeno', 'Helio', 'Litio'];

elementos.map(function(ele) {
  console.log(ele);
});

let elementos2 = elementos.map(e => console.log(e));

// Clase en JavaScript Nativo
function Persona(nombre) {
  this.nombre = nombre;
}

var nuevaPersona = new Persona('Sebastián');
console.log('¡Hola!' + nuevaPersona.nombre);

// Clases en ES6
class Persona2 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let nuevaPersona2 = new Persona2();
nuevaPersona2.nombre = 'Pepe';
nuevaPersona2.edad = 32;
console.log(
  `Hola, mi nombre es ${nuevaPersona2.nombre} y tengo ${nuevaPersona2.edad} años.`
);

// Herencia
class Empleado extends Persona2 {
  // Método sueldo. Recibe el sueldo nuevo más el sueldo nuevo.
  // Consultar la edad.
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }
}
