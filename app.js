const express = require('express')
const checklistsRouter = require('./src/routes/checklist')

const app = express()

app.use(express.json())

// usando a rota checklist como um middleware
app.use('/checklists', checklistsRouter)

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})