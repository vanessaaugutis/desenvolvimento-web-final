buttonClick = function () {
    let login = document.getElementById('telaLogin');
    let busca = document.getElementById('telaBusca');
    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.getElementById('inputPassword');
    if (!inputEmail.value || !inputPassword.value) {
        return;
    }
    if(inputEmail.value.lenght < 3 || inputPassword.value.lenght < 3) {
        return;
    }
    login.style.display = 'none';
    busca.style.display = 'block';
}

