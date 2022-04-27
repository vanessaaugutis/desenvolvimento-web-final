//cria o método de http para conectar com api
let xmlhttp = new XMLHttpRequest();

//Abre a api desejada
xmlhttp.open(
	'GET', 'https://reqres.in/api/users', true
);

xmlhttp.onreadystatechange = function () {
    if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
        let retorno = JSON.parse(xmlhttp.responseText);
        console.log(retorno.data);
    }
};

xmlhttp.send();

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
        if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 400) {
            alert("E-mail ou senha incorretos");
        } else if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
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

