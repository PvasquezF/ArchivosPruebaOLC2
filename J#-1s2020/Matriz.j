/**
* Archivo 🤐🤐🤐🤐🤐 OLC2 1s2020 🌵🎍🌵🎍🌵🎍
* Proyecto 2 - J# 🖤❤️🖤❤️🖤❤️
* Matriz 🎁🎁🎁🎁🎁
* Fuente: Estructuras de datos, vacaciones junio 2017 creo
* 🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
*/

Define Nodo as [
    integer fila,
    integer columna,
    string valor,
    Nodo abajo,
    Nodo arriba,
    Nodo derecha,
    Nodo izquierda
];

Define Encabezado as [
    integer id,
	Encabezado siguiente,
	Encabezado anterior,
	Nodo acceso
];

Define ListaEncabezados as [
    Encabezado primero
];

Define Matriz as [
    ListaEncabezados eFilas,
	ListaEncabezados eColumnas
];

Matriz m;
ListaEncabezados listaFilas,listaColumnas;

void insertar(Encabezado nuevo, ListaEncabezados lista){
    Encabezado actual;

    if(lista.primero == null){
        lista.primero = nuevo;
    }else{
        if(nuevo.id < lista.primero.id){
            nuevo.siguiente = lista.primero;
            lista.primero.anterior = nuevo;
            lista.primero = nuevo;
        }else{
            actual = lista.primero; 
            while(actual.siguiente != null) {
                if(nuevo.id < actual.siguiente.id){
                    nuevo.siguiente = actual.siguiente;
                    actual.siguiente.anterior = nuevo;
                    nuevo.anterior = actual;
                    actual.siguiente = nuevo;
                    break;
                }
                actual = actual.siguiente;
            }

            if(actual.siguiente == null) {
                actual.siguiente = nuevo;
                nuevo.anterior = actual;
            }
        }
    }
}

Encabezado getEncabezado(integer id, ListaEncabezados lista){
    Encabezado actual;
    actual = lista.primero;
    while(actual != null){
        if(actual.id == id){
            return actual;
        }
        actual = actual.siguiente;
    }
    return null;
}
void insertar(integer fila, integer columna, string valor, Matriz mat){
    Nodo nuevo = strc Nodo();
    Encabezado eFila;
    Encabezado eColumna;
    Nodo actual;

    nuevo.fila = fila;
	nuevo.columna = columna;
	nuevo.valor = valor;

    eFila = getEncabezado(fila, mat.eFilas);

    if(eFila == null){
        eFila = strc Encabezado();
        eFila.id = fila;
        insertar(eFila, mat.eFilas);
        eFila.acceso = nuevo;
    }else{
        if(nuevo.columna < eFila.acceso.columna){
            nuevo.derecha = eFila.acceso;
			eFila.acceso.izquierda = nuevo;
			eFila.acceso = nuevo;
        }else{
            actual = eFila.acceso;
            while(actual.derecha != null) {
                if(nuevo.columna < actual.derecha.columna){
                    nuevo.derecha = actual.derecha;
                    actual.derecha.izquierda = nuevo;
                    nuevo.izquierda = actual;
                    actual.derecha = nuevo;
                    break;
                }
                actual = actual.derecha;
            }
            if(actual.derecha == null) {
                actual.derecha = nuevo;
                nuevo.izquierda = actual;
            }
        }
    }

    eColumna = getEncabezado(columna, mat.eColumnas);
    if(eColumna == null) {
        eColumna = strc Encabezado();
        eColumna.id = columna;
		insertar(eColumna, mat.eColumnas);
		eColumna.acceso = nuevo;
    }
    else{
        if(nuevo.fila < eColumna.acceso.fila){
            nuevo.abajo = eColumna.acceso;
			eColumna.acceso.arriba = nuevo;
			eColumna.acceso = nuevo;
        }else{
            actual = eColumna.acceso;
            while(actual.abajo != null) {
                if(nuevo.fila < actual.abajo.fila) {
                    nuevo.abajo = actual.abajo;
                    actual.abajo.arriba = nuevo;
                    nuevo.arriba = actual;
                    actual.abajo = nuevo;
                    break;
                }
                actual = actual.abajo;
            }
            if(actual.abajo == null) {
                actual.abajo = nuevo;
                nuevo.arriba = actual;
            }
        }
    }
}

void recorrerFilas(Matriz mat){
    Encabezado eFila;
    Nodo actual;

    eFila = mat.eFilas.primero;
    print("Recorrido por filas: ");

    while(eFila != null) {
        actual = eFila.acceso;
        while(actual != null){
            print(actual.valor);
            if(eFila.siguiente != null || actual.derecha != null){
                print(", \n");
            }
            actual = actual.derecha;
        }
        eFila = eFila.siguiente;
    }
    print("\n");
}

void recorrerColumnas(Matriz mat){
    Encabezado eColumna;
    Nodo actual;

    eColumna = mat.eColumnas.primero;
	print("Recorrido por columnas: ");

    while(eColumna != null) {
        actual = eColumna.acceso;
        while(actual != null){
            print(actual.valor);
            if(eColumna.siguiente != null || actual.abajo != null){
                print(", \n");
            }
            actual = actual.abajo;
        }
        eColumna = eColumna.siguiente;
    }
    print("\n");
}

void principal(){
    m = strc Matriz();
    listaFilas = strc ListaEncabezados();
    listaColumnas = strc ListaEncabezados();

	m.eFilas = listaFilas;
	m.eColumnas = listaColumnas;

    insertar(0, 0, "A", m);
    insertar(0, 1, "B", m);
    insertar(0, 2, "C", m);
    insertar(0, 3, "D", m);
    insertar(0, 4, "E", m);
    insertar(0, 5, "F", m);
    insertar(0, 6, "G", m);
    insertar(0, 7, "H", m);
    insertar(0, 8, "I", m);

    insertar(1, 0, "D", m);
    insertar(2, 0, "D", m);
    insertar(3, 0, "D", m);

    insertar(4, 0, "A", m);
    insertar(4, 1, "B", m);
    insertar(4, 2, "C", m);
    insertar(4, 3, "D", m);
    insertar(4, 4, "E", m);

    insertar(5, 0, "D", m);
    insertar(6, 0, "D", m);
    insertar(7, 0, "D", m);
    insertar(8, 0, "D", m);
    insertar(9, 0, "D", m);
    insertar(10, 0, "D", m);

    recorrerFilas(m);
    recorrerColumnas(m);

    // 🧝🏻🔮🧝🏻🔮🧝🏻🔮🧝🏻🔮🧝🏻🔮
    // Ohh este maravilloso grafo no tan bien codificado, pero funcional se dice que muestra la matriz de forma grafica
    // Solo aquellos elegidos obtendran la respuesta para colocarla en graphviz ✨✨✨✨
    // https://dreampuf.github.io/GraphvizOnline/
	print(grafo(m)); // 🥳🥳🥳🥳🥳
}

String grafo(Matriz m){
    Encabezado eFila, eColumna, actual;
    Nodo nodoActual;
    String salida = "";
    salida = salida + "digraph G{\nnode[shape=box, style=filled, color=Gray95];\nedge[color=black];\nrankdir=UD;\n";
	salida = salida + "{rank = min;\"Matriz\";\n";

    actual = m.eColumnas.primero;

    while(actual != null){
		salida = salida + "\"x"+actual.id+"\";\n";
		actual = actual.siguiente;
    }
	salida = salida + "};\n";

    eFila = m.eFilas.primero;
    while(eFila != null) {
        salida = salida + "{rank = same;\n";
        nodoActual = eFila.acceso;
        salida = salida + "\"y"+eFila.id+"\";\n";

        while(nodoActual != null){
            salida = salida + "\""+nodoActual.fila+"," + nodoActual.columna + "\\" + "n" + nodoActual.valor + "\";\n";
            nodoActual = nodoActual.derecha;
        }

        salida = salida + "};\n";
        eFila = eFila.siguiente;
    }

    eFila = m.eFilas.primero;

    while(eFila != null) {
        nodoActual = eFila.acceso;
        while(nodoActual != null){
            if(nodoActual.derecha != null){
                salida = salida + "\"" + nodoActual.fila + "," + nodoActual.columna + "\\" + "n" + nodoActual.valor + "\"";
				salida = salida + "->";
				salida = salida + "\"" + nodoActual.derecha.fila + "," + nodoActual.derecha.columna;
				salida = salida + "\\" + "n" + nodoActual.derecha.valor + "\"" + "[constraint=false];\n";
				salida = salida + "\"" + nodoActual.derecha.fila + "," + nodoActual.derecha.columna;
				salida = salida + "\\" + "n" + nodoActual.derecha.valor + "\"";
				salida = salida + "->";
				salida = salida + "\"" + nodoActual.fila + "," + nodoActual.columna;
				salida = salida + "\\" + "n" + nodoActual.valor + "\"" + "[constraint=false];\n";
            }
            nodoActual = nodoActual.derecha;
        }
        eFila = eFila.siguiente;
    }
    
	eColumna = m.eColumnas.primero;

    while(eColumna != null) {
        if(eColumna.acceso != null){
            salida = salida + "\"x" + eColumna.id + "\"";
            salida = salida + "->";
            salida = salida + "\"" + eColumna.acceso.fila + "," + eColumna.acceso.columna;
            salida = salida + "\\" + "n" + eColumna.acceso.valor + "" + "\";\n";
        }
		eColumna = eColumna.siguiente;
    }

    eColumna = m.eColumnas.primero;
    while(eColumna != null) {
        nodoActual = eColumna.acceso;
        while(nodoActual != null){
            if(nodoActual.abajo != null){
                salida = salida + "\"" + nodoActual.fila + "," + nodoActual.columna;
				salida = salida + "\\" + "n" + nodoActual.valor + "" + "\"";
				salida = salida + "->";
				salida = salida + "\"" + nodoActual.abajo.fila + "," + nodoActual.abajo.columna;

				salida = salida + "\\" + "n" + nodoActual.abajo.valor + "" + "\";\n";

				salida = salida + "\"" + nodoActual.abajo.fila + "," + nodoActual.abajo.columna;
				salida = salida + "\\" + "n" + nodoActual.abajo.valor + "" + "\"";
				salida = salida + "->";

				salida = salida + "\"" + nodoActual.fila + "," + nodoActual.columna;
				salida = salida + "\\" + "n" + nodoActual.valor + "" + "\";\n";
            }
            nodoActual = nodoActual.abajo;
        }
        eColumna = eColumna.siguiente;
    }

    eFila = m.eFilas.primero;

    while(eFila != null) {
        if(eFila.acceso != null) {
			salida = salida + "\"y" + eFila.id + "\"";
			salida = salida + "->";
			salida = salida + "\"" + eFila.acceso.fila + "," + eFila.acceso.columna;
			salida = salida + "\\" + "n" + eFila.acceso.valor + "\";\n";
        }
        eFila = eFila.siguiente;
    }

    actual = m.eFilas.primero;
    while(actual != null){
        if(actual.siguiente != null) {
			salida = salida + "\"y" + actual.id + "\"";
			salida = salida + "->";
			salida = salida + "\"y" + actual.siguiente.id + "\"[rankdir=UD];\n";
        }
        actual = actual.siguiente;
    }    

    actual = m.eColumnas.primero;
    while(actual != null) {
        if(actual.siguiente != null) {
            salida = salida + "\"x" + actual.id + "\"";
			salida = salida + "->";
			salida = salida + "\"x" + actual.siguiente.id + "\";\n";
        }
        actual = actual.siguiente;
    }

	salida = salida + "Matriz ->x" + m.eColumnas.primero.id + ";\n";
	salida = salida + "Matriz ->y" + m.eFilas.primero.id + "[rankdir=UD];\n";
	salida = salida + "}";
    return salida;
}













/**
*20171048
*                                   S       A       L       I       D       A 
*   Recorrido por filas: A, 
B, 
C, 
D, 
E, 
F, 
G, 
H, 
I, 
D, 
D, 
D, 
A, 
B, 
C, 
D, 
E, 
D, 
D, 
D, 
D, 
D, 
D
Recorrido por columnas: A, 
D, 
D, 
D, 
A, 
D, 
D, 
D, 
D, 
D, 
D, 
B, 
B, 
C, 
C, 
D, 
D, 
E, 
E, 
F, 
G, 
H, 
I
digraph G{
node[shape=box, style=filled, color=Gray95];
edge[color=black];
rankdir=UD;
{rank = min;"Matriz";
"x0";
"x1";
"x2";
"x3";
"x4";
"x5";
"x6";
"x7";
"x8";
};
{rank = same;
"y0";
"0,0\\nA";
"0,1\\nB";
"0,2\\nC";
"0,3\\nD";
"0,4\\nE";
"0,5\\nF";
"0,6\\nG";
"0,7\\nH";
"0,8\\nI";
};
{rank = same;
"y1";
"1,0\\nD";
};
{rank = same;
"y2";
"2,0\\nD";
};
{rank = same;
"y3";
"3,0\\nD";
};
{rank = same;
"y4";
"4,0\\nA";
"4,1\\nB";
"4,2\\nC";
"4,3\\nD";
"4,4\\nE";
};
{rank = same;
"y5";
"5,0\\nD";
};
{rank = same;
"y6";
"6,0\\nD";
};
{rank = same;
"y7";
"7,0\\nD";
};
{rank = same;
"y8";
"8,0\\nD";
};
{rank = same;
"y9";
"9,0\\nD";
};
{rank = same;
"y10";
"10,0\\nD";
};
"0,0\\nA"->"0,1\\nB"[constraint=false];
"0,1\\nB"->"0,0\\nA"[constraint=false];
"0,1\\nB"->"0,2\\nC"[constraint=false];
"0,2\\nC"->"0,1\\nB"[constraint=false];
"0,2\\nC"->"0,3\\nD"[constraint=false];
"0,3\\nD"->"0,2\\nC"[constraint=false];
"0,3\\nD"->"0,4\\nE"[constraint=false];
"0,4\\nE"->"0,3\\nD"[constraint=false];
"0,4\\nE"->"0,5\\nF"[constraint=false];
"0,5\\nF"->"0,4\\nE"[constraint=false];
"0,5\\nF"->"0,6\\nG"[constraint=false];
"0,6\\nG"->"0,5\\nF"[constraint=false];
"0,6\\nG"->"0,7\\nH"[constraint=false];
"0,7\\nH"->"0,6\\nG"[constraint=false];
"0,7\\nH"->"0,8\\nI"[constraint=false];
"0,8\\nI"->"0,7\\nH"[constraint=false];
"4,0\\nA"->"4,1\\nB"[constraint=false];
"4,1\\nB"->"4,0\\nA"[constraint=false];
"4,1\\nB"->"4,2\\nC"[constraint=false];
"4,2\\nC"->"4,1\\nB"[constraint=false];
"4,2\\nC"->"4,3\\nD"[constraint=false];
"4,3\\nD"->"4,2\\nC"[constraint=false];
"4,3\\nD"->"4,4\\nE"[constraint=false];
"4,4\\nE"->"4,3\\nD"[constraint=false];
"x0"->"0,0\\nA";
"x1"->"0,1\\nB";
"x2"->"0,2\\nC";
"x3"->"0,3\\nD";
"x4"->"0,4\\nE";
"x5"->"0,5\\nF";
"x6"->"0,6\\nG";
"x7"->"0,7\\nH";
"x8"->"0,8\\nI";
"0,0\\nA"->"1,0\\nD";
"1,0\\nD"->"0,0\\nA";
"1,0\\nD"->"2,0\\nD";
"2,0\\nD"->"1,0\\nD";
"2,0\\nD"->"3,0\\nD";
"3,0\\nD"->"2,0\\nD";
"3,0\\nD"->"4,0\\nA";
"4,0\\nA"->"3,0\\nD";
"4,0\\nA"->"5,0\\nD";
"5,0\\nD"->"4,0\\nA";
"5,0\\nD"->"6,0\\nD";
"6,0\\nD"->"5,0\\nD";
"6,0\\nD"->"7,0\\nD";
"7,0\\nD"->"6,0\\nD";
"7,0\\nD"->"8,0\\nD";
"8,0\\nD"->"7,0\\nD";
"8,0\\nD"->"9,0\\nD";
"9,0\\nD"->"8,0\\nD";
"9,0\\nD"->"10,0\\nD";
"10,0\\nD"->"9,0\\nD";
"0,1\\nB"->"4,1\\nB";
"4,1\\nB"->"0,1\\nB";
"0,2\\nC"->"4,2\\nC";
"4,2\\nC"->"0,2\\nC";
"0,3\\nD"->"4,3\\nD";
"4,3\\nD"->"0,3\\nD";
"0,4\\nE"->"4,4\\nE";
"4,4\\nE"->"0,4\\nE";
"y0"->"0,0\\nA";
"y1"->"1,0\\nD";
"y2"->"2,0\\nD";
"y3"->"3,0\\nD";
"y4"->"4,0\\nA";
"y5"->"5,0\\nD";
"y6"->"6,0\\nD";
"y7"->"7,0\\nD";
"y8"->"8,0\\nD";
"y9"->"9,0\\nD";
"y10"->"10,0\\nD";
"y0"->"y1"[rankdir=UD];
"y1"->"y2"[rankdir=UD];
"y2"->"y3"[rankdir=UD];
"y3"->"y4"[rankdir=UD];
"y4"->"y5"[rankdir=UD];
"y5"->"y6"[rankdir=UD];
"y6"->"y7"[rankdir=UD];
"y7"->"y8"[rankdir=UD];
"y8"->"y9"[rankdir=UD];
"y9"->"y10"[rankdir=UD];
"x0"->"x1";
"x1"->"x2";
"x2"->"x3";
"x3"->"x4";
"x4"->"x5";
"x5"->"x6";
"x6"->"x7";
"x7"->"x8";
Matriz ->x0;
Matriz ->y0[rankdir=UD];
}
*/

