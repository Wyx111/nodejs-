"use strcit"
const express =require('express')
const app =express()
const request = require('request')
app.get('/query',(req,res)=>{
    const type = req.query.type
    const postid= req.query.postid
    // 允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    request('http://www.kuaidi100.com/query?type='+type+'&postid='+postid,function(err,rep){
       res.send(rep.body);
    });

    // res.send('')
}).listen(3002,()=>{
    console.log('服务器启动成功')
})