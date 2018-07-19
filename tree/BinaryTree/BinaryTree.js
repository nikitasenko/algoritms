const Node = require('./Node');

class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(key) {
        if (key) {
            let newNode = new Node(key);
            if (this.root) {
                this.insertNode(this.root, newNode);
            } else {
                this.root = newNode;
            }
        } else return 'Not value';
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left) {
                this.insertNode(node.left, newNode);
            } else {
                node.left = newNode;
            }
        } else {
            if (node.right) {
                this.insertNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        }
    }

    delete(key) {

    }



    search(key) {
        if (!key) return 'Error';
        let current = this.root;
        if (!current) return 'Empty tree';
        while (true) {
            if (!current) return 'Not found';
            if (current.key === key) return current.key;
            if (key < current) {
                current = current.left
            } else {
                current = current.right
            }
        }
    }
}

module.exports = BinaryTree;
