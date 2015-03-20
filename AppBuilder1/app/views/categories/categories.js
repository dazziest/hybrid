define([
        'views/view',
        'text!views/categories/categories.html'
], function (View, html) {

        var categoriesDatasource = new kendo.data.DataSource({
                data: [
                        {name: 'Work'},
                        {name: 'Personal'},
                        {name: 'Other'}
                ]
        });

        var model = {
                categoriesDatasource: categoriesDatasource,
                title: 'Title'
        };

        var view = new View('categories', html, model);

        $.subscribe('/newCategory/add', function (e, text) {
                categoriesDatasource.add({name: text});
        });
        
        return view;
});