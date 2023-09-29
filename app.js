const express = require('express')

const fs = require('fs');

const { productRoutes } = require('./routes/');
const PORT  = process.env.PORT || 3000;

const router = express.Router();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Halo dari Aplikasi Express")
})

app.get('/login', (req, res) => {
    console.log(__dirname)
    res.sendFile('./public/login.html', { root: __dirname })
})

app.use("/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Aplikasi sudah berjalan pada http://localhost:${PORT}`)
})