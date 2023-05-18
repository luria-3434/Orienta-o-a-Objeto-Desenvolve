import User from "./User.js"
import Docente from "./docente.js"
import Admin from "./Admin.js"

// const novoUser= new User('Mariana', 'mari@gmail.com', '2002-05-23')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rogerio','ro@gmail.com', '2011-02-16')
console.log(novoAdmin.nome)
novoAdmin.nome = "Andre"
console.log(novoAdmin.nome)


