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

        const data = {
            ...context.params
        };

        requester
            .post(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard');
            });
    };

    const getDashboard = function (context) {
        helper.addHeaderInfo(context);
        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/offers/dashboard.hbs')
        });
    };

    const getAllOffers = async function (context) {
        helper.addHeaderInfo(context);

        const url = `/appdata/${storage.appKey}/offers`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(offers => {
                context.offers = offers;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
            eachOffer: './views/offers/eachOffer.hbs'

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
        const data = {
            ...context.params
        };

        requester
            .put(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard');
            });
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

        requester
            .del(url, authorizationType)
            .then(helper.handler)
            .then(() => {
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

    return {
        getCreateOffer,
        postCreateOffer,
        getDashboard,
        getAllOffers,
        getEditOffer,
        postEditOffer,
        getDeleteOffer,
        postDeleteOffer,
        getOfferDetails

    }
}();