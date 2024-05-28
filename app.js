const express = require ('express')
const shortId = require ('shortid')
const createHttpError= require('http-errors')
const mongoose = require ('mongoose')
const app = express('http-erros')

const path = require ('path')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views engine','ejs')

app.listen(3000, ()=>console.log('🌍server is on port 30000....🌍'))