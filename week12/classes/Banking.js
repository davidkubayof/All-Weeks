import { question } from 'readline-sync'

class BankAccount{
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount
        } else {throw Error("not enghof mony:")}
    }
}

class Bank {
    constructor(){
        this.accounts = []
    }
    addAccount(account){
        this.accounts.push(account)
    }
    transfer(fromName, toName, amount){
        const from = this.accounts.find(account => account.owner === fromName)
        const to = this.accounts.find(account => account.owner === toName)
        
        from.withdraw(amount)
        to.deposit(amount)
    }
    showBalances(){
        this.accounts.forEach((value)=> console.log(value))
    }
}


function addOne(bank){
    const owner = question("what is your name?").toLowerCase()
    const balance = Number(question("what is your balance ?"))

    const b1 = new BankAccount(owner,balance);
    bank.addAccount(b1)   
}
function fromTo(bank){
    const from = question("enter your name :")
    const to = question("enter name to transfer :")
    const amount = Number(question("enter a num of amount"))
    bank.transfer(from,to,amount)
}
function print(bank){
    bank.showBalances()
}

let bool = true
const bank = new Bank()
while(bool){
const choice = question(`
        mano 
    1.  Create Account
    2. Transfer Money
    3. Show Balances
    4. Exit
    enter a num: `)

switch(choice){
    case "1":
        addOne(bank)
        break   
    case "2":
        fromTo(bank)
        break
    case "3":
       print(bank)
        break
    case "4":
        bool = false
        break
    }
}