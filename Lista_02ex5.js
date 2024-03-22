const leia = require("readline-sync");

let quantidade;
let valor; 

console.log("\nEscolha uma opção de 1 a 6:");
console.log("\n1--- cachorro quente.");
console.log("\n2--- x-salada.");
console.log("\n3--- x-bacon.");
console.log("\n4--- bauru.");
console.log("\n5--- refrigerante.");
console.log("\n6--- suco de laranja.");

const cardapio = leia.questionInt("Digite o numero da opcao: ");
quantidade = leia.questionInt("\nEscolha a quantidade: ");

switch (cardapio) { // if( codigo == 3)
    case 1:
        console.log("\nO seu cachorro quente custará R$ ", 10*quantidade);
        break;
    case 2:
        console.log("\nA sua x-salada tem o valor de R$ ", 15*quantidade);
        break;
    case 3:
        console.log("\nO seu x-bacon tem o valor de R$ ", 18*quantidade);
        break;
    case 4:
        console.log("\nO seu bauru tem o valor de R$ ", 12*quantidade);
        break;
    case 5:
        console.log("\nO seu refrigerante tem o valor de R$ ", 8*quantidade);
        break;
    case 6:
        console.log("\nO seu suco de laranja tem o valor de R$ ", 13*quantidade);
        break;
    default:
        console.log("\nDigite uma opcao valida!");

}
  
  
   

        


