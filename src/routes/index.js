const express = require('express')
const router = express.Router()

/* Ruta localhost:3000*/
router.get("/", (req, res) => {
    res.render('index.html', { title: "Page Hered" })
})

/* Ruta localhost:3000/about */
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Page Hered' })
})
module.exports = router