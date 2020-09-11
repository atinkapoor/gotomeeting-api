'use strict';
const config = require('./config.json')
const fetch = require('./functions.js');


exports.getAccessDetails = async (req, res) => {
  await fetch.getAccessDetails(req, res);
};

//Webinars Related
exports.getWebinars = async (req, res) => {
  await fetch.getWebinars(req, res);
};

exports.createWebinars = async (req, res) => {
  await fetch.createWebinars(req, res);
};

exports.deleteWebinars = async (req, res) => {
  await fetch.deleteWebinars(req, res);
};

//Panelists Related
exports.getPanelists = async (req, res) => {
  await fetch.getPanelists(req, res);
};

exports.createPanelists = async (req, res) => {
  await fetch.createPanelists(req, res);
};

exports.deletePanelists = async (req, res) => {
  await fetch.deletePanelists(req, res);
};

//Registrants Related
exports.getRegistrants = async (req, res) => {
  await fetch.getRegistrants(req, res);
};

exports.createRegistrants = async (req, res) => {
  await fetch.createRegistrants(req, res);
};

exports.deleteRegistrants = async (req, res) => {
  await fetch.deleteRegistrants(req, res);
};