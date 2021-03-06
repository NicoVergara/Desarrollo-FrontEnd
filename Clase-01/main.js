// 1. Nivelación
// Closures
// Local y global scope
// Hoising
// Event Loop
// This
// Objetos

// 2. Let y Const
// Let: a diferencia de VAR es block scoped, si está referenciada dentro de {} no puede ser llamada desde afuera.
// Con LET podemos controlar el ámbito de las variables.
if (true) {
  let name = 'Nicolas';
  console.log(name);
}

let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
console.log('valor final de i es:', i);

// Let en funciones.
function ejemplo1() {
  let color = 'rojo';

  if (true) {
    let color = 'amarillo';
    console.log('subBloque 1 color:', color);
  }

  console.log('ejemplo 1 color:', color);
}
ejemplo1();

// Const: variables cuyo valor no varía.
var name = 'Juan';
console.log('Mi nombre es: ', name);

name = 'Pablo';

console.log('Mi nuevo nombre es: ', name);

// Objetos
const obj = { frutas: { manzana: { color: 'rojo' } } };
console.log('El color de la fruta es: ', obj.frutas.manzana.color);

obj.frutas.manzana.color = 'verde';

console.log('Mi nuevo color de fruta es: ', obj.frutas.manzana.color);

// 3. Arrow Function: es una nueva sintaxis para escribir funciones. No crean un nuevo clousure, en otras palabras
// THIS hace referencia a la función más próxima hacia arriba en la jerarquía.
function add(a, b) {
  return a + b;
}
console.log('Suma sin arrow function: ', add(5, 3));

var add2 = (x, y) => x + y;
console.log('Suma con arrow function', add2(5, 3));

function saludar(msg, nombre) {
  console.log(msg + ' ' + nombre);
}
saludar('¡Hola!', 'Nicolás');

// Programaciòn Funcional: Map utilizando Arrow Function.
let elementos = ['Hidrógeno', 'Helio', 'Litio'];

elementos.map(function(ele) {
  console.log(ele);
});

let elementos2 = elementos.map(e => console.log(e));

// Si la función tiene una sola línea, me ahorro las llaves de apertura y cierre.
let saludar2 = (msg, nombre) => console.log(`${msg} ${nombre}`);
saludar2('¡Buenas tardes!', 'Miguel');

// 4. String Templates: permite el uso de expresiones incrustadas, se puede utilizar cadenas de texto de más de una línea.
// También ofrece funcionalidades de interpolación de cadenas de textos.
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

// 5. Programación Funcional:

// 6. Array Methods
// Método Find.
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

// 7. Clases y Herencia:
// Clase en JavaScript Nativo: no existía 'class' para declarar las clases.
function Persona(nombre) {
  this.nombre = nombre;
}

var nuevaPersona = new Persona('Sebastián');
console.log('¡Hola!' + nuevaPersona.nombre);

// Clases en ES6: se declaran utilizando la palabra reservada 'class', seguida del nombre de la clase que estmamos creando.
// Constructor de Persona en ES6.
class Persona2 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Herencia: mecanismo por el cual una clase se construye a partir de otra.
class Empleado extends Persona2 {
  constructor(nombre, edad, sexo) {
    super(nombre, edad);
    this.sexo = sexo;
  }
}

var nuevaPersona2 = new Persona2('Nicolás', 28);
console.log('¡Hola!' + nuevaPersona2.nombre);

// 8. Promises: son objetos que tienen dos métodos, resolv y reject, y se utiliza para realizar tareas asincrónicas.
let promesa = new Promise((resolve, reject) => {
  if (false) {
    resolve('¡éxito!');
  } else {
    reject('error');
  }
});

// THEN (true)
// CATCH (false)
promesa
  .then(msg => {
    console.log(msg);
  })
  .catch(msg => {
    console.log(msg);
  });

// FETCH
function obtenerTexto(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        reject(
          'No se ha podido acceder a ese recurso. Status: ' + response.status
        );
      })
      .then(texto => resolve(texto))
      .catch(err => reject(err));
  });
}

obtenerTexto('test.txt')
  .then(texto => console.log(texto))
  .catch(err => console.log('ERROR', err));

// Recorrer el html y cambiar el style de la clase 'ACTIVE'.
let lista = document.getElementsByTagName('li');
Array.from(lista).find(function(node) {
  if (node.className == 'active') {
    console.log(node.innerHTML);
    node.style.color = 'red';
  }
});
