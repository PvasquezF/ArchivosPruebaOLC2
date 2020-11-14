type Reporte = {
    vino : string,
    revision : string,
    botella : string,
    rechazos : number
};

let vinos : string[] = ['Blanco', 'Tinto ', 'Jerez ', 'Oporto', 'Rosado'];
let botellas : string[] = ['Magnum', 'DMagnum', 'Estandar', 'Imperial'];
let revisiones : string[] = ['Oxigeno', 'Envases'];
let encabezado : string[] = new Array(2);
let reporte : Reporte[][][];

function crearNulos() : void{
    reporte = new Array(2);
    for(let i : number = 0; i < reporte.length; i++){
        reporte[i] = new Array(5);
        for(let j : number = 0; j < reporte[i].length; j++){
            reporte[i][j] = new Array(4);
            for(let k : number = 0; k < reporte[i][j].length; k++){
                reporte[i][j][k] = null;
            }
        }
    }
}

function crearArray(reporte : Reporte[][][]) : void{
    for(let i : number = 0; i < reporte.length; i++){
        for(let j : number = 0; j < reporte[i].length; j++){
            for(let k : number = 0; k < reporte[i][j].length; k++){
                reporte[i][j][k] = {
                    vino : vinos[j],
                    revision : revisiones[i],
                    botella : botellas[k],
                    rechazos : ((i)*vinos.length*botellas.length) + ((j)*botellas.length) + (k + 1)
                };
            }
        }
    }
}

function printStruct(reporte : Reporte) : void{
    if(reporte != null){
        console.log(reporte.revision, "\t", reporte.vino, "\t", reporte.botella, "\t", reporte.rechazos);
    }
}

function printArreglo(arreglo : Reporte[][][]) : void{
    for(let i : number = 0; i < arreglo.length; i++){
        for(let j : number = 0; j < arreglo[i].length; j++){
            for(let k = 0; k < arreglo[i][j].length; k++){
                printStruct(arreglo[i][j][k]);
            }
        }
    }
}

function printEncabezado() : void{
    encabezado = ["Revision", "Tipo Vino", "Botella", "Total"];
    let salida : string = '';
    for(let str in encabezado){
        salida = salida.concat(encabezado[str]).concat('\t');
    }
    console.log(salida);
}

crearNulos();
crearArray(reporte);

console.log("***************************************\n***************************************");
printEncabezado();
printArreglo(reporte);
console.log("***************************************");

for(let i : number = 0; i < reporte.length; i++){
    for(let j : number = 0; j < reporte[i].length; j++){
        for(let k : number = 0; k < reporte[i][j].length; k++){
            if( reporte[i][j][k].rechazos % 2 == 0){
                reporte[i][j][k] = null;
            }
        }
    }
}
console.log("***************************************");
printEncabezado();
printArreglo(reporte);
console.log("***************************************\n***************************************");

/*
***************************************
***************************************
Revision    Tipo Vino   Botella Total
Oxigeno      Blanco      Magnum      1
Oxigeno      Blanco      DMagnum     2
Oxigeno      Blanco      Estandar    3
Oxigeno      Blanco      Imperial    4
Oxigeno      Tinto       Magnum      5
Oxigeno      Tinto       DMagnum     6
Oxigeno      Tinto       Estandar    7
Oxigeno      Tinto       Imperial    8
Oxigeno      Jerez       Magnum      9
Oxigeno      Jerez       DMagnum     10
Oxigeno      Jerez       Estandar    11
Oxigeno      Jerez       Imperial    12
Oxigeno      Oporto      Magnum      13
Oxigeno      Oporto      DMagnum     14
Oxigeno      Oporto      Estandar    15
Oxigeno      Oporto      Imperial    16
Oxigeno      Rosado      Magnum      17
Oxigeno      Rosado      DMagnum     18
Oxigeno      Rosado      Estandar    19
Oxigeno      Rosado      Imperial    20
Envases      Blanco      Magnum      21
Envases      Blanco      DMagnum     22
Envases      Blanco      Estandar    23
Envases      Blanco      Imperial    24
Envases      Tinto       Magnum      25
Envases      Tinto       DMagnum     26
Envases      Tinto       Estandar    27
Envases      Tinto       Imperial    28
Envases      Jerez       Magnum      29
Envases      Jerez       DMagnum     30
Envases      Jerez       Estandar    31
Envases      Jerez       Imperial    32
Envases      Oporto      Magnum      33
Envases      Oporto      DMagnum     34
Envases      Oporto      Estandar    35
Envases      Oporto      Imperial    36
Envases      Rosado      Magnum      37
Envases      Rosado      DMagnum     38
Envases      Rosado      Estandar    39
Envases      Rosado      Imperial    40
***************************************
***************************************
Revision    Tipo Vino   Botella Total
Oxigeno      Blanco      Magnum      1
Oxigeno      Blanco      Estandar    3
Oxigeno      Tinto       Magnum      5
Oxigeno      Tinto       Estandar    7
Oxigeno      Jerez       Magnum      9
Oxigeno      Jerez       Estandar    11
Oxigeno      Oporto      Magnum      13
Oxigeno      Oporto      Estandar    15
Oxigeno      Rosado      Magnum      17
Oxigeno      Rosado      Estandar    19
Envases      Blanco      Magnum      21
Envases      Blanco      Estandar    23
Envases      Tinto       Magnum      25
Envases      Tinto       Estandar    27
Envases      Jerez       Magnum      29
Envases      Jerez       Estandar    31
Envases      Oporto      Magnum      33
Envases      Oporto      Estandar    35
Envases      Rosado      Magnum      37
Envases      Rosado      Estandar    39
***************************************
***************************************
*/