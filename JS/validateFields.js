buttonClick = function () {
    let inputEmail = document.getElementById('emailUser');
    let inputPassword = document.getElementById('passwordUser');
    if (!inputEmail.value || !inputPassword.value) {
        inputEmail.style.border = '2px solid red';
        inputPassword.style.border = '2px solid red';
        alert("Preencha o e-mail e senha.");
        return;
    }
    if (inputEmail.value.length < 3 || inputPassword.value.length < 3) {
        inputEmail.style.border = '2px solid red';
        inputPassword.style.border = '2px solid red';
        alert("E-mail e senha não devem possuir menos que 3 caracteres");
        return;
    }

    inputEmail.style.border = 'none';
    inputPassword.style.border = 'none';
    validateLogin();
}

