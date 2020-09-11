const axios = require('axios')
const JSONbig = require('json-bigint');
const urlService = async (url, header, data, method) => {

    let options = {};

    if (header == "") {
        header = "abc123";
    }

    if (method == "POST") {
        options = {
            method: method,
            headers: { 'Authorization': header },
            data: data,
            url
        };
    } else if (method == "DELETE") {
        options = {
            method: method,
            headers: { 'Authorization': header },
            url
        };
    } else {
        options = {
            method: method,
            headers: { 'Authorization': header },
            transformResponse: data => JSONbig.parse(data),
            url
        };
    }

    try {
        const response = await axios(options);
        //console.log(response);
        return response;
    } catch (error) {
        //console.log(error);
        return { "status": "error" };
    }
}

module.exports = urlService; 