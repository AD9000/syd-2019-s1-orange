const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ConfirmationPage extends BasePage {
  template = require('./confirmationPage.hbs');

  pageWillLoad() {
    this.confirmation = StorageHub.getData('confirmation');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('confirmed');
  }

  bottomButtonEvent() {
    this.navigate('MeetingDetails');
  }
}

module.exports = ConfirmationPage;
