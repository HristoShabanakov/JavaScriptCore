const userController = function () {
    const getRegister = function (context) {
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/user/registerPage.hbs')
        });
    };

    const postRegister = function (context) {
        const url = `/user/${storage.appKey}`;
        const authorizationType = 'Basic';

        helper.notify('loading')

        const data = {
            username: context.params.username,
            password: context.params.password,
        };

        requester
            .post(url, authorizationType, data)
            .then(helper.handler)
            .then(data => {
                helper.stopNotify();
                storage.saveUser(data);
                helper.notify('success', 'Registration successful');
                context.redirect('#/home');
            });
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/user/loginPage.hbs')
        });
    };

    const postLogin = function (context) {

        const url = `/user/${storage.appKey}/login`;
        const authorizationType = 'Basic';

        helper.notify('loading')

        const data = {
            ...context.params
        };

        requester

            .post(url, authorizationType, data)
            .then(helper.handler)

            .then(data => {
                helper.stopNotify();
                helper.notify('success', 'Login successful');
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const postLogout = function (context) {
        const url = `/user/${storage.appKey}/_logout`;
        const authorizationType = 'Kinvey';

        requester
            .post(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                helper.notify('success', 'Logout successful');
                context.redirect('#/home');
            });
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        postLogout
    };
}();