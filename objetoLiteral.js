const user = {
    nome: 'Luria',
    email: 'Luria@gmail.com',
    nascimento: '1995/01/12',
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

const exibir = function(){
    console.log (this.nome)
}

//usamos bind() para ligar (bind) o valor de this a um determinado contexto
const exibirNome = exibir.bind(user)
exibirNome()
exibir()