// importação do express
const express = require('express')
// const checkListRouter = require('./src/routes/checklist')
// require('./config/database')

// constante para usar todos os métodos do express
const app = express()

// criando a rota de início do app
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.get('/json', (req, res) => {
    res.json({title: 'Tarefa x', done: true})
})

// inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})

// app.use(express.json())

// app.use('/checklists', checkListRouter)