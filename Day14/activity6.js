class BankAccounts{
    #balance
    
    constructor(balance){
        this.#balance=balance;
    }

    // add method to deposite the banalce
    deposite(amount){
        if (amount>0) {
            this.#balance+=amount;
            
        }
        else{
            console.log("Invalid amount");
        }
    }
        //Add method for withdral
        withdraw(amount){
                if (amount>0 &&amount>=this.#balance) {
                    this.#balance-=amount;

                }
                else{
                    console.log("Invalid amount or insufficient balance");
                }
        }
        // add method to get current balance
        getBalance(){
            return this.#balance;
        }
}

const account= new BankAccounts(10000);
// account.deposite(500);
account.withdraw(2000);

// get current balance of the account
console.log("The Remain ammount is :",account.getBalance());
