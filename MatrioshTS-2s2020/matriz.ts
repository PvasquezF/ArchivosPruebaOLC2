let matrixA : number [][] = [];
let matrixB : number [][] = [];
let matrixR : number [][] = [];
const min = 0;
const max = 4;

function llenado(matrix1 : number[][], matrix2 : number[][], matrix3 : number[][]) : void{
    for(let i = min; i < max; i++){
        matrix1[i] = [];
        matrix2[i] = [];
        matrix3[i] = [];
        for(let j = min; j < max; j++){
            matrix1[i][j] = j * 3 + i;
            matrix2[i][j] = i ** 3 - j ** 2;
            matrix3[i][j] = 0;
        }
    }
}

function print(matrix : number[][]) : void{
    for(let i = 0; i < matrix.length; i++){
        let salida = '';
        for(let j = 0; j < matrix[i].length; j++){
            salida = salida + "\t|\t" + matrix[i][j];
        }
        console.log(salida);
    }
}

function suma(matrix1 : number[][], matrix2 : number[][], matrixR : number[][]): void{
    for(let i = min; i < max; i++){
        for(let j = min; j < max; j++){
            matrixR[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
}

function sumarFilas(matrix : number[][]) : void{
    let contador = 0;
    console.log("\t\t\t\t\t\t\t\t\t\tR");
    for(let i = 0; i < matrix.length; i++){
        contador = 0;
        let salida = '';
        for(let j = 0; j < matrix[i].length; j++){
            contador = contador + matrix[i][j];
			salida = salida + "\t|\t" + matrix[i][j];
        }
        console.log(salida, "\t|\t",contador);
    }
}

function sumarColumnas(matrix : number[][]) : void{
    let contador = 0;
    let salida = 'R';
    for(let i = 0; i < matrix.length; i++){
        contador = 0;
        for(let j = 0; j < matrix[i].length; j++){
            contador = contador + matrix[j][i];
        }
        salida = salida + "\t|\t" +  contador;
    }
    console.log(salida);
}


function resta(matrix1 : number[][], matrix2 : number[][], matrixR : number[][]): void{
    for(let i = min; i < max; i++){
        for(let j = min; j < max; j++){
            matrixR[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }
}


function multiplicar(matrix1 : number[][], matrix2 : number[][], matrixR : number[][]): void{
    for(let i = min; i < max; i++){
        for(let j = min; j < max; j++){
            for(let k = min; k < max; k++){
                matrixR[i][j] = matrixR[i][j] + matrix1[i][k] * matrix2[k][j];
            }
        }
    }
}

function transpuesta(matrix1: number[][]): void{
    let matrixAux : number[][] = [];
    for(let i = 0; i < max; i++){
        matrixAux[i] = [];
        for(let j = 0; j < max; j++){
            matrixAux[i][j] = matrix1[j][i];
        }
    }
    for(let i = 0; i < max; i++){
        for(let j = 0; j < max; j++){
            matrix1[i][j] = matrixAux[i][j];
        }
    }
}

function minValue(matrix1 : number[][]) : number{   

    let iAux = 0;
    let jAux = 0;
    let temp = matrix1[min][min];
    for(let i = 0; i < matrix1.length; i++){
        for(let j = 0; j < matrix1[i].length; j++){
            if(matrix1[i][j] < temp){
                temp = matrix1[i][j];
                iAux = i;
                jAux = j;
            }
        }
    }
    console.log("Min -> [",iAux,",",jAux,"] = ",temp);
    return temp;
}

function maxValue(matrix1 : number[][]) : number{   
    let iAux = 0;
    let jAux = 0;
    let temp = matrix1[min][min];
    for(let i = 0; i < matrix1.length; i++){
        for(let j = 0; j < matrix1[i].length; j++){
            if(matrix1[i][j] > temp){
                temp = matrix1[i][j];
                iAux = i;
                jAux = j;
            }
        }
    }
    console.log("Max -> [",iAux,",",jAux,"] = ",temp);
    return temp;
}

function ordenar(matrix1 : number[][]): void{
    let aux = 0;
    for(let i = 0; i < matrix1.length; i++){
        for(let j = 0; j < matrix1[i].length; j++){
            for(let k = 0; k <= i; k++){
                for(let l = 0; l <= j; l++){
                    if(matrix1[i][j] < matrix1[k][l]){
                        aux = matrix1[i][j];
                        matrix1[i][j] = matrix1[k][l];
                        matrix1[k][l] = aux;
                    }
                }
            }
        }
    }
}

function clearMat(matrix : number[][]): void{
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = 0;
        }
    }
}


llenado(matrixA,matrixB, matrixR);
console.log("Matrix A");
print(matrixA);
console.log("Matrix B");
print(matrixB);

console.log("MatR = MatA + MatB");
suma(matrixA,matrixB,matrixR);
print(matrixR);

console.log("MatR = MatA - MatB");
resta(matrixA,matrixB,matrixR);
print(matrixR);

console.log("Clear MatR");
clearMat(matrixR);
print(matrixR);

console.log("MatR = MatA * MatB");
multiplicar(matrixA,matrixB,matrixR);
print(matrixR);

console.log("Tranpose(MatA)");
transpuesta(matrixA);
print(matrixA);

minValue(matrixR);
maxValue(matrixR);

console.log("Sort MatR");
ordenar(matrixR);
print(matrixR);

minValue(matrixR);
maxValue(matrixR);

console.log("Suma Filas y Columnas");
sumarFilas(matrixA);
sumarColumnas(matrixA);

/*

Matrix A
        |       0       |       3       |       6       |       9 
        |       1       |       4       |       7       |       10
        |       2       |       5       |       8       |       11
        |       3       |       6       |       9       |       12
Matrix B
        |       0       |       -1      |       -4      |       -9
        |       1       |       0       |       -3      |       -8
        |       8       |       7       |       4       |       -1
        |       27      |       26      |       23      |       18
MatR = MatA + MatB
        |       0       |       2       |       2       |       0 
        |       2       |       4       |       4       |       2 
        |       10      |       12      |       12      |       10
        |       30      |       32      |       32      |       30
MatR = MatA - MatB
        |       0       |       4       |       10      |       18
        |       0       |       4       |       10      |       18
        |       -6      |       -2      |       4       |       12
        |       -24     |       -20     |       -14     |       -6
Clear MatR
        |       0       |       0       |       0       |       0
        |       0       |       0       |       0       |       0
        |       0       |       0       |       0       |       0
        |       0       |       0       |       0       |       0
MatR = MatA * MatB
        |       294     |       276     |       222     |       132
        |       330     |       308     |       242     |       132
        |       366     |       340     |       262     |       132
        |       402     |       372     |       282     |       132
Tranpose(MatA)
        |       0       |       1       |       2       |       3
        |       3       |       4       |       5       |       6
        |       6       |       7       |       8       |       9
        |       9       |       10      |       11      |       12
Min -> [ 0 , 3 ] =  132
Max -> [ 3 , 0 ] =  402
Sort MatR
        |       132     |       132     |       132     |       132
        |       222     |       242     |       262     |       276
        |       282     |       294     |       308     |       330
        |       340     |       366     |       372     |       402
Min -> [ 0 , 0 ] =  132
Max -> [ 3 , 3 ] =  402
Suma Filas y Columnas
                                                                                R
        |       0       |       1       |       2       |       3       |        6
        |       3       |       4       |       5       |       6       |        18
        |       6       |       7       |       8       |       9       |        30
        |       9       |       10      |       11      |       12      |        42
R       |       18      |       22      |       26      |       30


*/
