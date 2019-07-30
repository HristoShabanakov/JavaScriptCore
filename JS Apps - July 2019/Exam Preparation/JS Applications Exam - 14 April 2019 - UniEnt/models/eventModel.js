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

    return {
        createEvent,
    }
}();