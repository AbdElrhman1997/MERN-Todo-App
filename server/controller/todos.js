const Todo=require('../model/todo');

let Controller={
    getAll:async(req,res)=>{
        const todos=await Todo.find();
        res.json({todos});
    },
    getOne:async(req,res)=>{
        const todo=await Todo.findById(req.params.id);
        res.json({todo});
    },
    addOne:async(req,res)=>{
        const todo=new Todo({
            body:req.body.body
        });
        todo
        .save()
        .then(()=>{res.json(todo)})
        .catch(err=>console.log(err));
    },
    ubdateOne:async(req,res)=>{
        const todo=await Todo.findById(req.params.id);
        todo.isCompleted=req.body.isCompleted;
        todo.body=req.body.body;
        res.json(todo);
        todo.save();
    },
    deleteOne:async(req,res)=>{
        const result=await Todo.findByIdAndDelete(req.params.id);
        res.json(result);
    },
}


module.exports=Controller;