class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo =ativo
    }

    exibirinfos(){
        return`${this.nome}, ${this.email}`
    }
}
const novoUser = new User('Constantina', 'const@gmail.com', '23-02-2001')
console.log(novoUser)
console.log(novoUser.exibirinfos())

console.log(User.prototype.isPrototypeOf(novoUser))