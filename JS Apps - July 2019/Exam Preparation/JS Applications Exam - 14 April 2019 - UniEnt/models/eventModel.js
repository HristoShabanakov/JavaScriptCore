const eventModel = function () {

    const createEvent = function (params) {
        //When creating an event besides the default 4 properties (Event, Date, Description, Image)
        //We have to create 2 more properties :  peopleInterestedIn and organizer.
        let data = {
            ...params,
            peopleInterestedIn: 0,
            //Organizer: string representing the current event creator;
            organizer: JSON.parse(storage.getData('userInfo')).username
        };

        let url = `/appdata/${storage.appKey}/events`;

        let headers = {
            body: JSON.stringify(data),
            headers: {}
        };

        return requester.post(url, headers);

    };

    const getAllEvents = function (params) {

        let url = `/appdata/${storage.appKey}/events`;
        let headers = {
            headers: {},
        };

        return requester.get(url, headers);
    };

    const getEvent = function (id) {

        let url = `/appdata/${storage.appKey}/events/${id}`;
        let headers = {
            headers: {},
        };

        return requester.get(url, headers);
    };

    const editEvent = function (params) {

        let url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        delete params.eventId;

        let headers = {
            //Body is required because we are going edit the database
            body: JSON.stringify({
                ...params
            }),
            headers: {}
        };

        return requester.put(url, headers);
    }

    const deleteEvent = function (id) {
        let url = `/appdata/${storage.appKey}/events/${id}`;

        let headers = {
            headers: {}
        };

        return requester.del(url, headers);
    }

    return {
        createEvent,
        getAllEvents,
        getEvent,
        editEvent,
        deleteEvent
    }
}();