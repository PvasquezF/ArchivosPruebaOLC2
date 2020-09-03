type AVLNode = {
    left: AVLNode,
    right: AVLNode,
    height: number,
    value: number
};

type AVLTree = {
    root: AVLNode
};

function height(n: AVLNode): number {
    if (n == null) {
        return 0;
    }
    return n.height;
}

function insert(node: AVLNode, value: number) :AVLNode {
    /* 1.  Perform the normal BST rotation */
    if (node == null) {
        node = {
            left: null,
            right: null,
            height: 0,
            value: value
        };
        return node;
    }

    if (value < node.value) {
        node.left = insert(node.left, value);
    } else {
        node.right = insert(node.right, value);
    }

    /* 2. Update height of this ancestor node */
    if (height(node.left) > height(node.right)) {
        node.height = height(node.left) + 1;
    } else {
        node.height = height(node.right) + 1;
    }

    /* 3. Get the balance factor of this ancestor node to check whether
       this node became unbalanced */
    let balance = getBalance(node);

    // If this node becomes unbalanced, then there are 4 cases
    // Left Left Case
    if (balance > 1 && value < node.left.value) {
        return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
        return leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    /* return the (unchanged) node pointegerer */
    return node;
}

function rightRotate(y: AVLNode): AVLNode {
    let x: AVLNode = y.left;
    let T2: AVLNode = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    if (height(y.left) > height(y.right)) {
        y.height = height(y.left) + 1;
    } else {
        y.height = height(y.right) + 1;
    }

    if (height(x.left) > height(x.right)) {
        x.height = height(x.left) + 1;
    } else {
        x.height = height(x.right) + 1;
    }

    // Return strc root
    return x;
}

function leftRotate(x: AVLNode): AVLNode {
    let y: AVLNode = x.right;
    let T2: AVLNode = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    //  Update heights
    if (height(x.left) > height(x.right)) {
        x.height = height(x.left) + 1;
    } else {
        x.height = height(x.right) + 1;
    }

    if (height(y.left) > height(y.right)) {
        y.height = height(y.left) + 1;
    } else {
        y.height = height(y.right) + 1;
    }
    // Return strc root
    return y;
}

// Get Balance factor of node N
function getBalance(N: AVLNode): number {
    if (N == null) {
        return 0;
    }
    return height(N.left) - height(N.right);
}

function preOrder(root: AVLNode): void {
    if (root != null) {
        preOrder(root.left);
        console.log(root.value);
        preOrder(root.right);
    }
}

function getDot(root: AVLNode): String {
    if (root != null) {
        let ret = `${root.value}\n`;
        let tmp = getDot(root.left);
        if (tmp != null) {
            ret += `${root.value} -> ${tmp}`;
        }
        tmp = getDot(root.right);
        if (tmp != null) {
            ret += `${root.value} -> ${tmp}`;
        }
        return ret;
    }
    return null;
} 

let tree : AVLTree = {
    root: null
};

tree.root = insert(tree.root, 19);
tree.root = insert(tree.root, 29);
tree.root = insert(tree.root, 99);
tree.root = insert(tree.root, 9);
tree.root = insert(tree.root, 2);
tree.root = insert(tree.root, 32);
tree.root = insert(tree.root, 4);
tree.root = insert(tree.root, 0);
tree.root = insert(tree.root, 1);
preOrder(tree.root);
