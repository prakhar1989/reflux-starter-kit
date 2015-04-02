var Reflux = require('reflux'),
    TodoActions = require('../actions/TodoActions'),
    _ = require('underscore');

var Todo = function(key, title, isChecked, createdAt) {
    this.key = key;
    this.title = title;
    this.isChecked = isChecked;
    this.createdAt = createdAt;
};

var Store = Reflux.createStore({
    listenables: [TodoActions],
    data: {
        list: []
    },
    init() {
        this.listenTo(TodoActions.load, this.fetchData);
    },
    getInitialState() {
        return this.data;
    },
    fetchData() {
        var data = localStorage.getItem('todos');
        this.todoCounter = JSON.parse(localStorage.getItem('counter') || 0);

        var list = data === null ? [] : JSON.parse(data);
        this.updateList(
            list.map(obj => new Todo(obj.key, obj.title, obj.isChecked,
                    obj.createdAt, obj.isDeleted))
        );
    },
    updateList(list) {
        this.data.list = list;
        localStorage.setItem('todos', JSON.stringify(list));
        this.trigger(this.data);
    },
    onAddTodo(todoTitle) {
        // update counter
        this.todoCounter++;
        localStorage.setItem('counter', this.todoCounter);

        // add todo
        var todo = new Todo(this.todoCounter, todoTitle, false, Date.now());
        this.updateList([todo].concat(this.data.list));
    },
    onRemoveTodo(key) {
        var list = _.reject(this.data.list, todo => {
            return todo.key === key;
        });
        this.updateList(list);
    },
    onCompleteTodo(key) {
        var todo = _.find(this.data.list, todo => {
            return todo.key === key;
        });
        todo.isChecked = !todo.isChecked;
        this.updateList(this.data.list);
    },
    onEditTodo(key, title) {
        var todo = _.find(this.data.list, todo => {
            return todo.key === key;
        });
        todo.title = title;
        this.updateList(this.data.list);
    }
});

module.exports = Store;
