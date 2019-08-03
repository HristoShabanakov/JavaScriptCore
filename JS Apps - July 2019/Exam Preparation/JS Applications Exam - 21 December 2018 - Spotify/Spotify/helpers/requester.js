const requester = function () {
    const baseUrl = 'https://baas.kinvey.com';

    const get = function (url, type) {
        const headers = makeHeaders(type, 'GET');

        return fetch(baseUrl + url, headers);
    };

    const post = function (url, type, data) {
        const headers = makeHeaders(type, 'POST', data);

        return fetch(baseUrl + url, headers);
    };

    const put = function (url, type, data) {
        const headers = makeHeaders(type, 'PUT', data);

        return fetch(baseUrl + url, headers);
    };

    const del = function (url, type) {
        const headers = makeHeaders(type, 'DELETE');

        return fetch(baseUrl + url, headers);
    };

    const makeAuth = (type) => {
        return type === 'Basic'
            ? 'Basic ' + btoa(storage.appKey + ':' + storage.appSecret)
            : 'Kinvey ' + JSON.parse(storage.getData('authToken'));
    };

    const makeHeaders = (type, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                'Authorization': makeAuth(type),
                'Content-Type': 'application/json'
            }
        };

        if (httpMethod === 'POST' || httpMethod === 'PUT') {
            headers.body = JSON.stringify(data);
        }

        return headers;
    };

    return {
        get,
        post,
        del,
        put
    }
}();