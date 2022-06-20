buttonClick = function () {
    let inputEmail = document.getElementById('emailUser');
    let inputPassword = document.getElementById('passwordUser');
    let invalidEmail = document.getElementById('invalidEmail');
    let invalidPassword = document.getElementById('invalidPassword');

    if (!inputEmail.value || inputEmail.value.length < 3) {
        inputEmail.style.border = '2px solid red';
        invalidEmail.style.display = 'block';

    }
    if (!inputPassword.value || inputPassword.value.length < 3) {
        inputPassword.style.border = '2px solid red';
        invalidPassword.style.display = 'block';

    }

    if (!inputEmail.value || inputEmail.value.length < 3 || !inputPassword.value || inputPassword.value.length < 3) {
        return;
    }
    invalidEmail.style.display = 'none';
    invalidPassword.style.display = 'none';
    inputEmail.style.border = 'none';
    inputPassword.style.border = 'none';
    validateLogin();
}

pegarDados = function () {
    let Nome = document.getElementById('nome');
    let Senha = document.getElementById('senha');
    let ConfirSenha = document.getElementById('confirmsenha');
    let Email = document.getElementById('email');
    let noneAllFields = document.getElementById('noneAllFields');

    if(!Nome.value || !Senha.value || !ConfirSenha.value || !Email.value) {
        noneAllFields.style.display = 'block';
        return;
    } else {
        noneAllFields.style.display = 'none';
    }

    dados = {
        "nome": Nome.value,
        "senha": Senha.value,
        "email": Email.value
    }

    console.log(dados); 
    //salvar no mongoDB

    let busca = document.getElementById('telaBusca');
    let cadastro = document.getElementById('telaCadastro');

    busca.style.display = 'block';
    cadastro.style.display = 'none';


}

goToCadastro = function () {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');
    let busca = document.getElementById('telaBusca');
    let cadastro = document.getElementById('telaCadastro');

    login.style.display = 'none';
    discord.style.display = 'none';
    busca.style.display = 'none';
    cadastro.style.display = 'block';
}

searchItem = function () {
    let inputSearch = document.getElementById('search-text');
    //buscar no MongoDB
}

