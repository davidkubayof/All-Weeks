export class BankAccount {
  constructor() {
    this.balance = 0;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Not enough money");
    } else {
      this.balance -= amount;
    }
  }
}
