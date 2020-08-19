type AVLNode = {
    left: AVLNode,
    right: AVLNode,
    height: Number,
    value: Number
}

type AVLTree = {
    root: AVLNode
}

function height(n: AVLNode): Number {
    if (n == null) {
        return 0;
    }
    return n.height;
}

function insert(node: AVLNode, value: Number) {
    if (node == null) {
        node = {
            left: null,
            right: null,
            height: 0,
            value: value
        }
    }

    if (value < node.value) {
        node.left = insert(node.left, value);
    } else {
        node.right = insert(node.right, value);
    }

}