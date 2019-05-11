const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class CollectorsMeetings extends BasePage {
  template = require('./collectorsMeetings.hbs');

  pageWillLoad() {
    this.MeetDetails = StorageHub.getData('ColMeetings')
  }

  leftButtonEvent() {
    this.navigate('collector');
  }
}

module.exports = CollectorsMeetings;
