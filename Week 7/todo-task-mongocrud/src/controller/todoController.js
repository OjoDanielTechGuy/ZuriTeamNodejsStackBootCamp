const Todo = require("../model/Todo");

//Add a Todo Task to a task

//Update a particular Todo task

//Delete all todo task

//Retrieve all Todo tasks
exports.getAllTodoTask = async (request, response) => {
    try {
        let todos = await Todo.find();
        if(todos.length == 0) 
        return response.statu(404).json({
            success: false,
            message: "No Todo Task found"
        });

        response.status(200).json({
            success: true,
            message: "All Todo Task retrieved",
            todos,
        });

    } catch (error) {
        response.status(500), json({
        success: false,
        message: 'Interal Server Error',
        error: error.message,
        });
    }
};