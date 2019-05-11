const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class ProfilePage extends BasePage {
  template = require('./profilePage.hbs');

  pageWillLoad() {
    this.profile = StorageHub.getData('profile')
  }

  leftButtonEvent() {
    this.navigate('client');
  }
}

module.exports = ProfilePage;
