var conexao = require('../config/conexao');

var PersonagemSchema = conexao.Schema({
    nome: { type: String },
    forca: { type: String },
    descricao: { type: String },
    foto: { type: String }

})

module.exports = conexao.model("Personagem", PersonagemSchema);