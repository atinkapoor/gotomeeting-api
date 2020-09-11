'use strict';
module.exports = function(app) {
  let controller = require('./src/controller.js');

  //get access token  
  app.route('/get_access_details').post(controller.getAccessDetails);

  //Webinars
  app.route('/get_webinars').post(controller.getWebinars);
  app.route('/create_webinars').post(controller.createWebinars);
  app.route('/delete_webinars').post(controller.deleteWebinars);  

  //Panelists  
  app.route('/get_panelists').post(controller.getPanelists);
  app.route('/create_panelists').post(controller.createPanelists);
  app.route('/delete_panelists').post(controller.deletePanelists); 

  //Registrants
  app.route('/get_registrants').post(controller.getRegistrants);
  app.route('/create_registrants').post(controller.createRegistrants);
  app.route('/delete_registrants').post(controller.deleteRegistrants); 

};