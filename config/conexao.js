const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/dadosapi";
const url_prod ="mongodb+srv://bancoweb:bancoweb123@cluster0.z7fhf9a.mongodb.net/bancodedados"

mongoose.connect(url_prod, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;