const  {Schema, model} = require('mongoose');

todoSchema = new Schema ({
    _id: {
        type: Number,
        required: true,
        unique: true,
    },

    title: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: false,
    },
},
    { timestamp: true }
);

const todoModel = model("todos", todoSchema);

module.exports = todoModel;