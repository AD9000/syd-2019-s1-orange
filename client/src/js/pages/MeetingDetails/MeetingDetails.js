const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MeetingDetails extends BasePage {
  template = require('./MeetingDetails.hbs');
 getTomorrowsDate(todayDate) {
    var dateTime = new Date(todayDate.getTime() + 1 * 24 * 60* 60 * 1000);
    return dateTime.toLocaleString('en-AU').split(",")[0];
  }

  leftButtonEvent() {
  this.navigate('/');

  }
  topButtonEvent() {
    this.navigate('confirmation');
  }

  bottomButtonEvent() {
    this.navigate('confirmation');
  }
}
module.exports = MeetingDetails;
