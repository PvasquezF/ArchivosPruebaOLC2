/**
* Archivo de pruebas, OLC2 1s2020 🌵🎍🌵🎍🌵🎍
* Proyecto 2 - J# 🖤❤️🖤❤️🖤❤️
* Covid-19 - Dia 1000 de cuarentena ☢☢☢☢
* Lista enlazada 🔥🔥🔥
* Fuente: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
* 🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮🔮
*/

define LinkedListNode as[
    string value,
    LinkedListNode next
];

define LinkedList as[
    LinkedListNode head,
    LinkedListNode tail
];

LinkedList lista = NULL;

LinkedListNode nuevoNodo(string value, LinkedListNode next) {
    const nodo := strc LinkedListNode();
    nodo.value = value;
    nodo.next = next;
    return nodo;
}

void prepend(string value) {
    // Make new node to be a head.
    const newNode := nuevoNodo(value, lista.head);
    lista.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (lista.tail == null) {
        lista.tail = newNode;
    }
}

void append(string value) {
    const newNode := nuevoNodo(value, null);

    // If there is no head yet let's make new node a head.
    if (lista.head == null) {
        lista.head = newNode;
        lista.tail = newNode;
        return;
    }

    // Attach new node to the end of linked list.
    lista.tail.next = newNode;
    lista.tail = newNode;
}


void traversal() {
    LinkedListNode aux = lista.head;
    while (aux != null) {
        print(aux.value);
        aux = aux.next;
    }
}


void principal() {
    lista = strc LinkedList();
    append("Adult");
    append("Air");
    append("Airforce");
    append("Album");
    append("Apple");
    traversal();
    // HEAD -> Adult
    // TAIL -> Apple
    // Adult -> Air -> Airforce -> Album -> Apple

    lista = strc LinkedList();
    prepend("Army");
    prepend("Banana");
    prepend("Bible");
    prepend("Bomb");
    prepend("Brain");
    prepend("Cappuccino");
    prepend("Chisel");
    prepend("Chocolates");
    prepend("Church");
    prepend("Clock");
    prepend("Clown");
    prepend("Coffee");
    prepend("Coffee-shop");
    prepend("Comet");
    prepend("Compact Disc");
    prepend("Compass");
    prepend("Computer");
    prepend("Crystal");
    prepend("Cup");
    prepend("Cycle");
    prepend("Data Base");
    prepend("Diamond");
    prepend("Fork");
    prepend("Freeway");
    prepend("Fruit");
    prepend("Fungus");
    prepend("Game");
    prepend("Horoscope");
    traversal();
    // HEAD -> Horoscope
    // TAIL -> Army
    // Horoscope->Game->Fungus->Fruit->Freeway->Fork->Diamond->Data Base->Cycle->Cup->Crystal->Computer->Compass->Compact Disc->Comet->Coffee-shop->Coffee->Clown->Clock->Church->Chocolates->Chisel->Cappuccino->Brain->Bomb->Bible->Banana->Army
}

//201701048