import BankAccount from "./bank_account.js";

class BankingSystem{    
    constructor(){
        this.accounts = [];
    }

    createAccount(initialBalance = 0.0){        
        const newAccount = new BankAccount(initialBalance);
        this.accounts.push(newAccount);
        console.log(`Account ${newAccount.getBalance()} created.`);
        return new BankAccount(0);
    }   

    async deposit(account, amount){
        try {            
            await new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve(true)
                }, 500);
            });
            return account.deposit(amount);    
        } catch (error) {
            console.log(error);
        }
    }
    
    async withdraw(account, amount){
        try {            
            await new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve(true)
                }, 1000);
            });
            return account.withdraw(amount);    
        } catch (error) {
            console.log(error);
        }
    }

    async getBalance(account){
        try {
            await new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve(true)
                }, 2000);
            })
            return account.getBalance();
        } catch (error){
            console.log(error);
        }
    }
}

// Menggunakan sistem perbankan
const bankingSystem = new BankingSystem();

// Membuat akun baru dengan saldo awal 0
const account1 = bankingSystem.createAccount(0);

// Melakukan operasi perbankan dengan fungsi async
(async () => {
  // Deposit ke akun
  await bankingSystem.deposit(account1, 500);
  console.log(`Deposit sebesar 500, total ${account1.getBalance()}.`);

  // Penarikan dari akun
  await bankingSystem.withdraw(account1, 200);
  console.log(`Penarikan sebesar 200, sisa ${account1.getBalance()}.`);

  // Mengecek saldo akun
  const balance = await bankingSystem.getBalance(account1);
  console.log(`Saldo akun saat ini: ${balance}`);
})();

