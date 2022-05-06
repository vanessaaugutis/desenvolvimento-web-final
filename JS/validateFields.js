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

searchItem = function () {
    let inputSearch = document.getElementById('search-text');
    let url = 'https://www.cheapshark.com/api/1.0/games?id=' + inputSearch.value;

    xmlhttp.open(
        'GET', url, true
    );

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 400) {
            alert("Erro ao buscar");
        } else
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                let retorno = JSON.parse(xmlhttp.responseText);
                if (!retorno.info) {
                    alert("ID INVÁLIDO");
                    getListUnits();
                } else {
                    let telaList = document.getElementById('list-units');
                    while (telaList.firstChild) {
                        telaList.removeChild(telaList.firstChild);
                    }

                    telaList.appendChild(createMenuItem(inputSearch.value, retorno.info.title));
                }
            }
    };

    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.send();
}

