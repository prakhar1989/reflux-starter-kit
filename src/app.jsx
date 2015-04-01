var React = require('react');
var Reflux = require('reflux');
var RepoStore = require('./stores/repos');
var Repo = require('./components/repocomponent');
var Actions = require('./actions/actions');

var App = React.createClass({
    mixins: [Reflux.connect(RepoStore)],
    handleonChange(e) {
        var value = e.target.value;
        Actions.updateLanguage(value);
    },
    render() {
        var items =  this.state.repos.map((repo, i) =>
                                { return <Repo key={i} repo={repo} /> });
        return (
            <div>
                <select onChange={this.handleonChange}>
                    <option>Javascript</option>
                    <option>Ruby</option>
                    <option>Python</option>
                    <option>Java</option>
                </select>
                <ul> {items.length > 0 ? items : "Loading data..."} </ul>
            </div>
        )
    }
});

React.render(<App />, document.getElementById('example'));

