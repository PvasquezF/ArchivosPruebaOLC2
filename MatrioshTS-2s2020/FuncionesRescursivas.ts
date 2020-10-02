menu();

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
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

function ackermann(m: number, n: number): number {
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}

function par(nump: number): number {
    return nump == 0 ? 1 : impar(nump - 1);
}

function impar(numi: number): number {
    return numi == 0 ? 0 : par(numi - 1);
}

function hofstaderMasculino(n: number): number {
    if (n < 0) {
        return 0;
    } else {
        if (n != 0) {
            return n - hofstaderMasculino(n - 1);
        } else {
            return 0;
        }
    }
}

function factorial(n: number): number {
    switch (n) {
        case 0:
            return 1;
        default:
            return n * factorial(n - 1);
    }
}

function potencia(base: number, exp: number): number {
    switch (exp) {
        case 0:
            return 1;
        default:
            return base * potencia(base, exp - 1);
    }
}

function modulo(n : number, p : number) : number{
    return n < p ? n : modulo(n - p, p);
}

function mcd(a : number, b : number) : number{
    return b == 0 ? a : mcd(b, modulo(a, b));
}

function multiplicacion(a : number, b : number) : number{
    if(b == 0){
        return 0;
    }
    return a + multiplicacion(a, b - 1);
}

function menu() {
    console.log(fibonacci(13));  // 233
    hanoi(3, 1, 2, 3);
    console.log(ackermann(3, 7)); //1021
    console.log(par(13)); //0
    console.log(par(20)); //1
    console.log(hofstaderMasculino(444)); //222
    console.log(factorial(10)); //362880 
    console.log(potencia(5, 4)); //625
    console.log(mcd(240,506)); //2
    console.log(multiplicacion(11,23)); //253
}