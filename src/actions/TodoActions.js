var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "load",
    "completeTodo",
    "addTodo",
    "editTodo",
    "removeTodo",
    "completeAll",
    "resortList"
]);

module.exports = TodoActions;
