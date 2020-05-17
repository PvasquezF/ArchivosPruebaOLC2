/**
* Archivo 🤐🤐🤐🤐🤐 OLC2 1s2020 🌵🎍🌵🎍🌵🎍
* Proyecto 2 - J# 🖤❤️🖤❤️🖤❤️
* Matriz 🎁🎁🎁🎁🎁
* Fuente: Estructuras de datos, vacaciones junio 2017 creo
* 🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂
*/

Define Nodo as [
    integer fila;
    integer columna;
    string valor;
    Nodo abajo;
    Nodo arriba;
    Nodo derecha;
    Nodo izquierda;
];

Define Encabezado as [
    integer id;
	Encabezado siguiente;
	Encabezado anterior;
	Nodo acceso;
];

Define ListaEncabezados as [
    Encabezado primero
];

Define Matriz as [
    ListaEncabezados eFilas;
	ListaEncabezados eColumnas;
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
	// print(grafo(m)); // 🥳🥳🥳🥳🥳
}

void grafo(Matriz m){
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