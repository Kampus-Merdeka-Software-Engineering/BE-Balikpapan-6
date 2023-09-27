const express = require('express')

const productRoutes = express.Router()

productRoutes.get("/", (req, res) => {
  res.send("response dari endpoint product")
})

module.exports = { productRoutes }