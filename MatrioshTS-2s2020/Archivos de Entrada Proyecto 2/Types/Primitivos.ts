type Auxiliar = {
    nombre : string,
    codigo : number
};

type Curso = {
    nombre : string,
    seccion : string,
    codigo : number
};

type Asignacion = {
    aux : Auxiliar,
    curso : Curso
};

let auxiliares : string[] = ['Cristian', 'Pavel', 'Erik', 'Carlos'];
let secciones : string[] = ['A', 'B+', 'B-', 'C'];

function asignar(auxilar : Auxiliar, curso : Curso) : Asignacion{
    let asignacion : Asignacion = {aux : auxilar, curso : curso};
    return asignacion;
}

function crearAuxiliar(nombre : string, codigo : number) : Auxiliar{
    let auxiliar : Auxiliar = {nombre : nombre, codigo : codigo};
    return auxiliar;
}

function crearCurso(nombre : string, seccion : string, codigo : number) : Curso{
    let curso : Curso = {nombre : nombre, seccion : seccion, codigo : codigo};
    return curso;
}

function print(asignacion : Asignacion) : void{
    if(asignacion != null){
        console.log('Codigo: ', asignacion.aux.codigo, '\tAuxiliar: ', asignacion.aux.nombre);
        console.log('Codigo: ', asignacion.curso.codigo, '\tNombre: ', asignacion.curso.nombre, '\tSeccion: ', asignacion.curso.seccion);
    }
    else{
        console.log('Asignacion es null');
    }
}

function main() : void{
    for(let i : number = 0; i < 8; i++){
        let asignacion : Asignacion;
        if(i < 4){
            let aux : Auxiliar = crearAuxiliar(auxiliares[i], i);
            let curso : Curso = crearCurso('OLC2', secciones[i], i);
            asignacion = asignar(aux, curso);
        }
        print(asignacion);    
    }
}

main();

/*
Codigo:  0  Auxiliar:  Cristian
Codigo:  0  Nombre:  OLC2   Seccion:  A
Codigo:  1  Auxiliar:  Pavel
Codigo:  1  Nombre:  OLC2   Seccion:  B+
Codigo:  2  Auxiliar:  Erik
Codigo:  2  Nombre:  OLC2   Seccion:  B-
Codigo:  3  Auxiliar:  Carlos
Codigo:  3  Nombre:  OLC2   Seccion:  C
Asignacion es null
Asignacion es null
Asignacion es null
Asignacion es null
*/