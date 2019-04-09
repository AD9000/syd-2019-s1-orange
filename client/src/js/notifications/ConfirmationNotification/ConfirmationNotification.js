const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
module.exports = class ConfirmationNotification extends BaseNotification {
  template = require("./ConfirmationNotification.hbs");

  leftButtonEvent() {
    console.log("LEFT");
    NotificationHub.hide();
  }
};
