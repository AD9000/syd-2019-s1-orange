const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ConfirmedPage extends BasePage {
  template = require('./confirmedPage.hbs');

  pageWillLoad() {
    this.confirmed = StorageHub.getData('confirmed')
  }

  leftButtonEvent() {
    this.navigate('client');
  }
}

module.exports = ConfirmedPage;
