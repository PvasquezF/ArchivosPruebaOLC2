function aritmeticas():void{
    const n1:number = 5**3;
    const n2:number = (n1+4**3)**3;
    
    if(n2 != 6751269){
        console.log('potencia mal :(');
        console.log('valor esperado: 6751269, se obtuvo: ' + n2);
    }
    else{
        let bien:string = "Potencia bien ;)";
        console.log(bien);
    }

    //+ - / *
    let n3:number = ((-(1+1+1+1+1-5-10)+(4*3-n1))+8200*3/10)*3;
    console.log(n3);

    if(n3 == -(-7071)){
        console.log('vas bien!!',"\n suma,\n resta,\n negacion \n multiplicacion bien");
    }
    else if(n3 != 7071){
        console.log('Como que algo falla');
    }

    let n4:number = n3/8/10;
    console.log(n4);

    if(n4 == 88.3875){
        console.log('Division bien');
    }
}

function relacionales():void{

    const n1:number = 8200;
    const n3:number = ((-(1+1+1+1+1-5-10)+(4*3-n1))+8200*3/10)*3;
    console.log(n3);

    let p1:boolean = (n3+15553) < -1600;
    if(p1){
        console.log('Menor que BIEN!!');
    }
    else{
        console.log('Menor que mal');
    }

    if(832 >= 987){
        console.log('Mayor igual MAL!!');
    }
    else{
        console.log('Mayor igual BIEN!!');
        if(6 <= 6){
            console.log('Menor igual BIEN!!');
        }
        else{
            console.log('Menor igual mal');
        }
    }

    const menor:boolean = 5.66 < 5.67;

    if(menor == true){
        console.log('Menor que BIEN!!');
        console.log('igualacion booleanos BIEN!!');
    }
}

function logicas(): void{
    const b1:boolean = true && (true || false && true);
    console.log(b1);

    if(!!b1){
        console.log('primer AND y OR bien!!');
        console.log("Negacion logica bien!!");
    }
    else{
        console.log('primer AND y OR mal');
        console.log("Negacion logica mal");
    }

    if((86 >= 8) && ((6 == 7) || (6 != 7))){
        console.log('segundo AND y OR BIEN!!');
    }
    else{
        console.log('segundo AND y OR mal');
    }
}

function StringFunction():void{
    const n1:number = 5**3;
    const n2:number = (n1+4**3)**3;
    let n3:number = ((-(1+1+1+1+1-5-10)+(4*3-n1))+8200*3/10)*3;
    let n4:number = n3/8/10;
    console.log(n2,n4);

    const str1:string = 'ComPi 2';

    console.log('FUNCIONES STRING:');
    console.log('Concatenacion:');
    console.log(str1.concat(' C3D - segundo Proyecto'));
    console.log('ToUpperCase:');
    console.log(str1.toUpperCase());
    console.log('ToLowerCase:');
    console.log((str1 + ' SI SALE').toLowerCase());
    console.log('length:');
    console.log(str1.length);

    console.log('Concatenacion + :');
    console.log('string + string');
    console.log(str1 + ' C3D - segundo Proyecto');
    console.log('string + numero entero');
    console.log('entero = ' + n2);
    console.log('string + numero decimal');
    console.log('decimal = ' + n4);
}

function main():void{
    console.log('=====ARITMETICAS====');
    aritmeticas();
    console.log('=====RELACIONALES====');
    relacionales();
    console.log('=====LOGICAS====');
    logicas();
    console.log('=====STRING====');
    StringFunction();
}

main();

/*
=====ARITMETICAS====
Potencia bien ;)
7071
vas bien!!,
 suma,
 resta,
 negacion
 multiplicacion bien
88.3875
Division bien
=====RELACIONALES====
-17154
Menor que BIEN!!
Mayor igual BIEN!!
Menor igual BIEN!!
Menor que BIEN!!
igualacion booleanos BIEN!!
=====LOGICAS====
true
primer AND y OR bien!!
Negacion logica bien!!
segundo AND y OR BIEN!!
=====STRING====
6751269,88.387500
FUNCIONES STRING:
Concatenacion:
ComPi 2 C3D - segundo Proyecto
ToUpperCase:
COMPI 2
ToLowerCase:
compi 2 si sale
length:
7
Concatenacion + :
string + string
ComPi 2 C3D - segundo Proyecto
string + numero entero
entero = 6751269
string + numero decimal
decimal = 88.3875
*/