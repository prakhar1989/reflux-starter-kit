var React = require('react');
var Reflux = require('reflux');

var TodoStore = require('./stores/TodoStore');
var TodoContainer = require('./components/TodoContainer');

var App = React.createClass({
    mixins: [Reflux.connect(TodoStore)],
    render() {
        return (
          <TodoContainer todos={this.state.list} />
        )
    }
});

React.render( <App />,  document.getElementById('app'));

