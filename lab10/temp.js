const express = require('express')
const bodyParser =require('body-parser') 
const app =express() 
const port = 3000
app.use(express.static('../library'))
var mysql=require('mysql')
app.engine('pug', require('pug').__express)
const path=require("path")


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))


app.listen(port, () => console.log('Example app listening on port 3000'))