class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance) {
    super(owner, balance);
    // this.interestRate = interestRate;
  }

  addInterest(interestRate) {
    const interest = this.balance * interestRate;
    this.balance += interest;
  }
}

// Usage
const account1 = new BankAccount("Alice");
account1.deposit(500);
account1.withdraw(100);

const savings1 = new SavingsAccount("Bob");
savings1.addInterest(0.05)

console.log(account1.owner, account1.getBalance());
console.log(savings1.owner, savings1.getBalance());
