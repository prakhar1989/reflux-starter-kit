var Reflux = require('reflux'),
    request = require('superagent'),
    actions = require('../actions/actions');

var Repos = Reflux.createStore({
    listenables: [actions],
    data: {
        src: [], // source data
        repos: []
    },
    onUpdateLanguage(language) {
        this.getRepos(language.toLowerCase());
    },
    onFilterText(query) {
        if (query.length > 0) {
            var filteredRepos = this.data.src.filter(function(repo) {
                return ((repo.name.toLowerCase()).search(query) !== -1)
                        || (repo.description.toLowerCase()).search(query) !== -1;
            });
            this.setData(filteredRepos);
        } else {
            this.setData(this.data.src);
        }
    },
    getRepos(language) {
        var url = `https://api.github.com/search/repositories?q=:${language}&sort=stars&order=desc`;

        this.setData([]); // to show data loader

        request.get(url).end((err, res) => {
            var resp = JSON.parse(res.text);
            this.setData(resp.items);
            this.data.src = resp.items;
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
