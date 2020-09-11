'use strict'
const urlService = require('../lib/urlService');

exports.getAccessDetails = async (req, res) => {

  const url = req.body.goto_api_url;
  const authorization = "Basic "+req.body.authorization;
  const grant_type = req.body.grant_type;
  const code = req.body.code;

  const data = {
    "grant_type": grant_type,
    "code": code
  }

  //console.log('url', url);
  //console.log('authorization', authorization);
  //console.log('data', data);

  const urlResponse = await urlService(url, authorization, data, 'POST');
  res.json(urlResponse.data);
}


exports.getWebinars = async (req, res) => {
  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'GET');
  //console.log(`Data = ${urlResponse.data}`);
  res.json(urlResponse.data);
}

exports.createWebinars = async (req, res) => {

  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;
  const subject = req.body.subject;
  const description = req.body.description;
  const timeZone = req.body.timeZone;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  const data = {
    "subject": subject,
    "description": description,
    "timeZone": timeZone,
    "times": [
      {
        "startTime": startTime + "T10:00:00.000Z",
        "endTime": endTime + "T17:59:59.000Z"
      }
    ]
  }

  //console.log('url', url);
  //console.log('access_token', access_token);
  //console.log('data', data);

  const urlResponse = await urlService(url, access_token, data, 'POST');
  res.json(urlResponse.data);
}

exports.deleteWebinars = async (req, res) => {
  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'DELETE');
  res.json(urlResponse.data);
}


exports.getPanelists = async (req, res) => {
  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'GET');
  res.json(urlResponse.data);
}


exports.createPanelists = async (req, res) => {
  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;
  const name = req.body.name;
  const email = req.body.email;

  const data = [
    {
      "name": name,
      "email": email
    }
  ]

  //console.log('url', url);
  //console.log('access_token', access_token);
  //console.log('data', data);

  const urlResponse = await urlService(url, access_token, data, 'POST');
  //console.log(`Data = ${urlResponse.data}`);
  res.json(urlResponse.data);
}


exports.deletePanelists = async (req, res) => {

  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'DELETE');
  //console.log(`Data = ${urlResponse.data}`);
  res.json(urlResponse.data);
}


exports.getRegistrants = async (req, res) => {

  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'GET');
  res.json(urlResponse.data);
}

exports.createRegistrants = async (req, res) => {

  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.email;

  const data = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
  }

  //console.log('url', url);
  //console.log('access_token', access_token);
  //console.log('data', data);

  const urlResponse = await urlService(url, access_token, data, 'POST');
  //console.log(`Data = ${urlResponse.data}`);
  res.json(urlResponse.data);
}

exports.deleteRegistrants = async (req, res) => {

  const url = req.body.goto_api_url;
  const access_token = req.body.access_token;

  //console.log('url', url);
  //console.log('access_token', access_token);
  const urlResponse = await urlService(url, access_token, '', 'DELETE');
  res.json(urlResponse.data);
}