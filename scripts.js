class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if (value < currentNode.value) {
                    // left

                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }

                    currentNode = currentNode.left;

                } else {
                    // right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this; 
                    }

                    currentNode = currentNode.right;
                }
            }
        }

    }

    lookup(value) {
        let currentNode = this.root;

        if (!this.root) {
            return false;
        }
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(2);
tree.insert(4);
console.log(tree.lookup(2))

console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }