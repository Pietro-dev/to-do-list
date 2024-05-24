const express = require('express')

// ferramenta do express para manipular e organizar as rotas
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()
})

module.exports = router