  function fibonacci( n:number):number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.log(fibonacci(13));  // 233


 function hanoi( discos:number, origen:number,  auxiliar:number,  destino:number):string {
 let result:string = "";
 if (discos == 1) {
result = result + (origen + destino);
  } else {
    result = result + hanoi(discos - 1, origen, destino, auxiliar);
     result = result + (origen + destino);
     result = result + hanoi(discos - 1, auxiliar, origen, destino);
  }
        return result;
    }

    console.log(hanoi(4,1,5,3));  //648648648648648

 function ackermann( m:number,  n:number):number {
        if (m == 0) {
            return (n + 1);
        } else if (m > 0 && n == 0) {
             let cuatro:number = ackermann(m - 1, 1);
            return cuatro;
        } else {
            let ret:number =  ackermann(m, n - 1);
            let  nueva:number = ackermann(m - 1, ret);
            return nueva;
        }
    
}
console.log(ackermann(3,8)); //2045 se tardo 6 segundos


    function par( nump:number):number {
        if (nump == 0) {
            return 1;
        }
        return impar(nump - 1);
    }

    function impar( numi:number):number {
        if (numi == 0) {
            return 0;
        }
        return par(numi - 1);
    }
    console.log(par(29)); //0
    console.log(par(400)); //1

    function hofstaderMasculino( n:number):number {
        if (n < 0) {
            return 0;
        } else {
           
            if(n != 0){
                return n - hofstaderMasculino(n - 1);
            }else{ 
                return 0;
              
            }
        }
    }
    console.log(hofstaderMasculino(1238)); // 619


  
    function factorial( n:number):number {
      
        switch(n){
            case 0:
                return 1;
            case 0:
                return -100; 
            default:
                return n * factorial(n - 1); 
               
        }
    }
    console.log(factorial(13)); //6227020800


    function potencia( base:number,  exp:number):number {
    
        switch(exp){
            case 0:
                return 1;
            case 0:
                return -100; 
            default:
                return (base * potencia(base, exp - 1));
               
        }
    }    
console.log(potencia(30,5)); //24300000
