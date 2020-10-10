Define AVLNode as [AVLNode left, AVLNode right, integer height, integer value];
Define AVLTree as [AVLNode root];

    integer height(AVLNode n) {
    if (n == null) {
        return 0;
    }
    return n.height;
    }

    AVLNode insert(AVLNode node, integer value) {
    /* 1.  Perform the normal BST rotation */
    if (node == null) {
        AVLNode node = strc AVLNode();
        node.value=value;
        return node;
    }

    if (value < node.value) {
        node.left = insert(node.left, value);
    } else {
        node.right = insert(node.right, value);
    }

    /* 2. Update height of this ancestor node */
    if(height(node.left)> height(node.right)){
        node.height=height(node.left)+1;
    }else{
        node.height=height(node.right)+1;
    }    

    /* 3. Get the balance factor of this ancestor node to check whether
       this node became unbalanced */
    integer balance = getBalance(node);

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

    AVLNode rightRotate(AVLNode y) {
    AVLNode x = y.left;
    AVLNode T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    if(height(y.left)>height(y.right)){
        y.height=height(y.left)+1;
    }else{
        y.height=height(y.right)+1;
    }
    
    if(height(x.left)>height(x.right)){
        x.height= height(x.left)+1;
    }else{
        x.height= height(x.right)+1;
    }    

    // Return strc root
    return x;
    }

    AVLNode leftRotate(AVLNode x) {
    AVLNode y = x.right;
    AVLNode T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    //  Update heights
    if(height(x.left)>height(x.right)){
        x.height = height(x.left)+1;
    }else{
        x.height = height(x.right)+1;
    }

    if(height(y.left)>height(y.right)){
        y.height = height(y.left)+1;
    }else{
        y.height = height(y.right)+1;
    }
    // Return strc root
    return y;
    }

    // Get Balance factor of node N
    integer getBalance(AVLNode N) {
    if (N == null) {
        return 0;
    }
    return height(N.left) - height(N.right);
    }

    void preOrder(AVLNode root) {
    if (root != null) {
        preOrder(root.left);
        println(root.value);
        preOrder(root.right);
    }
    }
    
    
    
    String getDot(AVLNode root){
    if (root != null) {
        String ret=root.value+"\n";
        String tmp= getDot(root.left);
        if(tmp!=null){
            ret = ret + root.value+" -> "+tmp;
        }
        tmp= getDot(root.right);
        if(tmp!=null){
            ret = ret + root.value+" -> "+tmp;
        }
        return ret;
    }
    return null;
    } 