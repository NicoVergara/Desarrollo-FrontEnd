// TRABAJO PRÁCTICO
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
    this.aumento = 10000;
  }

  aumentoSueldo(aumento) {
    return (this.sueldo += this.aumento);
  }

  sueldoAnual() {
    return this.sueldo * 12;
  }
}

let nuevoEmpleado = new Empleado('Nicolás Vergara', 32, 20000);
console.log(`Empleado: ${nuevoEmpleado.nombre}
Edad: ${nuevoEmpleado.edad} años
Aumento de Sueldo: ${nuevoEmpleado.aumentoSueldo()}
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
