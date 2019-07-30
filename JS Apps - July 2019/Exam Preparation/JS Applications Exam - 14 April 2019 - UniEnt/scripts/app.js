const app = Sammy("#rootElement", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);

    //Events
    this.get('#/createEvent', eventController.getCreateEvent);
    this.post('#/createEvent', eventController.postCreateEvent);

});

(() => {
    app.run('#/home');
})();