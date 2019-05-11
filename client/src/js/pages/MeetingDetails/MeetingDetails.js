const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MeetingDetails extends BasePage {
  template = require('./MeetingDetails.hbs');

  pageWillLoad(){
    this.tomorrowDate = this.getTomorrowsDate(Date.now());
  }

 getTomorrowsDate(todayDate) {
    var dateTime = new Date(todayDate + 1 * 24 * 60* 60 * 1000);
    return dateTime.toLocaleString('en-AU').split(",")[0];
  }

  leftButtonEvent() {
  this.navigate('client');

  }
  topButtonEvent() {
    this.navigate('confirmation');
  }

  bottomButtonEvent() {
    this.navigate('confirmation');
  }
}
module.exports = MeetingDetails;
