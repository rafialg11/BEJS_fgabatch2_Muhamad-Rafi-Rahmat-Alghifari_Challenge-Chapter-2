import BankAccount from "./bank_account.js";

class BankingSystem{    
    constructor(){
        this.accounts = [];
    }

    createAccount(initialBalance = 0.0){        
        const newAccount = new BankAccount(initialBalance);
        this.accounts.push(newAccount);
        console.log(`Account created.`);
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
            window.alert(error);
        }
    }
    
    async withdraw(account, amount){
        try {            
            await new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve(true)
                }, 500);
            });
            return account.withdraw(amount);    
        } catch (error) {
            window.alert(error);
        }
    }

    async getBalance(account){
        try {
            await new Promise ((resolve) => {
                setTimeout(()=>{
                    resolve(true)
                }, 200);
            })
            return account.getBalance();
        } catch (error){
            window.alert(error);
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
  let choice;

  while (choice != "4"){ 
    choice = window.prompt("Pilih operasi yang ingin dilakukan: \n1. Deposit \n2. Withdraw \n3. Check Balance \n4. Exit");
    switch (choice) {
            case "1":
                const depositAmount = window.prompt("Masukkan nominal deposit: ");
                await bankingSystem.deposit(account1, depositAmount);                           
                break;  
        
            case "2":
                const withdrawalAmount = window.prompt("Masukkan nominal withdraw: ");
                await bankingSystem.withdraw(account1, withdrawalAmount);                
                break;
        
            case "3":
                const balance = await bankingSystem.getBalance(account1);
                window.alert(`Saldo akun saat ini: ${balance}`);
                break;

            case "4":
                break;

            default:
                console.log("Inputan tidak valid");	
                break;
        }
    }
})();

