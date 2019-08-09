const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.postLogout);

    //Songs
    this.get('#/allSongs', songController.getAllSongs);
    this.get('#/createSong', songController.getCreateSong);

    this.post('#/createSong', songController.postCreateSong);
    this.get('#/mySongs', songController.getMySongs);

    this.get('#/edit/:songId', songController.getEditSong);
    this.post('#/edit/:songId', songController.postEditSong);

    this.get('#/delete/:songId', songController.postDeleteSong);

});

(() => {
    app.run('#/home');
})();