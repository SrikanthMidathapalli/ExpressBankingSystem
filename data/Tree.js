class TreeNode {
    constructor(account) {
        this.account = account;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(account) {
        const newNode = new TreeNode(account);
        const insertNode = (node, newNode) => {
            if (newNode.account.accountNumber < node.account.accountNumber) {
                node.left ? insertNode(node.left, newNode) : node.left = newNode;
            } else {
                node.right ? insertNode(node.right, newNode) : node.right = newNode;
            }
        };
        this.root ? insertNode(this.root, newNode) : this.root = newNode;
    }

    search(accountNumber) {
        const searchNode = (node, number) => {
            if (!node) return null;
            if (number === node.account.accountNumber) return node.account;
            return number < node.account.accountNumber
                ? searchNode(node.left, number)
                : searchNode(node.right, number);
        };
        return searchNode(this.root, accountNumber);
    }
}

module.exports = BinarySearchTree;
