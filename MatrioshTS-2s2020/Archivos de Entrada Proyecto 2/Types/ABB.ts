/**** Arbol binario de busqueda ***/
type Estudiante = {
    nombre : string,
    edad : number,
    esMayor : boolean,
    registro : number
};

type Nodo = {
    izq : Nodo,
    der : Nodo,
    estudiante : Estudiante
};

type Arbol = {
    raiz : Nodo
};

function insertar(nodo : Nodo, estudiante : Estudiante) : Nodo{
    if(nodo == null){
        nodo = {izq : null, der : null, estudiante : estudiante};
    }
    else if(estudiante.registro < nodo.estudiante.registro){
        nodo.izq = insertar(nodo.izq, estudiante);
    }
    else {
        nodo.der = insertar(nodo.der, estudiante);
    }
    return nodo;
}

function printEstudiante(estudiante : Estudiante) : void{
    console.log('Nombre: ', estudiante.nombre, '\t Edad: ', estudiante.edad, 'Registro: ', estudiante.registro, '\t Es Mayor: ', estudiante.esMayor);
}

function preOrden(raiz : Nodo) : void{
    if(raiz != null){
        printEstudiante(raiz.estudiante);
        preOrden(raiz.izq);
        preOrden(raiz.der);
    }
}

function postOrden(raiz : Nodo) : void{
    if(raiz != null){
        postOrden(raiz.izq);
        postOrden(raiz.der);
        printEstudiante(raiz.estudiante);
    }
}

function inOrden(raiz : Nodo) : void{
    if(raiz != null){
        inOrden(raiz.izq);
        printEstudiante(raiz.estudiante);
        inOrden(raiz.der);
    }
}

function cambio(raiz : Nodo, registro : number, nuevoNombe : string) : void{
    if(raiz == null){
        console.log('Indice no encontrado: ', registro);
        return;
    }

    if(raiz.estudiante.registro == registro){
        console.log('Encontrado:' + registro);
        raiz.estudiante.nombre = nuevoNombe;
        return;
    }
    else if(registro < raiz.estudiante.registro){
        cambio(raiz.izq, registro, nuevoNombe);
        return;
    }
    cambio(raiz.der, registro, nuevoNombe);
}

function insertarGlobal(nombre : string, edad : number, registro : number) : void{
    let estudiante : Estudiante = {nombre : nombre, edad : edad, registro : registro, esMayor : edad >= 18};
    arbol.raiz = insertar(arbol.raiz, estudiante);
}

function inOrdenMayores(raiz : Nodo) : void{
    if(raiz != null){
        inOrdenMayores(raiz.izq);
        if(raiz.estudiante.esMayor){
            printEstudiante(raiz.estudiante);
        }
        inOrdenMayores(raiz.der);
    }
}

let arbol : Arbol = {raiz : null};
console.log("-------- INSERTANDO ---------");
insertarGlobal('Carlo', 21, 10);
insertarGlobal('Oscar', 17, 5);
insertarGlobal('Pablo', 18, 12);
insertarGlobal('Luisa', 26, 9);
insertarGlobal('Karla', 20, 3);
insertarGlobal('Erick', 13, 14);
console.log("--------- PREORDEN ----------");
preOrden(arbol.raiz);
console.log("--------- POSTORDEN ----------");
postOrden(arbol.raiz);
console.log("--------- INORDEN ----------");
inOrden(arbol.raiz);
console.log("--------- INORDEN MAYORES ----------");
inOrdenMayores(arbol.raiz);
console.log("--------- CAMBIANDO --------");
cambio(arbol.raiz,3,"idnuevo"); 
cambio(arbol.raiz,4,"no encontrado"); 
inOrden(arbol.raiz); 


/*
-------- INSERTANDO ---------
--------- PREORDEN ----------
Nombre:  Carlo   Edad:  21 Registro:  10     Es Mayor:  true
Nombre:  Oscar   Edad:  17 Registro:  5      Es Mayor:  false
Nombre:  Karla   Edad:  20 Registro:  3      Es Mayor:  true
Nombre:  Luisa   Edad:  26 Registro:  9      Es Mayor:  true
Nombre:  Pablo   Edad:  18 Registro:  12     Es Mayor:  true
Nombre:  Erick   Edad:  13 Registro:  14     Es Mayor:  false
--------- POSTORDEN ----------
Nombre:  Karla   Edad:  20 Registro:  3      Es Mayor:  true
Nombre:  Luisa   Edad:  26 Registro:  9      Es Mayor:  true
Nombre:  Oscar   Edad:  17 Registro:  5      Es Mayor:  false
Nombre:  Erick   Edad:  13 Registro:  14     Es Mayor:  false
Nombre:  Pablo   Edad:  18 Registro:  12     Es Mayor:  true
Nombre:  Carlo   Edad:  21 Registro:  10     Es Mayor:  true
--------- INORDEN ----------
Nombre:  Karla   Edad:  20 Registro:  3      Es Mayor:  true
Nombre:  Oscar   Edad:  17 Registro:  5      Es Mayor:  false
Nombre:  Luisa   Edad:  26 Registro:  9      Es Mayor:  true
Nombre:  Carlo   Edad:  21 Registro:  10     Es Mayor:  true
Nombre:  Pablo   Edad:  18 Registro:  12     Es Mayor:  true
Nombre:  Erick   Edad:  13 Registro:  14     Es Mayor:  false
--------- INORDEN MAYORES ----------
Nombre:  Karla   Edad:  20 Registro:  3      Es Mayor:  true
Nombre:  Luisa   Edad:  26 Registro:  9      Es Mayor:  true
Nombre:  Carlo   Edad:  21 Registro:  10     Es Mayor:  true
Nombre:  Pablo   Edad:  18 Registro:  12     Es Mayor:  true
--------- CAMBIANDO --------
Encontrado:3
Indice no encontrado:  4
Nombre:  idnuevo     Edad:  20 Registro:  3      Es Mayor:  true
Nombre:  Oscar   Edad:  17 Registro:  5      Es Mayor:  false
Nombre:  Luisa   Edad:  26 Registro:  9      Es Mayor:  true
Nombre:  Carlo   Edad:  21 Registro:  10     Es Mayor:  true
Nombre:  Pablo   Edad:  18 Registro:  12     Es Mayor:  true
Nombre:  Erick   Edad:  13 Registro:  14     Es Mayor:  false
*/