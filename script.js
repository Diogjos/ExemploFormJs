
let usuarios = []

if (localStorage.getItem('cadastrados')) {
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function cadastrar() {
    let guarda_nome = document.getElementById('nome').value
    let guarda_senha = document.getElementById('senha').value
    let guarda_cpf = document.getElementById('cpf').value
    let guarda_email = document.getElementById('email').value
    let guarda_data = document.getElementById('data').value
    let data = new Date();
    let usuario = {
        nome: guarda_nome.toLowerCase().trim(),
        senha: guarda_senha,
        cpf: guarda_cpf,
        email: guarda_email,
        data: guarda_data,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
    if (guarda_nome.length > 2 &&
        guarda_senha.length > 5 &&
        guarda_nome.trim().length != 0 &&
        guarda_senha.trim().length != 0
    ) {
        if (procura_usuario(usuario.nome)==-1) {
            usuarios.push(usuario)
            localStorage.setItem('cadastrados', JSON.stringify(usuarios))
            alert('Usuário Cadastrado!')
            location.assign('login.html')
        }else{
            alert("Usuário já existe!")
        }
    }
    if (guarda_nome.length <= 2 ||
        guarda_nome.trim().length == 0) {
        document.getElementById('alerta_nome').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_nome').innerHTML = ``
        }, 3000)
    }
    if (guarda_senha.length <= 6 ||
        guarda_senha.trim().length == 0) {
        document.getElementById('alerta_senha').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alerta_senha').innerHTML = ``
        }, 3000)
    }
}

let btn_nome = document.getElementById('nome')
let btn_senha = document.getElementById('senha')

btn_nome.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

function procura_usuario(guarda_nome) {
    let index = usuarios.findIndex((element) => {
        return element.nome == guarda_nome
    })
    return index
}