require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000
app.get('/', async (req, res) => {
    return res.json('Api esta Ok!')
})

app.listen(port, () => {
    console.log(`Servidor Ligado na porta ${port}`);
})