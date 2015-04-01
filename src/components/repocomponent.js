var React = require('react');

var Repo = React.createClass({
    render() {
        var repo = this.props.repo;
        return (
            <li>
                <a href={repo.html_url}>{repo.name}</a> - <span>{repo.description}</span>
            </li>
        )
    }
});

module.exports = Repo;