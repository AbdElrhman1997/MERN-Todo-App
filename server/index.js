const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const routes = require('./routes/todos');
const PORT=process.env.PORT||5000;

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
    );
    next();
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/todos',routes)


mongoose.connect('mongodb+srv://Todo-App:todo-app@cluster0.gfznlld.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`app runing in port ${PORT}...`)
    })
})
.catch(err=>console.log(err));

