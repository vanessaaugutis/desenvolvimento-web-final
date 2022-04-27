buttonClick = function () {
    let login = document.getElementById('telaLogin');
    let busca = document.getElementById('telaBusca');
    let inputEmail = document.getElementById('emailUser');
    let inputPassword = document.getElementById('passwordUser');
    if (!inputEmail.value || !inputPassword.value) {
        alert("Preencha o e-mail e senha.");
        return;
    }
    if (inputEmail.value.length < 3 || inputPassword.value.length < 3) {
        alert("Digite novamente o e-mail e senha.");
        return;
    }
    login.style.display = 'none';
    busca.style.display = 'block';
}

