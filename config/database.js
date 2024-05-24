// arquivo de configuração do mongoose

// importando o mongoDB
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
    // se a conexão acontecer, a mensagem será exibida
    .then(() => console.log('Conectado ao MongoDB'))
    // se não der certo, o erro será exibido
    .catch((err) => console.error(err))