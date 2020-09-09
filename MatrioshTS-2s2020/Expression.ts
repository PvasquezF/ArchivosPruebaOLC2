let let1 = 1;
let punteo = 0;

Inicio();

 function  Inicio() {
    console.log("-----------------CALIFICACION-----------------");
    let let1 = 0;
    //Verificar ámbitos, se toma con prioridad la letiable local ante la global.
    if (let1 != 0)
    {
        console.log("No se toma con prioridad la letiable local ante la global");
        console.log("Perdiste 5 puntos :c");
    }
    else{
        punteo = punteo + 5;
    }

    //Sección de declaracion de letiables
    Declaracion();
    
    //seccion de manejo de ámbitos 2
    let amb1 = 5;
    Ambitos2();

    //Sección de expresiones aritméticas
    Aritmeticas();

    
    //Seccion de expresiones lógicas
    logicas();

    
    //Seccion de expresiones relacionales
    Relacionales();

    //punteo final
    console.log("punteo Final: "+punteo);
}

 function  Declaracion(){
    /*
        SALIDA ESPERADA:
            ========= Metodo Declaracion =========
            Voy a ganar Compiladores 2 :D
            ======================================
    
    */
    console.log("========= Metodo Declaracion =========");
    let n1 = 2;
    let n2 = 2;
    let n3 = 2;
    let n4 = 2;
    let str1 = "Voy a ganar Compiladore";
    let str2 = "Voy a ganar Compiladore";
    let str3 = "Voy a ganar Compiladore";
    let str4 = "Voy a ganar Compiladore";
    let db1 = 0.0;
    let db2 = 0.0;
    let db3 = 0.0;
    let db4 = 0.0;
    let chr1 = 's';
    let chr2 = 's';
    let chr3 = 's';
    let chr4 = "s";
    //if n modificar la asignación
    if (db1 == db4){
        console.log(str4 + chr4 +" " +n4+" :D");
    }else {
        console.log("Problemas en el metodo declaracion :(");
    }
    console.log("======================================");
    punteo = punteo + 5;
}

 function  Ambitos2(){
    //debería lanzar un error, cualquiera
    //comentar luego de que lanze el error
    console.log("========= Error Ambitos ==============");
    console.log("Debería lanzar error: "+amb1);
    let amb1 = "Desde ambito2";
    console.log("======================================");
    console.log("================ Nice ================");
    punteo = punteo + 5;
    console.log("Sin error: "+amb1);
    console.log("======================================");

}

 function  Aritmeticas(){
    //suma de lets con caracteres
    /*
        SALIDA ESPERADA
    ==============Aritmeticas=============
    Hola COMPI
    El valor de  n1 = 52.1
    El valor de n3 = 70.0
    -Operaciones Basicas: valor esperado:   a)62   b)0   c)-19   d)256   resultados>
    a) 62
    b) 0
    c) -19
    d) 256
    ======================================
    */
    console.log("==============Aritmeticas=============");
    let art1 = "Hola "+"C"+""+"O"+""+"M"+""+"P"+""+"I";
    console.log(art1);
    if (art1=="Hola COMPI"){
        punteo = punteo + 3;
    }else {
        console.log("Perdiste 3 puntos en suma de let y let :c");
    }

    let n1 = 0.0 + 1 + 1 + 1 + 0.1 + 49;
    console.log("El valor de  n1 = "+n1);
    if (n1 == 52.1){
        punteo = punteo + 5;
    }else {
        console.log("Perdiste 5 puntos en suma de enteros booleanos y caracteres :c");
    }

    let n4 = (5750 * 2) - 11800 + 1.0;
    let n3 = (((3 * 3) + 4) - 80 + 40.00 * 2 + 358.50 - (29 / 14.50)) - (0.50) + n4;
    console.log("El valor de n3 = "+n3);
    if (n3 == 70)
    {
        punteo = punteo + 3;
    }
    else 
    {
        console.log("Perdiste 3 puntos :c ");
    }
    
    operacionesBasicas();
    operacionesAvanzadas();
    console.log("======================================");
    
}

 function  operacionesBasicas(){
    console.log("Operaciones Aritmeticas 1: valor esperado:  \na)62   \nb)0   \nc)-19   \nd)256   \nresultados>");
    let a = (20-10+8/2*3+10-10-10+50);
    let b = (50/50*50+50-100+100-100);
    let c = (100/20*9-78+6-7+8-7+7*1*2*3/3);
    let d = (2 **(20/5*2));
    console.log("a) " +a);
    console.log("b) " +b);
    console.log("c) " +c);
    console.log("d) " +d);
    if (a==62 && b==0 && c == -19 && d ==256){
        console.log("Operaciones aritmeticas 1 bien :D");
        punteo = punteo + 5;
    }else {
        console.log("Error en las operaciones basicas :(");
    }
}

 function  operacionesAvanzadas(){
    let aritmetica1 = 2;
    let aritmetica2 = -10;
    console.log("Operaciones Aritmeticas 2: valor esperado> -20  41, resultado>");
    let aritmetica3 = aritmetica2*aritmetica1;
    console.log(aritmetica3+"");
    aritmetica1 = aritmetica3/aritmetica1+50 **2/50+50*2-100+100/100-0;
    console.log(aritmetica1+"");
    if (aritmetica3 == -20 && aritmetica1 == 41){
        console.log("Operaciones aritmeticas 2 bien :D");
        punteo = punteo + 5;
    }else {
        console.log("Error Operaciones Aritmeticas :c alv :c");
    }
}

//FN5HU-3uykL

 function  logicas(){
     console.log("==============logicas1=============");
    if (!!!!!!!!!!!!!!!!!!!!!!true){
        punteo = punteo + 1;
        console.log("Bien primera condicion :)");
    }else {
        console.log("Perdiste 1 punto :c");
    }

    if (true && true || false && false && false || !true){
        punteo = punteo + 1;
        console.log("Bien segunda condicion:)");
    }else {
        console.log("Perdiste 1 punto :c");
    }
    console.log("======================================");
    logicas2();
}

 function  logicas2(){
    let n0 = 16;
         console.log("==============logicas2=============");

    if (!(!(n0 == 16 && false == true) && !(true))){
            console.log("Not y Ands Correctos");
                        punteo = punteo +3;

    }else {
                console.log("No funcionan nots y ands :(");
        }
    let n1 = n0 /16;
    n1 = n1 + 1;
        let condicion1 = n1 !=2; //esto es false
        let aritmetica1 = n0/16 + 0; // aritmetica1 = 0
        let condicion2 = aritmetica1 == n1; //false
        let condicion3 = !true; //false
        
    if (!(!(!(condicion1||condicion2) || condicion3 ))){
        console.log("Nots y Ors correectos");
                punteo = punteo + 3;
    }else {
            console.log("No Funciona nots y ands :(");
        }
            console.log("======================================");
}

 function  Relacionales(){
    let n0 = 34;
    let n1 = 16;
    
    relaciones1(n0);
    relaciones2(n1);
}


 function  relaciones1(salida:number)
{
        console.log("==============relacionales1=============");
        let n0 = salida + 0.0;
        if (n0 < 34.44)
            {
                salida = salida+15;
                if (salida > 44)
                    {
                        salida++;
                    }
            }
            else {
                salida = 1;
            }
        
        if (salida != 1)
            {
                if (salida == 50)
                    {
                        console.log("salida Correcta Relacionales 1!");
                        punteo = punteo + 5;
                    }
                    else {
                        console.log("salida incorrecta!!");
                    }
            }
            else {
                console.log("salida incorrecta!!");
            }
        console.log("======================================");
}

 function  relaciones2(n0:number){
            console.log("vas bien, animo :D");
            console.log("============Relacionales2=============");

            if (10-15 >= 0 && 44.44 == 44.44)
            {
                console.log("salida incorrecta primer if relacionales2!!");
            }
            else {
                if (15+8 == 22-10+5*3-4 && 13*0>-1)
                    {
                        if (10.0 != 11.0-1.01 )
                            {
                                console.log("salida CORRECTA en relacionales2!!");
                                punteo = punteo + 5;
                            }
                            else {
                                console.log("salida incorrecta segundo if relacionales 2!!");
                            }
                    }
                    else {
                        if (1 == 1)
                            {
                                console.log("salida incorrecta relacionales 2 3er if !!");
                            }
                            else {
                                console.log("salida incorrecta relacionales 2 Sino3er if !!");
                            }
                    }
            }
        console.log("======================================");
        FactorialIterativo(7);
}

function  FactorialIterativo(n2:number){
                     console.log("==============for Calificar Ciclos=============");

    let numeroFactorial = n2;
    while(numeroFactorial > -1){
        mostrarFactorial(numeroFactorial);
        numeroFactorial--;
    }
        SentenciasAnidadas();
        console.log("======================================");

}

 function  mostrarFactorial(n2:number){
    let fact = 1;
    let str= "El factorial de: "+n2 +" = ";
    if (n2 !=0){
        for(let i=n2; i >0; i--){
            fact = fact * i;
            str = str + i;
            if (i > 1){
                str = str + " * ";

            }else {
                str = str + " = ";
            }
        }
    }
        str = str + fact+ ";";
    console.log(str);
}


 function  figura1(n: number){
    
    let letFigura = "";
    for (let i = -3*n/2; i <= n; i++) {
        letFigura = "";
            for (let j = -3*n/2; j <= 3*n/2; j++) {

                let absolutoi = i;
                let absolutoj = j;
                if (i <0){
                    absolutoi = i*-1;
                }
                if (j < 0){
                    absolutoj = j*-1;
                }
                if ((absolutoi + absolutoj < n)
                    || ((-n/2-i) * (-n/2-i) + ( n/2-j) * ( n/2-j) <= n*n/2)
                    || ((-n/2-i) * (-n/2-i) + (-n/2-j) * (-n/2-j) <= n*n/2)) {
                    letFigura = letFigura + "* ";
                }
                else{
                    letFigura = letFigura + ". ";
                }
            }
            console.log(letFigura);
        }
    console.log("if la figura es un corazon +10 <3");
}

 function  figura2(){
    let letFigura = "";
     let c = "* ";
        let b = "  ";
        let altura = 10;
        let ancho = 1;
        for (let i = 0; i < altura/4; i++){
            for (let k = 0; k < altura - i; k++){
                letFigura = letFigura+b;
            }
            for (let j = 0; j < i*2 + ancho; j++){
                letFigura = letFigura + c;
            }
            
            console.log(letFigura);
            letFigura ="";
        }
         letFigura = "";
         for(let i = 0; i < altura/4; i++){
            for(let k = 0; k < (altura - i) - 2; k++){
                letFigura = letFigura + b;
            }
            for(let j = 0; j < i*2 + 5; j++){
                letFigura = letFigura + c;
            }
            
            console.log(letFigura);
            letFigura = "";
        }
         letFigura = "";
        for(let i = 0; i < altura/4; i++){
            for(let k = 0; k < (altura - i) - 4; k++){
                letFigura = letFigura + b;
            }
            for(let j = 0; j < i*2 + 9; j++){
                letFigura = letFigura +c;
            }
            
            console.log(letFigura);
            letFigura = "";
        }
        
        letFigura ="";
        for(let i = 0; i < altura/4; i++){
            for(let k = 0; k < (altura - i) - 6; k++){
                letFigura = letFigura + b;
            }
            for(let j = 0; j < i*2 + 13; j++){
                letFigura = letFigura + c;
            }
            
            console.log(letFigura);
            letFigura = "";
        }
        letFigura = "";
        for(let i = 0; i < altura/4; i++){
            for(let k = 0; k < altura -2; k++){
                letFigura = letFigura + b;
            }
            for(let j = 0; j < 5; j++){
                letFigura = letFigura + c;
            }
            
            console.log(letFigura);
            letFigura = "";
        }
        
            console.log("if la figura es un Arbol +10 <3");

       }

 function  SentenciasAnidadas(){
    let numero1 = 0;
    do{
    switch(numero1){
        case 0:
            figura0(8);
            break;
        case 1:
            figura1(10);
            break;
        case 2:
            figura2();
            break;
        default:
            console.log("Esto se va a console.log 2 veces :3");
            
    }
    numero1 = numero1 + 1;
    }while(numero1 <5);
}

 function  figura0(numero:number){
    let i = 0;
    while(i < numero){
        let j = 0;
        let numeroMostrar = 1;
        let unaFila = "";
        while(j <= i){
            unaFila = unaFila + " " + numeroMostrar;
            numeroMostrar  = numeroMostrar + 1;
            j = j + 1;
        }
        console.log(unaFila);
        i = i + 1;
    }
    console.log("if la figura es un triangulo de numeros + 5 :3");
}
