const router = require('express').Router();
const controller = require('../controller/todoController');

router
    .get("/", controller.getAllTodoTask)
    .post('/', controller.addTodo)
    .put('/', controller.updateTodo)
    .delete('/', controller.deleteTodoTask)
    

module.exports = router;