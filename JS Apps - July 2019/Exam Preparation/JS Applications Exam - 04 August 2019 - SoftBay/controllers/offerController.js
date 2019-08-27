const offerController = function () {

    const getCreateOffer = function (context) {
        helper.addHeaderInfo(context);
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/offers/createOffer.hbs')
        })
    }

    const postCreateOffer = function (context) {
        const url = `/appdata/${storage.appKey}/offers`;
        const authorizationType = 'Kinvey';

        helper.notify('loading')

        const data = {
            ...context.params
        };

        if (data.product && data.description && data.price && data.pictureUrl) {
            requester
                .post(url, authorizationType, data)
                .then(helper.handler)
                .then(() => {
                    helper.stopNotify();
                    helper.notify('success', 'Offer was created successfully!');
                    context.redirect('#/dashboard');
                });
        }
    };

    const getAllOffers = async function (context) {
        helper.addHeaderInfo(context);

        const url = `/appdata/${storage.appKey}/offers`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(offers => {
                for (const offer of offers) {
                    const isCreator =
                        offer._acl.creator === JSON.parse(storage.getData('userInfo'))._id;

                    offer.isCreator = isCreator;
                }

                context.offers = offers;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/offers/dashboard.hbs')
        })
    };

    const getEditOffer = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(offer => context.offer = offer);


        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/offers/editOffer.hbs')
        });
    };

    const postEditOffer = function (context) {
        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        delete context.params.offerId;
        const authorizationType = 'Kinvey';

        helper.notify('loading')

        const data = {
            ...context.params
        };

        if (data.product && data.description && data.price && data.pictureUrl) {
            requester
                .put(url, authorizationType, data)
                .then(helper.handler)
                .then(() => {
                    helper.stopNotify();
                    helper.notify('success', 'Offer successfully edited');
                    context.redirect('#/dashboard');
                });
        }
    };

    const getDeleteOffer = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(offer => context.offer = offer);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
        }).then(function () {
            this.partial('./views/offers/deleteOffer.hbs')
        });
    };

    const postDeleteOffer = function (context) {
        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        helper.notify('loading')
        requester

            .del(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                helper.stopNotify();
                helper.notify('success', 'Offer successfully deleted');
                context.redirect('#/dashboard');
            });
    };

    const getOfferDetails = async function (context) {

        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(offer => {
                context.offer = offer;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/offers/details.hbs');
        });
    };

    const getProfilePage = function (context) {
        helper.addHeaderInfo(context);
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/offers/profilePage.hbs')
        });

    };

    return {
        getCreateOffer,
        postCreateOffer,
        getAllOffers,
        getEditOffer,
        postEditOffer,
        getDeleteOffer,
        postDeleteOffer,
        getOfferDetails,
        getProfilePage

    }
}();