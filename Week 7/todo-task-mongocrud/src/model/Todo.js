const {Schema, model} = require("mongoose");

const todoSchema = new Schema({
    _id: {
        type: Number,
        require: true,
        unique: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    isTodo: {
        type: Boolean,
        default: true,
    },
}, 
    {timestamp: true}
);

const todoModel = model("todos", todoSchema);

module.exports = todoModel;