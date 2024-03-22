const leia = require("readline-sync");

let saldo = 1000; 
const operacaobancaria = leia.questionInt("Digite a operacao:");

switch(operacaobancaria){
    case 1:{
        console.log("R$ ", saldo);
        break
    }
    case 2:{
        const saque = leia.questionInt("Quanto deseja sacar?:");
        
        if (saque <= saldo){
            saldo -= saque;
            console.log("Novo saldo: R$", saldo);
            break
        }
        console.log("Saldo insuficiente.");
        break
    }
    case 3:{
        const deposito = leia.questionInt("Quando deseja depositar?:");
        saldo += deposito;
        console.log("Novo saldo: R$", saldo);
        break 

    }
}
    
   
    

