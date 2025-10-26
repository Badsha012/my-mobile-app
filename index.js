const express=require('express');
const phones=require('./phone.json')
const app=express();
const port =5000;

app.get('/',(req,res)=>{
    res.send('my informaion comming soon moon hon');
})
app.get('/phone',(req,res)=>{
    res.send(phones);
   } )

   app.get('/phone/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log('i need for id:',id);
    const phone=phones.find(phone => phone.id===id) || {};
    res.send(phone);
   })
app.listen(port,()=>{
    console.log(`My phone server is running on port:${port} `);
})