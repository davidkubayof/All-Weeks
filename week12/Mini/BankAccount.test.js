import test from "node:test";
import assert from "node:assert";
import { BankAccount } from "./BankAccount.js";

test.describe("test BankAccount", () => {
  test("BankAccount valid balance ", () => {
    const account = new BankAccount();
    assert.strictEqual(account.balance, 0); //1
});
test('BankAccount valid deposit', () => {
    const account = new BankAccount();
    account.deposit(100);
    assert.strictEqual(account.balance, 100); //2
    account.deposit(100);
    account.deposit(100);
    assert.strictEqual(account.balance, 300); //3
  })
  test("BankAccount withdraw valid amount", () => {
    const account = new BankAccount();
    account.deposit(200);
    account.withdraw(100);
    assert.strictEqual(account.balance, 100); //4
});
test("withdraw too much should throw error and not change balance", (t) => {
    const account = new BankAccount(); // balance = 100
    account.deposit(100)
    assert.throws(() => {
        account.withdraw(200); // מנסים למשוך יותר מהיתרה
    }, /Not enough money/); // מצפה ל-Error
    assert.strictEqual(account.balance, 100); // ✅ balance נשאר ללא שינוי
  });
});
console.log("✅ BankAccount tests passed");
