var Reflux = require('reflux'),
    actions = require('../actions/actions');

var Store = Reflux.createStore({
    listenables: [actions],
    data: { msg: "" },
    onTestAction() {
        // dummy handler for action
        this.data.msg = this.data.msg === "you clicked!" ? "you clicked again!" : "you clicked!";
        // publish changes to view
        this.trigger(this.data);
    },
    init() {
        // initial values
        this.data.msg = "Click me";
        this.trigger(this.data);
    },
    getInitialState() {
        // export state for view
        return this.data
    }
});

module.exports = Store;
