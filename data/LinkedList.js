class Node {
    constructor(account) {
        this.account = account;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(account) {
        const newNode = new Node(account);
        newNode.next = this.head;
        this.head = newNode;
    }

    find(accountNumber) {
        let current = this.head;
        while (current) {
            if (current.account.accountNumber === accountNumber) {
                return current.account;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = LinkedList;
