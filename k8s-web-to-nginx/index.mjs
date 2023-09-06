import express from 'express'
import fetch from 'node-fetch'

import os from 'os'
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Version 2: Hello World! from '+os.hostname())
})

app.get('/nginx', async(req, res)=>{
    const url = 'http://nginx';
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})