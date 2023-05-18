import User from "./User.js";

export default class Docente extends User {
     constructor (nome, email, nascimento, role ='docente', ativo =true ){
        super(nome, email, nascimento, role, ativo)
     }

     aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovada no curso ${curso}.`
     }
}


//-----Apagar------
// const novoDocente = new Docente("Lorena", 'loren@gmail.com', '1998-04-08')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Lorena', 'JS'))