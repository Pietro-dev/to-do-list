const express = require('express')

// ferramenta do express para manipular e organizar as rotas
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

module.exports = router