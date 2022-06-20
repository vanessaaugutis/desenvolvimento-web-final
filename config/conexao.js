const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/bancoweb";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;