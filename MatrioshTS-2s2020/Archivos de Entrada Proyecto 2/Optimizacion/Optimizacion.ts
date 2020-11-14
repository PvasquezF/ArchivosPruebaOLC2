function funcion1() : void{
    while(true){
        console.log("hola mundo");
        break;
        console.log("Codigo inalcanzable");
    }
    console.log("adios");
}

let operacion : number = (1 + 0) + (0 / 5) + ( 0 * 3) - (1 - 0) + (0 - 1) + (3 * 2) - (3 * 1) + (4 / 1);
let operacion2 = operacion + 0;
operacion = operacion2;

if(1 == 1){
    console.log(1);
}
else if( 1 != 0){
    console.log(2);
}
else{
    console.log(3);
}

if(100 != 100){
    console.log(4);
}
else{
    console.log(5);
}

if(1 == 2 || 3 == 5 || 1 == 1){
    console.log("hola mundo");
}
else{
    console.log("Adios mundo");
}
funcion1();

/*
1 
5 
"hola mundo" 
"hola mundo" 
"adios" 
*/