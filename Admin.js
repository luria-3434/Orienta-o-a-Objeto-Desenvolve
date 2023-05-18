import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role='admin', ativo= true){
    super(nome, email, nascimento, role, ativo)
    }
    

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}


//-----Apagar------
// const novoAdmin = new Admin('Jose', 'j@gmsil.com', '1985-02-15')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('JS', 20))