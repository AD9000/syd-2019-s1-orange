const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MeetingListPage extends BasePage {
  template = require('./MeetingListPage.hbs');

  leftButtonEvent() {
    this.navigate('/');
  }
}

module.exports = MeetingListPage;
