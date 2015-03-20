define([
        'views/todos/todos',
        'views/categories/categories',
        'views/newTodo/newTodo',
        'views/newCategory/newCategory'
], function () {
        // create a global container object
        var App = window.App = window.App || {};

        App.init = function () {
                // intialize the application
                App.mobile = new kendo.mobile.Application(document.body, {skin: 'flat'});
        };
        
        return App;

});