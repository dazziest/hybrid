define([
        'views/view',
        'text!views/todos/todos.html'
], function (View, html) {

        var view, navbar, category;

        var todoDatasource = new kendo.data.DataSource({
                data: [
                        {title: 'Talk to corporate', category: 'Work'},
                        {title: 'Promote synergy', category: 'Work'},
                        {title: 'Eat a bagel', category: 'Personal'},
                        {title: 'Eat some chicken strips', category: 'Personal'}
                ]
        });

        var model = kendo.observable({
                todoDatasource: todoDatasource
        });

        var events = {
                init: function (e) {
                        navbar = e.view.header.find('.km-navbar').data('kendoMobileNavBar');
                },
                afterShow: function (e) {
                        category = e.view.params.category || 'Work';
                        todoDatasource.filter({field: 'category', operator: 'eq', value: category});
                        navbar.title(category);
                }
        };

        view = new View('todos', html, model, events);

        //The $.subscribe method there at the end is part of our tiny PubSub library and that function will be called whenever the /newTodo/add event is fired
        $.subscribe('/newTodo/add', function (e, text) {
                todoDatasource.add({title: text, category: category});
        });
        return view;
});