var conexao = require('../config/conexao');

var UsuarioSchema = conexao.Schema({
    nome: { type: String },
    força: { type: String },
    avatar: { type: String }

})

module.exports = conexao.model("Usuario", UsuarioSchema);