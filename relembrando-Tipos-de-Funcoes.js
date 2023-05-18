//A primeira versão, mais “clássica” e muito parecida com outras linguagens.
//É a chamada “declaração de função”.

function soma(num1, num2) {
    return num1 + num2;
   }



// A segunda forma atribui a função a uma variável, funcionalidade que já não é tão comum em outras linguagens:
// Chamamos essa forma de “expressão de função”.

const soma = function(num1, num2) {
    return num1 + num2;
   }



   //A terceira e última forma é a arrow function ou “função de seta”, caracterizada pelo operador =>:
   
   const soma = (num1, num2) => {
    return num1 + num2;
   }

   //Outro exemplos de arrow function
   //no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:

   const soma = (num1, num2) => num1 + num2;

   //Bem mais curto! A arrow function também é uma expressão de função.
