// importando o mongoose
const mongoose = require('mongoose')

// criando uma estrutura para a collection checklist
const checklistSchema = mongoose.Schema({
    //nome do campo, tipo e se ele é obrigatório ou não
    name: {type: String, required: true},
    tasks: [{
        // associando a collection task por referência
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

// exportando o módulo
module.exports = mongoose.model('Checklist', checklistSchema)

