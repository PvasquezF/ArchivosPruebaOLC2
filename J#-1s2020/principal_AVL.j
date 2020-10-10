import avl.j
void principal() {
    // Arbol AVL
    AVLTree t = strc AVLTree();    
    t.root = insert(t.root, 1);    
    t.root = insert(t.root, 2);    
    t.root = insert(t.root, 3);    
    t.root = insert(t.root, 4);    
    t.root = insert(t.root, 5);    
    t.root = insert(t.root, 6);    
    t.root = insert(t.root, 7);    
    t.root = insert(t.root, 8);    
    t.root = insert(t.root, 9);    
    t.root = insert(t.root, 10);    
    t.root = insert(t.root, 11);    
    t.root = insert(t.root, 12);    
    preOrder(t.root);    
    String dot="digraph foo {\n" +
    "    rankdir=TD;\n" +
    "    node [shape=record];    \n";
    dot = dot + getDot(t.root);
    dot = dot + "}";
    println("");
    println(dot);
}