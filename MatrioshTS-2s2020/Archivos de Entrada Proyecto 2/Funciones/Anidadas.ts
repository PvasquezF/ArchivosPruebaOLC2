let v : number = 2;
let w : number = 1;
let x : number = 2;
let y : number = 3;
let z : number = 4;

function p1(a : number, b : number) : void{
    let w : number = 11;
    let x : number = 12;
    let y : number = 13;
    let temp : number = 0;
    function p11() : void{
        let w : number = 21;
        let x : number = 22;
        function p111() : void{
            let w : number = 31;
            if(z == 0) {
                console.log("Local 31 = ",w);
                console.log("Ambito Padre 22 = ",x);
                console.log("Ambito Padre de Padre 13 = ",y);
                console.log("Global 0 = ",z);
                console.log("Parametro por valor de Padre de Padre 1 = ",a);
                console.log("Parametro por referencia de Padre de Padre 2 = ",b);
                b = 1000;
                funcion_global();
                return;
            }
            z--;
            p111();
        }

        function factorial(n : number) : number{
            let result = 0;
            result = n == 0 ? 1 : n * factorial(n-1);
            y++;
            console.log("Variable ambito padre de padre", y);
            return result;
        }
        console.log(factorial(5));
        y = 13;
        p111();
        p1(1,x);
    }
    if(v > 0){
        v--;
        temp = v;
        console.log("****** Iteracion: ", temp);
        p11();
        console.log("****** Fin iteracion: ", temp);
    }
}

function p11() : void{
    console.log('Aqui no debe entrar');
}

function funcion_global() : void{
    console.log('Llamada global');
}

p1(1,x);

/*
****** Iteracion:  1
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  2
Llamada global
****** Iteracion:  0
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  22
Llamada global
****** Fin iteracion:  0
****** Fin iteracion:  1
*/