'use strict';

app.models.resourcesView = (function() {
    return {};
})();
app.models.resourcesView.resourcesViewList = (function() {

    var dataProvider = app.data.defaultprovider;

    var source = new kendo.data.DataSource({

        type: 'everlive',
        transport: {

            // Required by Backend Services
            typeName: 'Resources',
            dataProvider: dataProvider

        },

        schema: {
            model: {
                fields: {

                    Text: {
                        field: 'Text',
                        defaultValue: ''
                    },
                }

                ,
                icon: function() {
                    var i = 'globe';
                    return kendo.format('km-icon km-{0}', i);
                }

            }
        },

    });

    var viewModel = kendo.observable({
        dataSource: source,

        itemClick: function(e) {

        }
    });

    return {
        viewModel: viewModel
    };
})();