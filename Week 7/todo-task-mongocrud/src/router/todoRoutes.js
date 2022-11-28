const router = require('express').Router();
const controller = require('../controller/todoController');

router.get("/", controller.getAllTodoTask);

module.exports = router;