var React = require('react'),
    TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({
    getInitialState: function() {
        return {
            checked: this.props.todo.isChecked
        }
    },
    handleChange() {
        this.setState({
            checked: !this.state.checked
        });
        TodoActions.completeTodo(this.props.todo.key);
    },
    handleDelete() {
        TodoActions.removeTodo(this.props.todo.key);
    },
    handleEdit() {
        var title = prompt("Enter new todo title", this.props.todo.title);
        TodoActions.editTodo(this.props.todo.key, title);
    },
    render() {
        var todo = this.props.todo;
        return (
            <li key={todo.key} className="todoItem">
                <div>
                    <input type="checkbox"
                        onChange={this.handleChange}
                        checked={this.state.checked || todo.isChecked} />
                    <span className={this.state.checked ? "complete" : "incomplete"}>{todo.title}</span>
                    <i className="ion-close-circled" onClick={this.handleDelete}></i>
                    <i className="ion-edit" onClick={this.handleEdit}></i>
                </div>
            </li>
        )
    }
});

module.exports = TodoItem;
