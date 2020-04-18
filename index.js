const express = require('express')
const config = require('./configs')
const router = require('./routes')
const parser = require('body-parser')
const app = express()
const fileUpload = require('express-fileupload');

app.use(parser.json({limit: '50mb'}))
app.use(parser.urlencoded({extended: true, limit: '50mb'}))
app.use(router)
app.use(fileUpload());


app.listen(config.PORT, () => {
  console.log(`API listening on PORT ${config.PORT}`)
})


