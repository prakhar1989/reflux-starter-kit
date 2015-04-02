var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = React.createClass({
    propTypes: {
        todos: React.PropTypes.array
    },
    render: function() {
        var todos = this.props.todos;
        var items = todos.map(todo => {
            return <TodoItem todo={todo} key={todo.key} />;
        });
        if (todos.length > 0) {
            return <ul> {items} </ul>
        } else {
            return <p>Nothign to show here.. add some todos!</p>
        }
    }
});

module.exports = TodoList;
