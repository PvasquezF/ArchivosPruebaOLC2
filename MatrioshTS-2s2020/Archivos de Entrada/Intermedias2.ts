const tablero : number[][] = [];
const jugadasI : number[] = [0, 0, 0, 2, 1, 2, 1, 1, 2];
const jugadasJ : number[] = [0, 1, 2, 0, 0, 1, 1, 2, 2];
let contador = 0;
const size = 3;
const jugador1 = "Erik";
const jugador2 = "Gerardo";
let turnoActual = 0;

function llenarTablero() : void{
    for(let i = 0; i < size; i++){
        tablero.push([]);
        for(let j = 0; j < size; j++){
            tablero[i].push(-1);
        }
    }
}

function limpiarTablero() : void{
    for(let i = 0; i < tablero.length; i++){
        tablero.pop();
    }
}

function imprimirTablero() : void{
    let temp = '';
    for(let i = 0; i < tablero.length; i++){
        for(let j = 0; j < tablero[i].length; j++){
            temp = temp + '|' + (tablero[i][j] == 0 ? "0" : tablero[i][j] == 1 ? "X" : "-"); 
        }
        temp = temp + '\n';
    }
    console.log(temp);
}

function ocupado(i : number, j : number) : boolean{
    return tablero[i][j] == -1 ? false : true;
}

function imprimirGanador(ganador : number){
    console.log(ganador == 1 ? jugador1 : jugador2);
}

function ganador(simbolo : number) : boolean{
    if( tablero[0][0] == tablero [1][1] && tablero[1][1] == tablero[2][2] && tablero[2][2] == simbolo){
        return true;
    }
    else if( tablero[0][2] == tablero [1][1] && tablero[1][1] == tablero[2][0] && tablero[2][0] == simbolo){
        return true;
    }

    for(let i in [0,1,2]){
        if( tablero[i][0] == tablero [i][1] && tablero[i][1] == tablero[i][2] && tablero[i][2] == simbolo){
            return true;
        }
        else if( tablero[0][1] == tablero [1][i] && tablero[1][i] == tablero[2][i] && tablero[2][i] == simbolo){
            return true;
        }
        else{
            return false;
        }
    }
    console.log("Si llega aqui es error");
    return false;
}

function agregarJugada(i : number, j : number){
    if(!ocupado(i,j)){
        tablero[i][j] = turnoActual;
    }
}

function juego() : void{
    limpiarTablero();
    llenarTablero();
    imprimirTablero();
    while(true){
        turnoActual = turnoActual == 0 ? 1 : 0;
        switch(turnoActual){
            case 0:
                console.log("Turno del jugador: " + jugador1);
                agregarJugada(jugadasI[contador], jugadasJ[contador]);
                break;
            case 1:
                console.log("Turno del jugador: " + jugador2);
                agregarJugada(jugadasI[contador], jugadasJ[contador]);
                break;
            default:
                console.log('Error si llega aqui');
        }
        imprimirTablero();
        contador++;
        if(ganador(turnoActual)){
            console.log("Ganó: ", turnoActual == 0 ? jugador1 : jugador2);
            break;
        }
        else if(contador >= 9){
            console.log("Empates");
            break;
        }
    }
}

juego();