function forIn_forOf(): void {
    let x: number[] = [0, 1, 4, 5, 6, 7, 8, 9];
    let y: number[] = new Array(15 - 5);
    console.log("-------Operaciones con length-------");
    console.log(x.length);//5
    console.log(y.length);//10
    console.log(x.length + y.length);
    console.log(x.length - y.length);
    console.log(x.length * y.length);
    console.log(x.length / y.length);
    console.log(x.length ** y.length);
    console.log(x.length % y.length);
    console.log("INICIA FOR IN");
    let str: string = "";
    for (let i in x) {
        str = str + i + " ";
    } console.log(str);

    /********************************************************************/
    let x2: number[] = [0, 1, 4, 5, 6];
    let auxiliares: string[][] = [["Erik", "Pavel"], ["Maeda", "Christian"]];
    // y : number[][] = [[6,9],[7,8]];
    console.log(" FOR IN UNA DIMENSION NUMEROS ");
    for (let i in x2) {
        console.log(i);
    }

    console.log(" FOR OF UNA DIMENSION NUMEROS ");
    for (let i of x2) {
        console.log(i);
    }

    console.log(" FOR IN AUXILIARES[0] ");
    for (let i in auxiliares[0]) {
        console.log(i);
    }

    console.log(" FOR OF DOS DIMENSION AUXILIARES[0] ");
    for (let i of auxiliares[0]) {
        console.log(i);
    }

    console.log(" FOR OF DOS DIMENSION AUXILIARES[1] ");
    for (let i of auxiliares[1]) {
        console.log(i);
    }
}

function sentencias(param : boolean): void {
    if(!param){
        return;
    }
    console.log("------------- Ciclos -------------------");
    let iter: number = 0;
    let str2: string = "DO WHILE\n";
    do {
        iter++;
        if (iter > 0 && iter <= 5) {
            str2 = str2 + "\tCINCO VECES ESTO\n";
        }
        if (iter > 5 && iter <= 10) {
            if (iter == 6) {
                str2 = str2 + "\t";
            }
            str2 = str2 + iter + " ";
            if (iter == 10) {
                str2 = str2 + "\n";
            }
        }
        if (iter > 10 && iter <= 15) {
            if (iter == 11) {
                str2 = str2 + "\t";

            }
            str2 = str2 + (iter + 1) + " ";
        }
    } while (iter < 15 && param);
    console.log(str2);

    console.log('------------ WHILE ANIDADO ---------------');
    iter = 0;
    let iter2: number = 0;
    while (iter < 5 && param) {
        iter2 = 0;
        console.log("TABLA DEL " + iter);
        while (iter2 < 5) {
            console.log(iter + " x " + iter2 + " = " + (iter * iter2) + "\n");
            iter2++;
        }
        iter++;
    }

    console.log('------------ FOR ANIDADOS ---------------');
    for (let i: number = 0; i < 10 && param; i++) {
        let output: string = '';
        for (let j: number = 0; j < 10 - i; j++) {
            output = output + ' ';
        }
        for (let k: number = 0; k <= i; k++) {
            output = output + '* ';
        }
        console.log(output);
    }

    let ifs : number = 0;
    if (10 - 15 >= 0 && 44.44 == 44.44) {
        ifs--;
    }
    else if(false || false){
        ifs--;
    }
    else {
        if (15 + 8 == 22 - 10 + 5 * 3 - 4 && 13 * 0 > -1) {
            if (10.0 != 11.0 - 1.01) {
                ifs = 100;
            }
            else {
            }
        }
        else {
        }
    }
    console.log('If: ', ifs);
}

function ternario(n : number, m : boolean) : string{
    let val1: number = n == 0 ? 10 : n == 1 ? 20 : n == 2 ? 30 : 40;
    console.log(val1 == 40 && m ? "Correcto Ternario 1" : "Incorrecto Ternario1");
    return val1 != 40 ? "Incorrecto Ternario2" : val1 == 40 ? "Correcto Ternario 2" : "Incorrecto Ternario 2";
}

function switch_(n: number): void {
    switch (n) {
        case 0:
            console.log('Switch 1 malo');
        case 3:
            console.log(ternario(-1, true));
            sentencias(false);
            break;
        case 1:
            forIn_forOf();
        case 2:
            sentencias(true);
        default:
            console.log('Switch 1 bueno');
    }
}

switch_(1);
switch_(3);

/*
-------Operaciones con length-------
8
10
18
-2
80
0.8
1073741824
8
INICIA FOR IN
0 1 2 3 4 5 6 7 
 FOR IN UNA DIMENSION NUMEROS 
0
1
2
3
4
 FOR OF UNA DIMENSION NUMEROS 
0
1
4
5
6
 FOR IN AUXILIARES[0] 
0
1
 FOR OF DOS DIMENSION AUXILIARES[0] 
Erik
Pavel
 FOR OF DOS DIMENSION AUXILIARES[1] 
Maeda
Christian
------------- Ciclos -------------------
DO WHILE
    CINCO VECES ESTO
    CINCO VECES ESTO
    CINCO VECES ESTO
    CINCO VECES ESTO
    CINCO VECES ESTO
    6 7 8 9 10 
    12 13 14 15 16 
------------ WHILE ANIDADO ---------------
TABLA DEL 0
0 x 0 = 0

0 x 1 = 0

0 x 2 = 0

0 x 3 = 0

0 x 4 = 0

TABLA DEL 1
1 x 0 = 0

1 x 1 = 1

1 x 2 = 2

1 x 3 = 3

1 x 4 = 4

TABLA DEL 2
2 x 0 = 0

2 x 1 = 2

2 x 2 = 4

2 x 3 = 6

2 x 4 = 8

TABLA DEL 3
3 x 0 = 0

3 x 1 = 3

3 x 2 = 6

3 x 3 = 9

3 x 4 = 12

TABLA DEL 4
4 x 0 = 0

4 x 1 = 4

4 x 2 = 8

4 x 3 = 12

4 x 4 = 16

------------ FOR ANIDADOS ---------------
          * 
         * * 
        * * * 
       * * * * 
      * * * * * 
     * * * * * * 
    * * * * * * * 
   * * * * * * * * 
  * * * * * * * * * 
 * * * * * * * * * * 
If:  100
Switch 1 bueno
Correcto Ternario 1
Correcto Ternario 2
*/