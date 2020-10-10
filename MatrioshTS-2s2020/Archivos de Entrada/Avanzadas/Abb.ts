/**** Arbol binario de busqueda ***/
type Nodo = {
    izq : Nodo,
    der : Nodo,
    indice : number,
    nombre : string
};

type Arbol = {
    raiz : Nodo
};

let arbol : Arbol = {raiz : null};
main();

function insertar(nodo : Nodo, indice : number, nombre : string) : Nodo{
    if(nodo == null){
        nodo = {izq : null, der : null, indice : indice, nombre : nombre};
    }
    else if(indice < nodo.indice){
        nodo.izq = insertar(nodo.izq, indice, nombre);
    }
    else {
        nodo.der = insertar(nodo.der, indice, nombre);
    }
    return nodo;
}

function preOrden(raiz : Nodo) : void{
    if(raiz != null){
        console.log(`Indice: ${raiz.indice} \t Dato: ${raiz.nombre}`);
        preOrden(raiz.izq);
        preOrden(raiz.der);
    }
}

function postOrden(raiz : Nodo) : void{
    if(raiz != null){
        postOrden(raiz.izq);
        postOrden(raiz.der);
        console.log(`Indice: ${raiz.indice} \t Dato: ${raiz.nombre}`);
    }
}

function inOrden(raiz : Nodo) : void{
    if(raiz != null){
        inOrden(raiz.izq);
        console.log(`Indice: ${raiz.indice} \t Dato: ${raiz.nombre}`);
        inOrden(raiz.der);
    }
}

function cambio(raiz : Nodo, indice : number, nuevoNombe : string){
    if(raiz == null){
        console.log('Indice no encontrado: ', indice);
        return;
    }

    if(raiz.indice == indice){
        console.log(`Encontrado: ${indice}`);
        raiz.nombre = nuevoNombe;
        return;
    }
    else if(indice < raiz.indice){
        cambio(raiz.izq, indice, nuevoNombe);
        return;
    }
    cambio(raiz.der, indice, nuevoNombe);
}

function main() : void{
    console.log("-------- INSERTANDO ---------");
	arbol.raiz = insertar(arbol.raiz, 10,"id1");
	arbol.raiz = insertar(arbol.raiz, 5,"id2");
	arbol.raiz = insertar(arbol.raiz, 12,"id3");
	arbol.raiz = insertar(arbol.raiz, 9,"id4");
	arbol.raiz = insertar(arbol.raiz, 3,"id5");
	arbol.raiz = insertar(arbol.raiz, 14,"id6");
	console.log("--------- PREORDEN ----------");
	preOrden(arbol.raiz); // (* RESULTADO : 10, 5, 3, 9, 12, 14 *)
	console.log("--------- POSTORDEN ----------");
	postOrden(arbol.raiz); // (* RESULTADO : 3, 9, 5, 14, 12, 10*)
	console.log("--------- INORDEN ----------");
	inOrden(arbol.raiz); // (* RESULTADO : 3, 5, 9, 10, 12, 14*)
	
	console.log("--------- CAMBIANDO --------");
	cambio(arbol.raiz,3,"idnuevo"); // (* RESULTADO: Econtrado 3 *)
	cambio(arbol.raiz,4,"no encontrado");  //(*RESULTADO: No encontrado 4*)
	inOrden(arbol.raiz); 
}

/*
    [LOG]: "-------- INSERTANDO ---------" 
    [LOG]: "--------- PREORDEN ----------" 
    [LOG]: "Indice: 10 Dato: id1" 
    [LOG]: "Indice: 5 Dato: id2" 
    [LOG]: "Indice: 3 Dato: id5" 
    [LOG]: "Indice: 9 Dato: id4" 
    [LOG]: "Indice: 12 Dato: id3" 
    [LOG]: "Indice: 14 Dato: id6" 
    [LOG]: "--------- POSTORDEN ----------" 
    [LOG]: "Indice: 3 Dato: id5" 
    [LOG]: "Indice: 9 Dato: id4" 
    [LOG]: "Indice: 5 Dato: id2" 
    [LOG]: "Indice: 14 Dato: id6" 
    [LOG]: "Indice: 12 Dato: id3" 
    [LOG]: "Indice: 10 Dato: id1" 
    [LOG]: "--------- INORDEN ----------" 
    [LOG]: "Indice: 3 Dato: id5" 
    [LOG]: "Indice: 5 Dato: id2" 
    [LOG]: "Indice: 9 Dato: id4" 
    [LOG]: "Indice: 10 Dato: id1" 
    [LOG]: "Indice: 12 Dato: id3" 
    [LOG]: "Indice: 14 Dato: id6" 
    [LOG]: "--------- CAMBIANDO --------" 
    [LOG]: "Encontrado: 3" 
    [LOG]: "Indice no encontrado: ",  4 
    [LOG]: "Indice: 3 Dato: idnuevo" 
    [LOG]: "Indice: 5 Dato: id2" 
    [LOG]: "Indice: 9 Dato: id4" 
    [LOG]: "Indice: 10 Dato: id1" 
    [LOG]: "Indice: 12 Dato: id3" 
    [LOG]: "Indice: 14 Dato: id6" 
*/