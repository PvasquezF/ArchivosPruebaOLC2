/**
* Archivo de pruebas, OLC2 1s2020 🌵🎍🌵🎍🌵🎍
* Proyecto 2 - J# 🖤❤️🖤❤️🖤❤️
* Covid-19 - Dia -20 de cuarentena 🦠🦠🦠🦠🦠🦠
* Archivo de Alba 🎓🎓🎓🎉🎉🎉
* Fuente: https://www.facebook.com/albita.chinchilla/ 
* 🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮
*/



// Archivo de alba :D
var var1 = 1;
var punteo = 0;

void principal() {
    print("---------------------------------- EVALUANDO ARCHIVO DE ALBA --------------------------------------------------")
    print("-----------------CALIFICACION-----------------");
    var1 = 0;
    // Verificar ámbitos, se toma con prioridad la variable local ante la global.
    if (var1 != 0)
    {
        print("No se toma con prioridad la variable local ante la global");
        print("Perdiste 5 puntos :c");
    }
    else{
        punteo = punteo + 5;
    }

    // Sección de declaracion de variables
    Declaracion();
    
    // seccion de manejo de ámbitos 2
    amb1 = 5;
    Ambitos2();

    // Sección de expresiones aritméticas
    Aritmeticas();

    // Seccion de expresiones lógicas
    Logicas();

    
    // Seccion de expresiones relacionales
    Relacionales();

    // punteo final
    print("punteo Final: "+punteo);
}

void Declaracion(){
    /**
     *   SALIDA ESPERADA:
     *       ========= Metodo Declaracion =========
     *       Voy a ganar Compiladores 2 :D
     *       ======================================
     *
    */
    print("========= Metodo Declaracion =========");
    var n4 = 2;
    var str4 = "Voy a ganar Compiladore";
    var db4 = 0.0;
    var db1 = db4;
    var chr4 = "s";
    // if n modificar la asignación
    if (db1 == db4){
        print(str4 + chr4 +" " +n4+" :D");
    }else {
        print("Problemas en el metodo declaracion :(");
    }
    print("======================================");
    punteo = punteo + 5;
}

void Ambitos2(){
    // debería lanzar un error, cualquiera
    // comentar luego de que lanze el error
    print("========= Error Ambitos ==============");
    print("Debería lanzar error: "+amb1);
    var amb1 = "Desde ambito2";
    print("======================================");
    print("================ Nice ================");
    punteo = punteo + 5;
    print("Sin error: "+amb1);
    print("======================================");
}

void Aritmeticas(){
    // suma de strings con caracteres
    /**
    *    SALIDA ESPERADA
    *    ==============Aritmeticas=============
    *    Hola COMPI
    *    El valor de  n1 = 52.1
    *    El valor de n3 = 70.0
    *    -Operaciones Basicas: valor esperado:   a)62   b)0   c)-19   d)256   resultados>
    *    a) 62
    *    b) 0
    *    c) -19
    *    d) 256
    *    ======================================
    */
    print("==============Aritmeticas=============");
    var art1 = "Hola "+"C"+""+"O"+""+"M"+""+"P"+""+"I";
    print(art1);
    if (art1=="Hola COMPI"){
        punteo = punteo + 3;
    }else {
        print("Perdiste 3 puntos en suma de y :c");
    }

    var n1 = 0.0 + 1 + 1 + 1 + 0.1 + 49;
    print("El valor de  n1 = "+n1);
    if (n1 == 52.1){
        punteo = punteo + 5;
    }else {
        print("Perdiste 5 puntos en suma de enteros booleanos y caracteres :c");
    }

    var n4 = (5750 * 2) - 11800 + 1.0;
    var n3 = (((3 * 3) + 4) - 80 + 40.00 * 2 + 358.50 - (29 / 14.50)) - (0.50) + n4;
    print("El valor de n3 = "+n3);
    if (n3 == 70 || n3 == 70.0)
    {
        punteo = punteo + 3;
    }
    else 
    {
        print("Perdiste 3 puntos :c ");
    }
    
    operacionesBasicas();
    operacionesAvanzadas();
    print("======================================");
    
}

void operacionesBasicas(){
    print("Operaciones Aritmeticas 1: valor esperado:  \na)62   \nb)0   \nc)-19   \nd)256   \nresultados>");
    var a = (20-10+8/2*3+10-10-10+50);
    var b = (50/50*50+50-100+100-100);
    var c = (100/20*9-78+6-7+8-7+7*1*2*3/3);
    var d = (2^(20/5*2));
    print("a) " +a);
    print("b) " +b);
    print("c) " +c);
    print("d) " +d);
    if (a==62 && b==0 && c == -19 && d ==256){
        print("Operaciones aritmeticas 1 bien :D");
        punteo = punteo + 5;
    }else {
        print("Error en las operaciones basicas :(");
    }
}

void operacionesAvanzadas(){
    var aritmetica1 = 2;
    var aritmetica2 = -10;
    print("Operaciones Aritmeticas 2: valor esperado> -20  41, resultado>");
    
    var aritmetica3 = aritmetica2*aritmetica1;
    print(aritmetica3+"");
    
    aritmetica1 = aritmetica3/aritmetica1+50^2/50+50*2-100+100/100-0;
    print(aritmetica1+"");
    
    if (aritmetica3 == -20 && aritmetica1 == 41){
        print("Operaciones aritmeticas 2 bien :D");
        punteo = punteo + 5;
    }else {
        print("Error Operaciones Aritmeticas :c alv :c");
    }
}

// FN5HU-3uykL

void Logicas(){
    print("==============Logicas1=============");
    if (!!!!!!!!!!!!!!!!!!!!!!true){
        punteo = punteo + 1;
        print("Bien primera condicion :)");
    }else {
        print("Perdiste 1 punto :c");
    }

    if (true && true || false && false && false || !true){
        punteo = punteo + 1;
        print("Bien segunda condicion:)");
    }else {
        print("Perdiste 1 punto :c");
    }
    print("======================================");
    Logicas2();
}

void Logicas2(){
    var n0 = 16;
    print("==============Logicas2=============");

    if (!(!(n0 == 16 && false==true) && !(true))){
        print("Not y Ands Correctos");
        punteo = punteo +3;
    }else {
        print("No funcionan nots y ands :(");
    }

    var n1 = n0 / 16;
    if(true){
        n1 = n1 + 1;
    }else{
        n1 = n1 + 0;
    }
    var condicion1 = n1 !=2; //esto es false
    var aritmetica1 = n0/16;
    if(((((!(true|false)))))){
        aritmetica1 = aritmetica1 + 1;
    }else{
        aritmetica1 = aritmetica1 + 0;
    }
    var condicion2 = aritmetica1 == n1; //false
    var condicion3 = !true; //false
        
    if (!(!(!(condicion1||condicion2) || condicion3 ))){
        print("Nots y Ors correectos");
        punteo = punteo + 3;
    }else {
        print("No Funciona nots y ands :(");
    }
    print("======================================");
}

void Relacionales(){
    var n0 = 34;
    var n1 = 16;
    
    relaciones1(n0);
    relaciones2(n1);
}


void relaciones1(integer salida)
{
        print("==============relacionales1=============");
        var n0 = salida + 0.0;
        if (n0 < 34.44)
            {
                salida = salida+15;
                if (salida > 44)
                    {
                        salida = salida +1
                    }
            }
            else {
                salida = 1;
            }
        
        if (salida != 1)
            {
                if (salida == 50)
                    {
                        print("salida Correcta Relacionales 1!");
                        punteo = punteo + 5;
                    }
                    else {
                        print("salida incorrecta!!");
                    }
            }
            else {
                print("salida incorrecta!!");
            }
        print("======================================");
}

void relaciones2(integer n0){
            print("vas bien, animo :D");
            print("============Relacionales2=============");

            if (10-15 >= 0 && 44.44 == 44.44)
            {
                print("salida incorrecta primer if relacionales2!!");
            }
            else {
                if (15+8 == 22-10+5*3-4 && 13*0>-1)
                    {
                        if (10.0 != 11.0-1.01 )
                            {
                                print("salida CORRECTA en relacionales2!!");
                                punteo = punteo + 5;
                            }
                            else {
                                print("salida incorrecta segundo if relacionales 2!!");
                            }
                    }
                    else {
                        if (1 == 1)
                            {
                                print("salida incorrecta relacionales 2 3er if !!");
                            }
                            else {
                                print("salida incorrecta relacionales 2 Sino3er if !!");
                            }
                    }
            }
        print("======================================");
    SentenciasAnidadas();
}

void figura1(integer n){
    var StringFigura = "";
    var i = -3*n/2
    while (i < n+1) {
        StringFigura = "";
        var j = -3*n/2
        while (j < ((3*n/2)+1)) {
            var absolutoi = i;
            var absolutoj = j;
            if (i <0){
                absolutoi = i*-1;
            }
            if (j < 0){
                absolutoj = j*-1;
            }
            if ((absolutoi + absolutoj < n)
                || ((-n/2-i) * (-n/2-i) + ( n/2-j) * ( n/2-j) <= n*n/2)
                || ((-n/2-i) * (-n/2-i) + (-n/2-j) * (-n/2-j) <= n*n/2)) {
                StringFigura = StringFigura + "* ";
            }
            else{
                StringFigura = StringFigura + ". ";
            }
            j = j + 1;
        }
        print(StringFigura);
        i = i + 1;
    }
    print("if la figura es un corazon +10 <3");
}

void figura2(){
    var StringFigura = "";
    var c = "* ";
    var b = "  ";
    var altura = 10;
    var ancho = 1;
    var i = 0;
    while (i < (altura/4)){
        var k = 0
        var j = 0
        while (k < (altura - i)){
            StringFigura = StringFigura+b
            k = k+1;
        }
        while (j < (i*2 + ancho)){
            StringFigura = StringFigura + c;
            j = j+1;
        }
        
        print(StringFigura);
        StringFigura ="";
        i = i+1
    }
    StringFigura = "";
    i = 0
    while(i < (altura/4)){
        var k = 0
        var j = 0
        while(k < ((altura - i) - 2)){
            StringFigura = StringFigura + b;
            k = k+1
        }
        while(j < (i*2 + 5)){
            StringFigura = StringFigura + c;
            j = j+1
        }
        
        print(StringFigura);
        StringFigura = "";
        i = i+1;
    }
    
    StringFigura = "";
    i = 0;
    while(i < (altura/4)){
        var k = 0
        var j = 0;
        while(k < ((altura - i) - 4)){
            StringFigura = StringFigura + b;
            k = k+1;
        }
        while(j < (i*2 + 9)){
            StringFigura = StringFigura +c;
            j = j+1;
        }
        
        print(StringFigura);
        StringFigura = "";
        i = i+1
    }
        
    var StringFigura ="";
    var i = 0;
    while(i < (altura/4)){
        var k = 0;
        while(k < ((altura - i) - 6)){
            StringFigura = StringFigura + b;
            k = k+1
        }
        var j = 0
        while(j < (i*2 + 13)){
            StringFigura = StringFigura + c;
            j = j+1;
        }
        
        print(StringFigura);
        StringFigura = "";
        i = i+1;
    }
    
    StringFigura = "";
    i = 0;
    while(i < (altura/4)){
        var k = 0;
        var j = 0
        while(k < (altura -2)){
            StringFigura = StringFigura + b;
            k = k+1;
        }
        while(j < (5)){
            StringFigura = StringFigura + c;
            j = j+1
        }
        
        print(StringFigura);
        StringFigura = "";
        i = i+1;
    }
        
    print("if la figura es un Arbol +10 <3");
}

void SentenciasAnidadas(){
    var numero1 = 0;
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
            print("Esto se va a print 2 veces :3");
    }
    numero1 = numero1 + 1;
    }while(numero1 <5);
}

void figura0(integer numero){
    var i = 0;
    while(i < numero){
        var j = 0;
        var numeroMostrar = 1;
        var unaFila = "";
        while(j <= i){
            unaFila = unaFila + " " + numeroMostrar;
            numeroMostrar  = numeroMostrar + 1;
            j = j + 1;
        }
        print(unaFila);
        i = i + 1;
    }
}

// fin
