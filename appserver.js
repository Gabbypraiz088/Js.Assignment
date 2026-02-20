const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('My Week2 API!')
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`user [${userId}] profile`);
});

app.post('/user', (req, res) => {
const { name, email } = req.body;
res.send(`Hello ${name}!`)});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
