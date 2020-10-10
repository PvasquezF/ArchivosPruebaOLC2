/************ STACK *****************/
let stack : number[] = [0];
const MAXSIZE = 50;
const MINZIE = 0;

function apilar(num : number) : void{
    if(stack.length == MAXSIZE){
        console.log("Pila llena");
    }
    else{
        stack.push(num);
    }
}

function desapilar() : void{
    if(stack.length == MINZIE){
        console.log("Pila vacia");
        return;
    }
    else{
        stack.pop();
    }
}

function estadoPila() : boolean{
    return stack.length == MAXSIZE;
}

function vaciar() : void{
    stack = [];
}

for(let i = 1; i < 20 && !estadoPila(); i++){
    apilar(i);
}
console.log(stack.length); //20
console.log(stack);

for(let i = 0; i < 10; i++){
    desapilar();
}
console.log(stack.length); //10
console.log(stack);

for(let i = 10; i < 55; i++){
    apilar(i);
}

console.log(stack.length); //50
console.log(stack);
let temp = '';
for(let i of stack){
    temp = temp + '|' + i + '|' + stack[i] + '|\n';
}
console.log("Pos | Val \n",temp);

vaciar();
desapilar();


/***************** GRAFICAR TS*******************/
let x : number = 10;
let y : string = "Hola compi2";
let z : boolean = true;
let arreglo : number[] = [1,2,3,4,5];
let arreglo2 : boolean[] = [true, false];

type t = {
    nombre : string,
    edad : number
};

type x = {
    personaje : string,
    booleano : boolean
};

function funcion1() : void{
    graficar_ts(); //Grafica global
}

function funcion2(param1 : number, param2 : string, param3 : boolean) {
    graficar_ts(); //Grafica global + 3 parametros
}

function funcion3(){
    let x = 10;
    let y = 10;
    let z = 20;
    graficar_ts();//Grafica global + 3 variables
}

graficar_ts(); //Grafica sin hola

let hola = 20;
graficar_ts(); //Grafica con hola
funcion1();
funcion2(1, "2", true);
funcion3();


/*
20
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
10
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
Pila llena
Pila llena
Pila llena
Pila llena
Pila llena
50
[ 0, 1, 2, 3, 4, 5,  6,  7,  8,  9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,
  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48, 49 ]
Pos | Val 
|0|0|
|1|1|
|2|2|
|3|3|
|4|4|
|5|5|
|6|6|
|7|7|
|8|8|
|9|9|
|10|10|
|11|11|
|12|12|
|13|13|
|14|14|
|15|15|
|16|16|
|17|17|
|18|18|
|19|19|
|20|20|
|21|21|
|22|22|
|23|23|
|24|24|
|25|25|
|26|26|
|27|27|
|28|28|
|29|29|
|30|30|
|31|31|
|32|32|
|33|33|
|34|34|
|35|35|
|36|36|
|37|37|
|38|38|
|39|39|
|40|40|
|41|41|
|42|42|
|43|43|
|44|44|
|45|45|
|46|46|
|47|47|
|48|48|
|49|49|
Pila vacia
*/

/*
    5 tablas de simbolos
*/