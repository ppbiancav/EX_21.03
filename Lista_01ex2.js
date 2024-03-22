const leia = require ("readline-sync");

let num; 

num = leia.questionInt("\nDigite um numero");

if (num % 2 == 0){
    if (num > 0){
        console.log("par e positivo");
    }else{
        console.log("par e negativo");

    }
        
}else{
    if (num < 0){
        console.log("impar e positivo");
    }else{
        console.log("impar e negativo");
    }
}