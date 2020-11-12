function arreglos(): void {
    let x: number[] = [0, 1, 4, 5, 6, 7, 8, 9];
    let y: number[] = new Array(15 - 5);
    let z: string[][][] = [[["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]], [["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]], [["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]]];
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
    console.log("INICIA FOR IN 3D");
    for (let i in z[0][1]) {
        console.log(i);
    }
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

    console.log('SENTENCIAS ESCAPE\n\t\"TAB\"\rSALTO DE LINEA');

    console.log("TABLERO BINARIO CON TABULACIONES");
    console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
    console.log("1\t0\t1\t0\t1\t0\t1\t0\t1\t0\t1");
    console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");

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
    } while (iter < 15);
    console.log(str2);

    console.log('------------ WHILE ANIDADO ---------------');
    iter = 0;
    let iter2: number = 0;
    while (iter < 5) {
        iter2 = 0;
        console.log("TABLA DEL " + iter);
        while (iter2 < 5) {
            console.log(iter + " x " + iter2 + " = " + (iter * iter2) + "\n");
            iter2++;
        }
        iter++;
    }

    console.log('------------ FOR ANIDADOS ---------------');
    for (let i: number = 0; i < 10; i++) {
        let output: string = '';
        for (let j: number = 0; j < 10 - i; j++) {
            output = output + ' ';
        }
        for (let k: number = 0; k <= i; k++) {
            output = output + '* ';
        }
        console.log(output);
    }

}
arreglos();

function switchpro(n:number):void{
    switch(n){
        case 1:
            console.log("--n: 1--");
            switchpro(5);
            break;
        case 2:
            console.log("--n: 2--");
            switchpro(1);
            break;
        default:
            console.log(n);
    }
}
switchpro(2);

/*
-------Operaciones con length------- 
8.000000 
10.000000 
18.000000 
-2.000000 
80.000000 
0.800000 
1073741824.000000 
8.000000 
INICIA FOR IN 
0 1 2 3 4 5 6 7  
INICIA FOR IN 3D 
0.000000 
1.000000 
2.000000 
 FOR IN UNA DIMENSION NUMEROS  
0.000000 
1.000000 
2.000000 
3.000000 
4.000000 
 FOR OF UNA DIMENSION NUMEROS  
0.000000 
1.000000 
4.000000 
5.000000 
6.000000 
 FOR IN AUXILIARES[0]  
0.000000 
1.000000 
 FOR OF DOS DIMENSION AUXILIARES[0]  
Erik 
Pavel 
 FOR OF DOS DIMENSION AUXILIARES[1]  
Maeda 
Christian 
SENTENCIAS ESCAPE
	"TAB"
SALTO DE LINEA 
TABLERO BINARIO CON TABULACIONES 
0	1	0	1	0	1	0	1	0	1	0 
1	0	1	0	1	0	1	0	1	0	1 
0	1	0	1	0	1	0	1	0	1	0 
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

--n: 2--
--n: 1--
5.000000
*/
