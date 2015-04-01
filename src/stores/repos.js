var Reflux = require('reflux'),
    request = require('superagent'),
    actions = require('../actions/actions');

var Repos = Reflux.createStore({
    listenables: [actions],
    data: { repos: [] },
    onUpdateLanguage(language) {
        this.getRepos(language.toLowerCase());
    },
    getRepos(language) {
        var url = `https://api.github.com/search/repositories?q=:${language}&sort=stars&order=desc`;

        this.setData([]); // to show data loader

        request.get(url).end((err, res) => {
            var resp = JSON.parse(res.text);
            this.setData(resp.items);
        });
    },
    setData(repos) {
        this.data.repos = repos;
        this.trigger(this.data);
    },
    init() {
        // get all repos for JS by default
        this.getRepos("javascript");
    },
    getInitialState() {
        return this.data
    }
});

module.exports = Repos;
