import arbol
Define BNode as [BNode left, BNode rigth, string value];
Define BTree as [BNode root];
void principal() {
    // Arbol Binario
    BTree tree = strc BTree();        
    tree.root=addNode("Luis", tree.root);
    tree.root=addNode("Rainman", tree.root);
    tree.root=addNode("Pavel", tree.root);
    tree.root=addNode("Juan Carlos", tree.root);
    tree.root=addNode("Bayron", tree.root);
    tree.root=addNode("Edgar", tree.root);
    tree.root=addNode("Erick", tree.root);
    tree.root=addNode("Luis", tree.root);    
    preOrder(tree.root);  
}
