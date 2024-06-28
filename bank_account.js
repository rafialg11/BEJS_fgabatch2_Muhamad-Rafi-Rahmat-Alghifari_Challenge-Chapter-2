class BankAccount{
  constructor(balance){    
    this._balance = balance;
  }
  getBalance(){
    return this._balance;
  }

  deposit(amount){
    try {
      if (amount < 0 ){
        throw new Error ("Inputan tidak valid");
      } else if (isNaN(amount)|| amount === ""){
        throw new Error ("Inputan tidak valid");
      } else {
        amount = parseFloat(amount);
        this._balance += amount;}
    } catch (error) {
        alert(error);    
    }    
  }

  withdraw(amount){
    try {
      if (amount > this._balance){
        throw new Error ("Saldo tidak mencukupi");
      } else if(amount < 0 || isNaN(amount) || amount === ""){
        throw new Error ("Inputan tidak valid");
      } else {
        amount = parseFloat(amount);
        this._balance -= amount;
      }
    } catch (error) {
      alert(error);
    }
  }
}

export default BankAccount