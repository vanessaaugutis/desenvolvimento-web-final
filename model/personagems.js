var conexao = require('../config/conexao');

var PersonagemsSchema = conexao.Schema({
    nome: { type: String },
    força: { type: String },
    avatar: { type: String }

})

module.exports = conexao.model("Personagem", PersonagensSchema);