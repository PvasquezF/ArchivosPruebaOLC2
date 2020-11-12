console.log("-------------------------------");
console.log("       AND CON BOOLEANOS       ");
console.log("-------------------------------");

if(true == true && false != false && true != true && false == false){
    console.log("R// AND con booleanos incorrecto");
}else{
    console.log("R// And con booleanos correcto");
}

console.log("-------------------------------");
console.log("         AND CON NUMBER        ");
console.log("-------------------------------");
if(1 == 1 && 10 != 100 && 30 != 20 && 1200 == 1200){
    console.log("R// AND con number correcto");
}else{
    console.log("R// And con number incorrecto");
}

console.log("-------------------------------");
console.log("         AND CON STRING        ");
console.log("-------------------------------");
if("Sistemas" != "Industrial" && "USAC" != "Mariano" && "Ingenieria" == "Ingenieria"){
    console.log("R// AND con string correcto");
}else{
    console.log("R// And con string incorrecto");
}

console.log("-------------------------------");
console.log("            AND MIXTO          ");
console.log("-------------------------------");

if(false == false && true == false && "Industrial" != "Sistemas" && 5*5 == 5**2){
    console.log("R// AND mixto incorrecto");
}
else{
    console.log("R// AND mixto correcto");
}


console.log("-------------------------------");
console.log("       OR CON BOOLEANOS       ");
console.log("-------------------------------");

if(true == true || false != false || true != true || false == false){
    console.log("R// OR con booleanos correcto");
}else{
    console.log("R// OR con booleanos incorrecto");
}

console.log("-------------------------------");
console.log("         OR CON NUMBER        ");
console.log("-------------------------------");
if(1 == 1 || 10 != 100 || 30 != 20 || 1200 == 1200){
    console.log("R// OR con number correcto");
}else{
    console.log("R// OR con number incorrecto");
}

console.log("-------------------------------");
console.log("         OR CON STRING        ");
console.log("-------------------------------");
if("Sistemas" != "Industrial" || "USAC" != "Mariano" || "Ingenieria" == "Ingenieria"){
    console.log("R// OR con string correcto");
}else{
    console.log("R// OR con string incorrecto");
}

console.log("-------------------------------");
console.log("           OR MIXTO           ");
console.log("-------------------------------");

if(false == false || true == false || "Industrial" != "Sistemas" || 5*5 == 5**2){
    console.log("R// OR mixto correcto");
}
else{
    console.log("R// OR mixto incorrecto");
}

console.log("------------------------------");
console.log("              NOT             ");
console.log("------------------------------");

if(!!!!!!!!!!!!!!!!!!!!true){
    console.log("R// NOT correcto");
}else{
    console.log("R// NOT incorrecto");
}

console.log("-------------------------------");
console.log("             MAYOR             ");
console.log("-------------------------------");

let num1:number = (5*5+2*3*3)/(5**5-2+3**2);
let num2:number = (5*5+2*3*3)/(5**5-2+3**1);
if(num1 > num2){
    console.log("R// Operacion Relacional mayor incorrecta");
}
else{
    console.log("R// Operacion Relacional mayor correcta");
}


console.log("-------------------------------");
console.log("             MENOR             ");
console.log("-------------------------------");

let num3:number = (5+5+10+6+9)/(5*2)**2;
let num4:number = 5**5+5**5;
if(num3 < num4){
    console.log("R// Operacion Relacional menor correcta");
}
else{
    console.log("R// Operacion Relacional menor incorrecta");
}

console.log("--------------------------------");
console.log("     OPERACIONES ARITMETICAS    ");
console.log("--------------------------------");


console.log("--------------------");
console.log("       SUMA         ");
console.log("--------------------");

console.log("----------------------------------------------------------------------");
console.log("       GLOBAL Y LOCAL DEBERIAN DE TENER LOS MISMOS RESULTADOS         ");
console.log("----------------------------------------------------------------------");

console.log("--------------------");
console.log("       GLOBAL       ");
console.log("--------------------");
let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
let numberstring:string = 100 + "Usac";
let stringnumber:string = "Usac" + 2500;
let stringstring:string = "Universidad" + " San Carlos";
let stringboolean:string = "Sistemas" + true;
let stringboolean2:string = "Industrial" + false;
let booleanstring:string = true + "Sistemas";
let booleanstring2:string = false + "Industrial";

console.log(numbernumber);
console.log(numberstring);
console.log(stringnumber);
console.log(stringstring);
console.log(stringboolean);
console.log(stringboolean2);
console.log(booleanstring);
console.log(booleanstring2);

function testambito():void{
    if(true){
        if(true){
            console.log("--------------------");
            console.log("       LOCAL         ");
            console.log("--------------------");
            let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
            let numberstring:string = 100 + "Usac";
            let stringnumber:string = "Usac" + 2500;
            let stringstring:string = "Universidad" + " San Carlos";
            let stringboolean:string = "Sistemas" + true;
            let stringboolean2:string = "Industrial" + false;
            let booleanstring:string = true + "Sistemas";
            let booleanstring2:string = false + "Industrial";

            console.log(numbernumber);
            console.log(numberstring);
            console.log(stringnumber);
            console.log(stringstring);
            console.log(stringboolean);
            console.log(stringboolean2);
            console.log(booleanstring);
            console.log(booleanstring2);
        }
    }
}

testambito();

console.log("--------------------");
console.log("       RESTA        ");
console.log("--------------------");
let resta:number = 50*50*10 - 90*99 - 5 - 20/2;
console.log(resta);
if(resta == 16075){
    console.log("R// Resta correcta");
}else{
    console.log("R// Resta inorrecta");
}

console.log("-----------------------------");
console.log("       MULTIPLICACION        ");
console.log("-----------------------------");
const mult:number = 50*2*3*10*5;
console.log(mult);
if(mult == 15000){
    console.log("R// mult correcta");
}else{
    console.log("R// mult incorrecta");
}

console.log("-----------------------------");
console.log("           DIVISION          ");
console.log("-----------------------------");
let division:number = ((1500/25)/2)/3;
console.log(division);
if(division == 10){
    console.log("R// division correcta");
}else{
    console.log("R// division incorrecta");
}

console.log("-----------------------------");
console.log("           POTENCIA          ");
console.log("-----------------------------");
let potencia:number = (((5**1)**2)**3)**0;
console.log(potencia);
if(potencia == 1){
    console.log("R// potencia correcta");
}else{
    console.log("R// potencia inorrecta");
}
