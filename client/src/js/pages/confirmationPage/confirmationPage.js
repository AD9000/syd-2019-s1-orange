const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ConfirmationPage extends BasePage {
  template = require('./confirmationPage.hbs');

  pageWillLoad() {
    this.confirmation = StorageHub.getData('confirmation');
  }

  leftButtonEvent() {
    this.navigate('client');
  }

  rightButtonEvent() {
    this.navigate('confirmed');
  }

  bottomButtonEvent() {
<<<<<<< Updated upstream
    this.navigate('MeetingDetails');
=======
    this.navigate('client');
>>>>>>> Stashed changes
  }
}

module.exports = ConfirmationPage;
