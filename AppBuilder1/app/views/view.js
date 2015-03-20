define(function () {
        
        var App = window.App = window.App || {};
        
        var View = kendo.Class.extend({
                init: function (name, template, model, events) {
                        
                        // append the template to the DOM
                        this.html = $(template).appendTo(document.body);

                        // expose the model and events off the global scope
                        App[name] = {model: model || {}, events: events || {}};
                }
        });

        return View;

});