var React = require('react');
var Reflux = require('reflux');
var Store = require('./stores/store');
var Actions = require('./actions/actions');

var App = React.createClass({
    mixins: [Reflux.connect(Store)],
    handleClick() {
        // trigger dummy action
        Actions.testAction();
    },
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.msg}</button>
        )
    }
});

React.render( <App />,  document.getElementById('app'));

