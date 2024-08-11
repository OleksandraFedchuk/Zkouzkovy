class BankAccount {
#balance;
constructor(instance,deposit,withdraw){
    this.instance = 0;
    this.deposit = deposit;
    this.withdraw = withdraw;
}
get deposit(){
`Ви поклали грощі на депозит`
}

get deposit(deff){
    `Ваш новий депозит`
}
}

const instance = new BankAccount();
instance.deposit(100)
instance.deposit(1200)
instance.withdraw(1000)
console.log(instance);
