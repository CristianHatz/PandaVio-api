const express = require('express')
const config = require('./configs')
const router = require('./routes')
const parser = require('body-parser')
const app = express()

app.use(parser.json({limit: '50mb'}))
app.use(parser.urlencoded({extended: true, limit: '50mb'}))
app.use(router)

app.use((req, res) => {
  res.setHeader('Content-Type', 'test/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.use((err, req, res, next) => {
  if(err){
    res
      .status(err.code || 500)
      .json({success: false, error: err.message})
  }
  else{
    next()
  }
})

app.listen(config.PORT, () => {
  console.log(`API listening on PORT ${config.PORT}`)
})
