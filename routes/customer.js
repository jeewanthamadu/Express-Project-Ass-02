const express = require('express');
const router = express.Router()
const mysql = require('mysql')
const db = require('../config/db.config')


const connection = mysql.createConnection(db.database)

connection.connect(function(err) {
    if(err){
        console.log(err);
    }else{
        console.log('connect to the sql server');
    }
})

router.get('/',(req,res)=>{
    res.send('get customer')
})

router.get('/customer-name',(req,res)=>{
    res.send('get customer-name')
})

router.post('/',(req,res)=>{
    res.send('post customer')
})


module.exports=router