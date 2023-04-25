let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
function login(){
    let guarda_nome = document.getElementById('nome').value
    let guarda_senha = document.getElementById('senha').value
    if(procura_usuario(guarda_nome, guarda_senha) != -1){
        alert("Usuário validado! Bem-vindo!")
        location.assign('home.html')
    }else{
        alert("Usuário não validado!")
    }
}
function procura_usuario(guarda_nome, guarda_senha) {
    let index = usuarios.findIndex((element) => {
        return element.nome == guarda_nome && element.senha == guarda_senha
    })
    return index
}

let btn_nome = document.getElementById('nome')
let btn_senha = document.getElementById('senha')

btn_nome.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
