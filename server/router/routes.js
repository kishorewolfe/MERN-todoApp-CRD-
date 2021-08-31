const express= require('express');
const Task = require('../model/models')
const router = express.Router();
router.get('/',(req,res)=>{
   Task.find((err,docs)=>{
       if(err){
           console.log(`The error is ${err}`);
       }
       else{
           res.json(docs);
       }

   })

   
})
router.post('/',(req,res)=>{
    const task = new Task(req.body)
    task.save((err,doc)=>{
        if(err) {
            console.log(err)
        }
        else{
            res.json(doc)

        }

    })
})
router.put('/:id',(req,res)=>{
    Task.findOneAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    },(err,doc)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json(doc);
        }
    })
})

router.delete('/:id',(req,res)=>{

    Task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            console.log(`the error is ${err}`)
        }
        else{
            res.json(doc);
        }

    })
    
})
module.exports=router;