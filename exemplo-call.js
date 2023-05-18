//Um exemplo de uso de call() para especificar o contexto de this:

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user)




   //Exemplo 2 Call()

  //  function User(nome, email) {
  //   this.nome = nome
  //   this.email = email
   
  //   this.exibeInfos = function(){
  //     console.log(this.nome, this.email)
  //   }
  //  }
   
  //  const newUser = new User('mariana', 'm@m.com')

  //  const outroUser = {
  //   nome: 'Rodrigo',
  //   email: 'r@r.com'
  //  }
   
  //  newUser.exibeInfos() //mariana m@m.com
  //  newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com





  // Exemplo 3  é possível passar parâmetros para call()

  // function exibeMensagem(nome, email) {
  //   console.log(`usuário: ${nome}, email ${email}`)
  //  }
  //   const user = {
  //   nome: 'Mariana',
  //   email: 'm@m.com',
  //   executaFuncao: function(fn) {
  //     fn.call(user, this.nome, this.email)
  //   }
  //  }
   
  //  user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com


  


   //Exemplo 4 Apply()

  //  function exibeMensagem(nome, email) {
  //   console.log(`usuário: ${nome}, email ${email}`)
  //  }
  //   const user = {
  //   nome: 'Mariana',
  //   email: 'm@m.com',
  //   executaFuncao: function(fn) {
  //     fn.apply(user, [this.nome, this.email])
  //   }
  //  }
  //   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com