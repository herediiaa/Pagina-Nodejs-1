const express = require('express')
const app = express()
const path = require('path')
/* settings */
app.set('port', 3000)
app.set("views", path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set("view engine", "ejs")


/* rutas */
app.use(require('./routes/'))

/* static files de css */
app.use(express.static(path.join(__dirname,'public')))

/* listening on server */
app.listen(app.get('port'), () => console.log("corriendo servidor en", app.get('port'))
)
console.log("server work") 