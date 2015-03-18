'use strict';

app.models.signupView = (function() {
    return {};
})();
app.models.signupView.signupViewSignup = (function() {
    var viewModel = kendo.observable({
        model: {
            username: '',
            password: '',
            displayName: '',
            email: '',
            gender: '0',
            birthDate: new Date()
        },
        genders: [
            'Male',
            'Female'
        ],
        register: function() {
            var provider = app.data.defaultprovider;

            var attrs = {
                Email: viewModel.model.email,
                DisplayName: viewModel.model.displayName,
                BirthDate: viewModel.model.birthDate,
                Gender: viewModel.model.gender
            };

            provider.Users.register(viewModel.model.username,
                viewModel.model.password,
                attrs,
                function(data) {

                },
                function(error) {
                    alert(JSON.stringify(error));
                });

        }
    });
    return viewModel;
})();