const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class CollectorPage extends BasePage {
  template = require('./collectorPage.hbs');

  leftButtonEvent() {
    //this.navigate('meetingList');
    //  AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.navigate('ColMeetings');
  }

  bottomButtonEvent() {
    this.navigate('loanStatus');
  }

  pageWillLoad() {
   StorageHub.setData('ColMeetings', [
     { fname: 'Ray', lname: 'Mart', mTime: '10AM', mDate: '11/5/19' },
    { fname: 'Jane', lname: 'Hay', mTime: '3PM', mDate: '11/5/19' },
    { fname: 'Reva', lname: 'Mart', mTime: '10AM', mDate: '12/5/19' },
   ])
  }

  rightButtonEvent() {
    this.navigate('loanStatus');
  }
}

module.exports = CollectorPage;
