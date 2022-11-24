const Todo = require("../model/Todo");

//add a todo task

//update a todo task

//delete a todo task

//Retrieve all todo task
exports.getAllTodoTask = async (req, res) => {
    try {
        let todos = await Todo.find();
        res.status(200).json({
            success: true,
            message: "Todo task found",
            todos
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        })
    }
}

//retrieve all todo task