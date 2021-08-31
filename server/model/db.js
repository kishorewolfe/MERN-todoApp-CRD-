const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
},(err)=>{
    if(err){
        console.log(`The err is occured ${err}`);
    }
    else{
        console.log("DB connection Success");
    }
})