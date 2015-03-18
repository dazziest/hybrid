'use strict';

app.models.patientsView = (function() {
    return {};
})();
app.models.patientsView.patientsViewList = (function() {

    var dataProvider = app.data.defaultprovider;

    var processImage = function(img) {
        if (!img) {
            var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
            img = 'data:image/png;base64,' + empty1x1png;
        } else if (img.slice(0, 4) !== 'http' &&
            img.slice(0, 2) !== '//' &&
            img.slice(0, 5) !== 'data:') {
            var setup = dataProvider.setup;
            img = setup.scheme + ':' + setup.url + setup.apiKey + '/Files/' + img + '/Download';
        }

        return img;
    };

    var source = new kendo.data.DataSource({

        type: 'everlive',
        transport: {

            // Required by Backend Services
            typeName: 'Patients',
            dataProvider: dataProvider

        },

        change: function(e) {
            var data = this.data();
            for (var i = 0; i < data.length; i++) {
                data[i].testUrl = processImage(data[i].test);
            }
        },

        schema: {
            model: {
                fields: {

                    Text: {
                        field: 'Text',
                        defaultValue: ''
                    },
                    subText: {
                        field: 'subText',
                        defaultValue: ''
                    },
                    test: {
                        field: 'test',
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

            app.mobileApp.navigate('#patientsView/details.html?uid=' + e.dataItem.uid);
        },
        detailsShow: function(e) {
            var item = e.view.params.uid,
                itemModel = source.getByUid(item);

            itemModel.testUrl = processImage(itemModel.test);

            viewModel.set('currentItem', itemModel);

        }
    });

    return {
        viewModel: viewModel
    };
})();