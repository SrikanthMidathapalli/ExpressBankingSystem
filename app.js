const readline = require('readline');
const Bank = require('./models/Bank');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bank = new Bank();

function showMenu() {
    console.log("\n==== Express Banking System ====");
    console.log("1. Create Account");
    console.log("2. Check Balance");
    console.log("3. Transfer Money");
    console.log("4. Exit");
    rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
    switch (option.trim()) {
        case '1':
            rl.question("Enter Account Number: ", (accNo) => {
                rl.question("Enter Name: ", (name) => {
                    rl.question("Enter Initial Balance: ", (balance) => {
                        const acc = bank.addAccount(parseInt(accNo), name, parseFloat(balance));
                        console.log("Account created:", acc);
                        showMenu();
                    });
                });
            });
            break;
        case '2':
            rl.question("Enter Account Number: ", (accNo) => {
                const balance = bank.getBalance(parseInt(accNo));
                console.log(balance !== null ? `Balance: ₹${balance}` : "Account not found.");
                showMenu();
            });
            break;
        case '3':
            rl.question("From Account Number: ", (from) => {
                rl.question("To Account Number: ", (to) => {
                    rl.question("Amount: ", (amt) => {
                        const success = bank.transfer(parseInt(from), parseInt(to), parseFloat(amt));
                        console.log(success ? "Transfer Successful" : "Transfer Failed");
                        showMenu();
                    });
                });
            });
            break;
        case '4':
            console.log("Exiting... Thank you!");
            rl.close();
            break;
        default:
            console.log("Invalid option.");
            showMenu();
    }
}

showMenu();
