var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoForm = React.createClass({
    getInitialState() {
        return {
            showWarning: false
        }
    },
    toggleWarning(e) {
        e.preventDefault();
        this.setState({
            showWarning: !this.state.showWarning
        });
    },
    handleSubmit(e) {
        e.preventDefault();
        var text = this.refs.todo.getDOMNode().value.trim();
        if (text.length === 0) {
            this.setState({
                showWarning: true
            });
        } else {
            TodoActions.addTodo(text);
            this.refs.todo.getDOMNode().value = "";
            this.setState({
                showWarning: false
            });
        }
    },
    render() {
        var toolTipClass = {
            display: this.state.showWarning ? "block" : "none"
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="what needs to be done" ref="todo"/>
                <input type="submit" className="pure-button pure-button-primary" value="+" />
                <p style={toolTipClass} className='error'>You need to add a title <span href="#" onClick={this.toggleWarning}>x</span></p>
            </form>
        )
    }
});

module.exports = TodoForm;
