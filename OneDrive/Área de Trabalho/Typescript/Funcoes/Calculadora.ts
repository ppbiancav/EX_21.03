import readline = require("readline-sync"); 

let numero1: number;
let numero2: number;  

numero1 = readline.questionFloat("\nDigite o primeiro numero:") 
numero2 = readline.questionFloat("\nDigite o segundo numero:") 

console.log(somar(numero1, numero2));

about();

//Função com retorno...
function somar(numero1: number, numero2: number, ): number{
    return numero1 + numero2; 
}

//Função sem retorno...
function about(): void{
    console.log("Feito por Yumi");
}