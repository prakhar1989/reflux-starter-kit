var React = require('react');
var Reflux = require('reflux');
var RepoStore = require('./stores/repos');
var Repo = require('./components/repocomponent');
var Actions = require('./actions/actions');

var App = React.createClass({
    mixins: [Reflux.connect(RepoStore)],
    changeLanguage(e) {
        var value = e.target.value;
        Actions.updateLanguage(value);
    },
    filterText(e) {
        var value = e.target.value;
        Actions.filterText(value);
    },
    render() {
        var items =  this.state.repos.map((repo, i) =>
                                { return <Repo key={i} repo={repo} /> });
        return (
            <div>
                <input type="text" placeholder="filter..." onChange={this.filterText} />
                <select onChange={this.changeLanguage}>
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

