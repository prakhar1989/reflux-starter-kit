var React = require('react');

// some ES6 B-)
var Button = React.createClass({
    render() {
        return <button>{this.props.children}</button>
    }
});

var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello React!</h1>
                <Button>Click here</Button>
            </div>
        )
    }
});

// Hello World
React.render(<Hello />, document.getElementById('example'));

