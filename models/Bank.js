const LinkedList = require("../data/LinkedList");
const BinarySearchTree = require("../data/Tree");

class Bank {
    constructor() {
        this.accountsList = new LinkedList();
        this.accountsTree = new BinarySearchTree();
    }

    addAccount(accountNumber, name, balance) {
        const account = { accountNumber, name, balance };
        this.accountsList.insert(account);
        this.accountsTree.insert(account);
        return account;
    }

    getBalance(accountNumber) {
        const account = this.accountsTree.search(accountNumber);
        return account ? account.balance : null;
    }

    transfer(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.accountsList.find(fromAccountNumber);
        const toAccount = this.accountsTree.search(toAccountNumber);
        if (fromAccount && toAccount && fromAccount.balance >= amount) {
            fromAccount.balance -= amount;
            toAccount.balance += amount;
            return true;
        }
        return false;
    }
}

module.exports = Bank;
