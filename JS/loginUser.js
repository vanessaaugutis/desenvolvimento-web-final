//cria o método de http para conectar com api
let xmlhttp = new XMLHttpRequest();

openLogin = function() {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');

    login.style.display = 'block';
    discord.style.display = 'none';
}

newPublicUser = function() {
    console.log("XXXXX");
}

// getListUnits = function () {
//     xmlhttp.open(
//         'GET', 'https://www.cheapshark.com/api/1.0/games?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20', true
//     );

//     xmlhttp.onreadystatechange = function () {
//         if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 400) {
//             alert("Erro ao carregar");
//         } else 
//         if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
//             let retorno = JSON.parse(xmlhttp.responseText);

//             let telaList = document.getElementById('list-units');
            
//             for(let i=0; i <= 19; i++) {
//                 if(retorno[i]?.info) {
//                     telaList.appendChild(createMenuItem(i, retorno[i].info.title));
//                 }
                
//             }
//         }
//     };

//     xmlhttp.setRequestHeader("Content-Type", "application/json");
//     xmlhttp.setRequestHeader("Access-Control-Allow-Origin",  "*");
//     xmlhttp.send();
// }

// function createMenuItem(id, name) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     span.textContent = name;
//     li.textContent = id + '- ';
//     li.appendChild(span);
//     return li;
// }

//VERIFICA SE TEM TOKEN PARA MANTER O USUÁRIO LOGADO
// if (token) {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');
    let busca = document.getElementById('telaBusca');

    login.style.display = 'none';
    discord.style.display = 'none';
    busca.style.display = 'block';

//}


validateLogin = function () {

    // xmlhttp.open(
    //     'POST', 'https://reqres.in/api/login', true
    // );

    // let email = document.getElementById("emailUser");
    // let password = document.getElementById("passwordUser");
    // let userValid = false;

    // xmlhttp.onreadystatechange = function () {
    //     if(xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 400) {
    //         alert("E-mail ou senha incorretos");
    //     } else 
    //     if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
    //         let retorno = JSON.parse(xmlhttp.responseText);
    //         meuStorage.setItem('token', retorno.token);
             
    //         userValid = true;
    //         let login = document.getElementById('telaLogin');
    //         let busca = document.getElementById('telaBusca');
        
    //         if (userValid) {
    //             login.style.display = 'none';
    //             busca.style.display = 'flex';
    //         }
    //     }
    // };

    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    // xmlhttp.send(JSON.stringify({ "email": email.value, "password": password.value }));
}


