const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const a = 'Quoc'
    const b = 'Thang'

    const c = a + b

    res.send('I"m TQT, Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})