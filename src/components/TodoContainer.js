var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');
var TodoFooter = require('./TodoFooter');

var TodoContainer = React.createClass({
    componentDidMount() {
        TodoActions.load();
    },
    render() {
        return (
            <div>
                <h1>Get Shit Done <i className="ion-checkmark"></i></h1>
                <TodoForm />
                <TodoList todos={this.props.todos} />
                <TodoFooter todos={this.props.todos} />
            </div>
        )
    }
});


module.exports = TodoContainer;

