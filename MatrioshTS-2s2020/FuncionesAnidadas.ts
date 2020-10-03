function addCuadrado(a:number,b:number):number {
    function cuadrado(x:number):number {
       return x * x;
    }
    return cuadrado(a) + cuadrado(b);
 }
 let a = addCuadrado(2,3); // retorna 13
 let b = addCuadrado(3,4); // retorna 25
 let c = addCuadrado(4,5); // retorna 41
 
 console.log(a)
 console.log(b)
 console.log(c)


 function A(x:number):void {
    function B(y:number):void {
       function C(z:number):void {
          console.log(x + y + z);
       }
       C(3);
    }
    B(2);
 }
 A(1); // 6 (1 + 2 + 3)

 

// Las siguientes variables se definen en el ámbito global
let num1:number = 20;
let num2:number = 3;
let name:string = 'Chamahk';

// Esta función está definida en el ámbito global
function multiply():number {
  return num1 * num2;
}

console.log(multiply()); // Devuelve 60

// Un ejemplo de función anidada
function getScore(num1:number,num2:number):string {
    num1 = 2;
    num2 = 3;
  
  function add():string {
    return name + ' anotó ' + (num1 + num2);
  }
  
  return add();
}

console.log(getScore(num1,num2)); // Devuelve "Chamahk anotó 5"


function loop(x:number):void {
    console.log(x);
  if (x >= 10){ // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;
  }
  // hacer cosas
  loop(x + 1); // la llamada recursiva
}
loop(0);