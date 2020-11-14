function ackermann(m: number, n: number): number {
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}

function hanoi(discos: number, origen: number, auxiliar: number, destino: number): void {
    if (discos == 1) {
        console.log("Mover disco de " + origen + " a " + destino);
    } else {
        hanoi(discos - 1, origen, destino, auxiliar);
        console.log("Mover disco de "+origen+ " a " + destino);
        hanoi(discos - 1, auxiliar, origen, destino);
    }
}

hanoi(3, 1, 2, 3);
for(let i : number = 6; i > 2; i--){
    console.log(ackermann(3, i));    
}

/*
    Mover disco de 1 a 3
    Mover disco de 1 a 2
    Mover disco de 3 a 2
    Mover disco de 1 a 3
    Mover disco de 2 a 1
    Mover disco de 2 a 3
    Mover disco de 1 a 3
    509
    253
    125
    61
    29
*/