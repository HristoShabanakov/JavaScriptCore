const eventController = function () {

    const getCreateEvent = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('./views/event/createEvent.hbs')
        });
    };

    const postCreateEvent = function (context) {
        eventModel.createEvent(context.params)
            .then(helper.handler)
            .then(() => {
                homeController.getHome(context)
            });
    };

    const getDetailsEvent = async function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;

            let response = await eventModel.getEvent(context.params.eventId);
            let event = await response.json();

            Object.keys(event).forEach((key) => {
                context[key] = event[key]
            });

            //Find the current user and all of the events he created.
            context.isCreator = JSON.parse(storage.getData('userInfo')).username === event.organizer;
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial("../views/event/detailsEvent.hbs")
        });
    };

    const getEditEvent = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        let response = await eventModel.getEvent(context.params.eventId);
        let event = await response.json();

        Object.keys(event).forEach((key) => {
            context[key] = event[key]
        });

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial("../views/event/editEvent.hbs")
        });

    };

    const postEditEvent = function (context) {
        eventModel.editEvent(context.params)
            .then(helper.handler)
            .then((data) => {
                console.log(data);
                homeController.getHome(context);
            });
    };

    const postDeleteEvent = function (context) {
        eventModel.deleteEvent(context.params.eventId)
            .then(helper.handler)
            .then((data) => {
                console.log(data);
                homeController.getHome(context);
            })
    };

    return {
        getCreateEvent,
        postCreateEvent,
        getDetailsEvent,
        getEditEvent,
        postEditEvent,
        postDeleteEvent
    }
}();