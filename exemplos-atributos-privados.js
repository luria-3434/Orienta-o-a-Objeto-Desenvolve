// // Exemplo 01 classe totalmente pública

// class User {
//     role = '';
   
//     constructor(nome) {
//       this.nome = nome;
//       console.log(`Criado novo usuário: ${nome}` );
//     }
//    }
   
//    // criar o usuário
//    let novoUser = new User('Rodrigo');
   
//    // modificar o role
//    novoUser.role = 'admin';
//    console.log(novoUser.role) // admin





// //----------------
//    //Exemplo 02
//    //Agora vamos “proteger” as propriedades nome e role, marcando com o prefixo _ e também modificando um pouco a estrutura da classe:

//    class User {
//     _role = '';
   
//     set role(tipoRole) {
//       if (tipoRole !== 'admin') {
//         tipoRole = 'estudante'
//       }
//       this._role = tipoRole
//     }
   
//     get role() {
//       return this._role
//     }
   
//     constructor(nome) {
//       this._nome = nome;
//     }
//    }

//    //Ao criarmos a classe, condicionamos o acesso aos getters e setters. Ao criarmos a instância e executarmos os métodos:

//    // criar o usuário
// let novoUser = new User('Rodrigo');

// // modificar o role
// novoUser.role = 'admin'; // acessando via setter
// console.log(novoUser.role) // admin

// // tentar incluir um role não existente
// novoUser.role = 'gerente';
// console.log(novoUser.role) // estudante





//-------------
//Exemplo 03
//Acima, criamos uma classe com apenas um construtor para receber um valor para a propriedade nome e um getter para nome.

// class User {
//     constructor(nome) {
//      this._nome = nome
//    }
  
//    get nome(){
//      return this._nome
//    }
//   }

//   //Vamos instanciar a classe e tentar atualizar nome:

//   // criar o usuário
// let novoUser = new User('Rodrigo');
// console.log(novoUser.nome) //usando o getter

// novoUser.nome = 'Mariana'
// console.log(novoUser.nome) //não é modificado, continua 'Rodrigo'

// //O setter não foi implementado, então a propriedade não é modificada.





//-----------
//Exemplo 04
//Usando métodos
// É possível emular os getters e setters com funções. As funções são mais flexíveis do que get/set (podem aceitar argumentos diferentes, por exemplo).

class User {
    _nome = '';

    setNome(nome) {
        this._nome = nome;
    }

    getNome() {
        return this._nome;
    }
}

//Nesse caso, suprimimos o construtor e passamos toda a responsabilidade para setNome().

const novoUser = new User()
novoUser.setNome('Rodrigo');
console.log(novoUser.getNome()); //Rodrigo