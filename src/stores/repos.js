var Reflux = require('reflux');
var request = require('superagent');

var Repos = Reflux.createStore({
    data: { repos: [] },
    init() {
        var query = "react",
            language = "javascript",
            url = `https://api.github.com/search/repositories?q=${query}:${language}&sort=stars&order=desc`;

        request.get(url).end((err, res) => {
            var resp = JSON.parse(res.text);
            this.data.repos = resp.items;
            this.trigger(this.data);
        });
    },
    getInitialState() {
        return this.data
    }
});

module.exports = Repos;
