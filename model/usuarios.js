var conexao = require('../config/conexao');

var UsuarioSchema = conexao.Schema({
    nome: { type: String },
    senha: { type: String },
    email: { type: String }

})

module.exports = conexao.model("Usuario", UsuarioSchema);