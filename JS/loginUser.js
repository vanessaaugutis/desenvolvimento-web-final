let xmlhttp = new XMLHttpRequest();

openLogin = function() {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');

    login.style.display = 'block';
    discord.style.display = 'none';
}

newPersonagem = function() {
    let novoPersonagem = document.getElementById('telaNovoPersonagem');

    novoPersonagem.style.display = 'flex';
}

fechaModal = function() {
    let novoPersonagem = document.getElementById('telaNovoPersonagem');

    novoPersonagem.style.display = 'none';
}

criaPersonagem = function() {
    let Nome = document.getElementById('nomePersonagem');
    let Forca = document.getElementById('forcaPersonagem');
    let Descricao = document.getElementById('descricaoPersonagem');
    let Foto = document.getElementById('fotoPersonagem');
    let noneAllFieldsPersonagem = document.getElementById('noneAllFieldsPersonagem');

    if(!Nome.value || !Forca.value || !Descricao.value || !Foto.value) {
        noneAllFieldsPersonagem.style.display = 'block';
        return;
    } else {
        noneAllFieldsPersonagem.style.display = 'none';
    }

    dadosPersonagem = {
        "nomePersonagem": Nome.value,
        "forca": Forca.value,
        "descricaoPersonagem": Descricao.value,
        "fotoPersonagem": Foto.value
    }

    console.log(dadosPersonagem);
    //Salvar no mongoDB
}

getListUnits = function () {
    //pegar personagens do MongoDB
}


//VERIFICA SE TEM TOKEN PARA MANTER O USUÁRIO LOGADO
// let token = meuStorage.getItem('token');
// if (token) {
    let login = document.getElementById('telaLogin');
    let discord = document.getElementById('telaDiscord');
    let busca = document.getElementById('telaBusca');

    login.style.display = 'block';
    discord.style.display = 'none';
    busca.style.display = 'none';

//}


validateLogin = function () {

    let email = document.getElementById("emailUser");
    let password = document.getElementById("passwordUser");
    let userValid = false;

    login = {
        "email": email.value,
        "senha": password.value
    }

    console.log(login);
    //verificar se existe no mongoDB
    
    // if (existir) {
    //     meuStorage.setItem('token', email.value);
             
        let login = document.getElementById('telaLogin');
        let busca = document.getElementById('telaBusca');
        
        login.style.display = 'none';
        busca.style.display = 'block';
    // } else {
    //     alert("Usuário não encontrado");
    // }
    
}


