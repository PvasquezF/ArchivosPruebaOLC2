Define BNode as [BNode left, BNode right, string value];
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



BNode addNode(String value, BNode subRoot) {
    if(exists(value, subRoot)){
        print(value+" está repetido");
        return subRoot;
    }
    return add(value, subRoot);
}

BNode add(String value, BNode subRoot) {
    if (subRoot == null) {
        subRoot = strc BNode();
        subRoot.value = value;
    } else if (esMayor(subRoot.value, value)) {
        subRoot.left = add(value, subRoot.left);
    } else if (esMayor(value, subRoot.value)) {
        subRoot.right = add(value, subRoot.right);
    }
    return subRoot;
}

boolean exists(String value, BNode subRoot){
    if (subRoot != null) {
        return subRoot.value == value || exists(value, subRoot.left)||exists(value, subRoot.right);
    }
    return false;
}    

void preOrder(BNode subRoot) {
    if (subRoot != null) {
        preOrder(subRoot.left);
        print(subRoot.value);
        preOrder(subRoot.right);
    }
}    

boolean esMayor(String cad1, String cad2) {        
    char[] cadena1 = cad1.toCharArray();
    char[] cadena2 = cad2.toCharArray();
    integer max, cont, total = 0;
    if (cadena1.length > cadena2.length) {
        max = cadena1.length;
    } else {
        max = cadena2.length;
    }
    while (cont < max) {
        if(cont<cadena1.length){
            total = cadena1[cont];
        }
        if(cont<cadena2.length){
            total = total - cadena2[cont];
        }            
        if (total != 0) {
            break;
        }
        cont++;
    }        
    return total > 0;
}
