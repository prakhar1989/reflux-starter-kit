var React = require('react');
var Reflux = require('reflux');
var RepoStore = require('./stores/repos');
var Repo = require('./components/repocomponent');

var App = React.createClass({
    mixins: [Reflux.connect(RepoStore)],
    render() {
        var repos = this.state.repos;
        return (
            <ul>
            {repos.map(function(repo, i) {
                return <Repo key={i} repo={repo} />
            })}
            </ul>
        )
    }
});

React.render(<App />, document.getElementById('example'));

