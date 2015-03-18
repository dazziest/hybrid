'use strict';

app.models.auditView = (function() {
    return {};
})();
app.models.auditView.auditViewList = (function() {

    var dataProvider = app.data.defaultprovider;

    var source = new kendo.data.DataSource({

        type: 'everlive',
        transport: {

            // Required by Backend Services
            typeName: 'Audit',
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

        serverFiltering: true,

        serverSorting: true,
        serverPaging: true,
        pageSize: 50

    });

    var viewModel = kendo.observable({
        dataSource: source,

        currentItem: null,

        itemClick: function(e) {

            app.mobileApp.navigate('#auditView/details.html?uid=' + e.dataItem.uid);
        },
        detailsShow: function(e) {
            var item = e.view.params.uid,
                itemModel = source.getByUid(item);

            viewModel.set('currentItem', itemModel);

        }
    });

    return {
        viewModel: viewModel
    };
})();