import express from 'express'

import os from 'os'
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Version 2: Hello World! from '+os.hostname())
})
w
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})