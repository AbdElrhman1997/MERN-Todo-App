const express=require('express');
const Controller = require('../controller/todos');
const routes=express.Router();

routes.get('/',Controller.getAll);
routes.post('/',Controller.addOne);
routes.delete('/:id',Controller.deleteOne);
routes.patch('/:id',Controller.ubdateOne);

module.exports=routes;