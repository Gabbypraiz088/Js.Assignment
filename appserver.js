require('dotenv').config();

const express = require('express')
const path = require('path') // built in node module
const app = express()
const port = process.env.PORT;

app.use(express.json())

// --- NEW: Serve static files from the "public" folder ---
app.use(express.static('public'));   

app.get('/', (req, res) => {
  res.send('My Week2 API!')
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`user [${userId}] profile`);
});

app.post('/user', (req, res) => {
const { name, email } = req.body;
if (!name || !email) {
        return res.status(400).json({
            error: "Missing Data",
            message: "Both 'name' and 'email' are required to create a user."
        });
      }
res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
