const express = require('express');

const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res) => res.send('hello'));

app.listen(8080, ()=>{
 console.log('sever started on port 8080');
});





