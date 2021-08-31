const express = require('express');
const cors= require('cors')
const router = require('./router/routes');
const app = express();
require('./model/db')
app.use(express.json());
app.use(cors());
app.use('/api/tasks',router);
app.listen('8000',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is started at Port 8000");
    }
})