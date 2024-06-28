class BankAccount{
  constructor(balance){
    this.balance = balance;
  }
  getBalance(){
    return this.balance;
  }

  deposit(amount){
    try {
      if (amount < 0 ){
        throw new Error ("Inputan tidak valid");
      } else if (isNaN(amount)|| amount === ""){
        throw new Error ("Inputan tidak valid");
      } else {
        amount = parseFloat(amount);
        this.balance += amount;}
    } catch (error) {
        alert(error);    
    }    
  }

  withdraw(amount){
    try {
      if (amount > this.balance){
        throw new Error ("Saldo tidak mencukupi");
      } else if(amount < 0 || isNaN(amount) || amount === ""){
        throw new Error ("Inputan tidak valid");
      } else {
        amount = parseFloat(amount);
        this.balance -= amount;
      }
    } catch (error) {
      alert(error);
    }
  }
}

