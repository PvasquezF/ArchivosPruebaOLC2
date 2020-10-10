let x = 1;
let y = 1;
console.log("---------------------------------");
console.log("Tablas de multiplicar con While");
console.log("---------------------------------");
while (x <= 10) {
    while (y <= 10) {
        console.log(x + "x" + y + "=" + x * y);
        y++;
    }
    console.log("-----------------------------");
    x++;
    y = 1;
}

// ------------------------------------------------------------------------
console.log("---------------------------------");
console.log("  Tablas de multiplicar con For");
console.log("---------------------------------");

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + i * j);
    }
    console.log("--------------------------");
}

/**** Factorial Iterativo ****/
const iteraciones = 10;
let temporal = 0;

//Error, una constante no puede cambiar su valor
iteraciones = 10000; 

do{
    let numero = temporal;
    if(numero <= 0){
        console.log(`Factorial de ${temporal} = ${0}`);
        temporal++;
        continue;
    }
    let factorial = 1;
    while(numero > 1){
        factorial = factorial * numero;
        numero--;
    }
    console.log(`Factorial de ${temporal} = ${factorial}`);
    temporal++;
}while(temporal <= iteraciones);


const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

for(let i of dias){
    switch(i){
        case "Lunes":
            console.log(1);
        case "Martes":
            console.log(2);
        case "Miercoles":
            console.log(3);
        case "Jueves":
            console.log(4);
        case "Viernes":
            console.log(5);
            console.log("Weekday");
            break;
        default:
            console.log("Weekend");       
    }
}
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
