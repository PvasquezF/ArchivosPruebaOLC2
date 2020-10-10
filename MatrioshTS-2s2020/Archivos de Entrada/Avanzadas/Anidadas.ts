// Las siguientes variables se definen en el ámbito global
let num1:number = 55;
let num2:number = 66;
let name_:string = 'Si sale compi2: ';

function addCuadrado(a:number,b:number):number {
  function cuadrado(x:number):number {
      return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
let a = addCuadrado(6,6); 
let b = addCuadrado(5,2); 
let c = addCuadrado(12,5);

console.log(a);
console.log(b);
console.log(c);

function A(x:number):void {
  function B(y:number):void {
      function C(z:number):void {
        console.log(x * y * z);
      }
      C(5);
  }
  B(2);
}
A(8);


function getScore(num1:number,num2:number):string {
    num1 = 200;
    num2 = 33;
  
  function add():string {
    return name_ + ' anotó ' + (num1 + num2);
  }
  
  return add();
}
console.log(getScore(num1,num2));


/**** Funcion Carro ***/

function person(edad : number, nombre : string, apellido : string, notas : number[]){

  function calcularPromedio() : number{
    let temp = 0;
      for(let i = 0; i < notas.length; i++){
        temp = temp + notas[i];
      }
    return temp / notas.length;
  }

  function getNombre() : string{
    return (`Mi nombre es ${nombre} ${apellido}`);
  }

  function esMayor() : boolean{
    return edad >= 18;
  }
  console.log('/*************************************/');
  console.log(`Hola\n ${getNombre()}\n Tengo ${edad} años.`);
  console.log(esMayor() ? "Soy mayor de edad" : "Soy menor de edad");
  console.log('Mi promedio es de : ' + calcularPromedio());
  console.log('/*************************************/');
}


person(17, 'Juan', 'Perez', [100, 98, 100, 99]);
person(21, 'Erick', 'Perez', [60, 61, 33, 100]);
person(33, 'Samael', 'Rojo', [80, 82, 84, 81]);

/*
  72
  29
  169
  80
  Si sale compi2:  anotó 233
  *************************************
  Hola
  Mi nombre es Juan Perez
  Tengo 18 años.
  Soy mayor de edad
  Mi promedio es de : 99.25
  *************************************
  *************************************
  Hola
  Mi nombre es Erick Perez
  Tengo 21 años.
  Soy mayor de edad
  Mi promedio es de : 63.5
  *************************************
  *************************************
  Hola
  Mi nombre es Samael Rojo
  Tengo 33 años.
  Soy mayor de edad
  Mi promedio es de : 81.75
  *************************************
*/