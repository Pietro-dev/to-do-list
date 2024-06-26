const express = require('express')

// ferramenta do express para manipular e organizar as rotas
const router = express.Router()

// importantando o model checklist
const Checklist = require('../models/checklist')

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', { checklists: checklists })
    }catch(error){
        res.status(500).render('pages/error', {error: "Erro ao exibir as Listas"})
    }
})

router.get('/new', async(req, res) => {
    try{
        let checklist = new Checklist()
        res.status(200).render('checklists/new', { checklist: checklist })
    }catch(error){
        res.status(500).render('pages/error', { error: 'Erro ao carregar o formulário'})
    }
})

router.get('/:id/edit', async(req, res) => {
    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/edit', { checklist: checklist })
    }catch(error){
        res.status(500).render('pages/error', {error: 'Erro ao exibir a edição lista de tarefas'})
    }
})

router.post('/', async (req, res) => {
    let{ name } = req.body.checklist
    let checklist = new Checklist({name})
    try{
        await checklist.save()
        res.redirect('/checklists')
    }catch(error){
        res.status(422).render('checklists/new', { checklists: { ...checklist, error }})
    }
})

router.get('/:id', async (req, res) => {
    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', { checklist: checklist })

    }catch(error){
        res.status(422).render('pager/error', {error: "Erro ao exibir as listas de tarefas"})
    }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body.checklist
    let checklist = await Checklist.findById(req.params.id)
    try{
        checklist.name = name
        await checklist.save()
        res.redirect('/checklists')
    }
    catch(error){
        let errors = error.errors
        res.status(422).render('checklists/edit', {checklist: {...checklist, errors}})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        let checklist = await Checklist.findByIdAndDelete(req.params.id)
        res.redirect('/checklists')
    }catch(error){
        res.status(500).render('pages/error', {error: 'Erro ao deletar a lista de tarefas'})
    }
})

module.exports = router