const user = {
    nome: 'Luria',
    email: 'Luria@gmail.com',
    nascimento: '1995/01/12',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Ludmila",
    email: "Lud@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()