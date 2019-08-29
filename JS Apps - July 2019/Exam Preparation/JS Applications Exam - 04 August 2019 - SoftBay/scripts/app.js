const app = Sammy('#cont', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.postLogout);

    //Offer
    this.get('#/create', offerController.getCreateOffer);
    this.post('#/create', offerController.postCreateOffer);

    //Dashboard
    this.get('#/create', offerController.getDashboard);
    this.get('#/dashboard', offerController.getAllOffers);

    //Edit
    this.get('#/edit/:offerId', offerController.getEditOffer);
    this.post('#/edit/:offerId', offerController.postEditOffer);

    //Delete
    this.get('#/delete/:offerId', offerController.getDeleteOffer);
    this.post('#/delete/:offerId', offerController.postDeleteOffer);

    //Details
    this.get('#/details/:offerId', offerController.getOfferDetails);

    //Profile Page
    this.get('#/profile', offerController.getProfilePage);

    //About Page
    this.get('#/about', offerController.getAboutPage);



});

(() => {
    app.run('#/home');
})();