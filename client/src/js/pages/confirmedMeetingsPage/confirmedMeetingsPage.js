const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ConfirmedMeetingsPage extends BasePage {
  template = require('./confirmedMeetingsPage.hbs');

  pageWillLoad(){
    this.confirmedMeetings = StorageHub.getData('confirmedMeetings')

  }

  leftButtonEvent() {
  this.navigate('client');

  }
}
module.exports = ConfirmedMeetingsPage;
