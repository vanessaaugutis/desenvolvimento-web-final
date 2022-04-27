let meuStorage = localStorage;
let token = meuStorage.getItem('token');

//VERIFICA SE TEM TOKEN PARA MANTER O USUÁRIO LOGADO
// if (token) {
//     let login = document.getElementById('telaLogin');
//     let discord = document.getElementById('telaDiscord');
//     let busca = document.getElementById('telaBusca');

//     login.style.display = 'none';
//     discord.style.display = 'none';
//     busca.style.display = 'block';
// }

//cria o método de http para conectar com api
let xmlhttp = new XMLHttpRequest();

openLogin = function() {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');

    login.style.display = 'flex';
    discord.style.display = 'none';
}

buttonClick = function () {

    xmlhttp.open(
        'POST', 'https://reqres.in/api/login', true
    );

    let email = document.getElementById("emailUser");
    let password = document.getElementById("passwordUser");
    let userValid = false;

    xmlhttp.onreadystatechange = function () {
        // if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 400) {
        //     alert("E-mail ou senha incorretos");
        // } else 
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
            let retorno = JSON.parse(xmlhttp.responseText);
            meuStorage.setItem('token', retorno.token);
             
            userValid = true;
            let login = document.getElementById('telaLogin');
            let busca = document.getElementById('telaBusca');
        
            if (userValid) {
                login.style.display = 'none';
                busca.style.display = 'block';
            }
        }
    };

    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({ "email": email.value, "password": password.value }));
}

