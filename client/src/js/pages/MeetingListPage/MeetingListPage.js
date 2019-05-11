const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MeetingListPage extends BasePage {
  template = require('./MeetingListPage.hbs');

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }

  leftButtonEvent() {
    this.navigate('collector');
  }
}

module.exports = MeetingListPage;
