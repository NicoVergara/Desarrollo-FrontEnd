// TRABAJO PRÁCTICO
class Persona3 {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Empleado2 extends Persona3 {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }

  sueldoAnual() {
    return this.sueldo * 12;
  }
}

let nuevoEmpleado = new Empleado2('Nicolás Vergara', 32, 1000);
console.log(`Empleado: ${nuevoEmpleado.nombre}
Edad: ${nuevoEmpleado.edad} años
Sueldo Anual: ${nuevoEmpleado.sueldoAnual()} pesos`);

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }
  set name(newName) {
    this._name = newName;
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}

class Programmer extends Person {
  constructor(name, programmingLanguage) {
    super(name);
    this._programmingLanguage = programmingLanguage;
  }

  get programmingLanguage() {
    return this._programmingLanguage;
  }
  set programmingLanguage(newprogrammingLanguage) {
    this._programmingLanguage = newprogrammingLanguage;
  }

  writeCode() {
    console.log(
      this._name + ' is coding in ' + this._programmingLanguage + '.'
    );
  }
}

let bob = new Person('Bob');
bob.walk();

let cory = new Programmer('Cory', 'JavaScript');
cory.walk();
cory.writeCode();
console.log(cory.name);
