let relacionales: number = 0;
let logicas: number = 0;
//let aritmeticas: number = 0; //Descomentar despues de reportar el error
const aritmeticas: number = 0; //Comentar despues de reportar el error
aritmeticas = 100; //Si no reporta el error -0.5 en asignacion de variables


if (true == true && false != false && true != true && false == false) {
    console.log("R// AND con booleanos incorrecto");
} else {
    logicas = logicas + 0.5;
}

if (1 == 1 && 10 != 100 && 30 != 20 && 1200 == 1200) {
    logicas = logicas + 0.5;
} else {
    console.log("R// And con number incorrecto");
}

if ("Sistemas" != "Industrial" && "USAC" != "Mariano" && "Ingenieria" == "Ingenieria") {
    logicas = logicas + 0.5;
} else {
    console.log("R// And con string incorrecto");
}

if (false == false && true == false && "Industrial" != "Sistemas" && 5 * 5 == 5 ** 2) {
    console.log("R// AND mixto incorrecto");
}
else {
    logicas = logicas + 0.5;
}

if (true == true || false != false || true != true || false == false) {
    logicas = logicas + 0.5;
} else {
    console.log("R// OR con booleanos incorrecto");
}

if (1 == 1 || 10 != 100 || 30 != 20 || 1200 == 1200) {
    logicas = logicas + 0.5;
} else {
    console.log("R// OR con number incorrecto");
}

if ("Sistemas" != "Industrial" || "USAC" != "Mariano" || "Ingenieria" == "Ingenieria") {
    logicas = logicas + 0.5;
} else {
    console.log("R// OR con string incorrecto");
}

if (false == false || true == false || "Industrial" != "Sistemas" || 5 * 5 == 5 ** 2) {
    logicas++;
}
else {
    console.log("R// OR mixto incorrecto");
}

if (!!!!!!!!!!!!!!!!!!!!true) {
    logicas = logicas+0.5;
} else {
    console.log("R// NOT incorrecto");
}

let num1: number = (5 * 5 + 2 * 3 * 3) / (5 ** 5 - 2 + 3 ** 2);
let num2: number = (5 * 5 + 2 * 3 * 3) / (5 ** 5 - 2 + 3 ** 1);
let num3: number = (5 + 5 + 10 + 6 + 9) / (5 * 2) ** 2;
let num4: number = 5 ** 5 + 5 ** 5;

if ((num1 > num2 == false)) {
    if(num1+num2-num3-num4 != (num1+num2-num3-num4-1)){
        relacionales = 5;
    }
}
else {
    console.log("R// Operacion Relacional1 incorrecta");
}

let val1 : number = 0;
let val2 : number = 0;
let val3 : number = "Error"; //Si no reporta el error 0.5 en declaracion
//let val3 : number = 0;

val1 = 7 - (5 + 10 * (20 / 5 - 2 + 4 * (5 + 2 * 3)) - 8 * 3 ** 2) + 50 * (6 * 2); //214
val2 = 2 ** 4 - 9 * (8 - 6 * (3 ** 2 - 6 * 5 - 7 * (9 + 7 ** 3) + 10) - 5 ) + 8 * (36 / 6 - 5 * ( 2 * 3)); //-133853
val3 = (8 ** 3 * 36 ** 3 - 2 ** 5 + 2 ** 3 + 16 ** 0 + 2) / 3; //-7962617 
if((val1 - val2 + val3)*-1 == -8096684){
    aritmeticas = aritmeticas++ + 5;
}

console.log('Relacionales: ' + relacionales, '\nArimeticas: ' + aritmeticas, '\nLogicas: ' + logicas);

console.log('SENTENCIAS ESCAPE\n\t\"TAB\"\rSALTO DE LINEA');
console.log("TABLERO BINARIO CON TABULACIONES");
console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0\n", "1\t0\t1\t0\t1\t0\t1\t0\t1\t0\t1\n", "0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
/*
    Relaciones: 5
    Aritmeticas: 5
    Logicas: 5
*/