const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';


class HomePage extends BasePage {
  template = require('./homePage.hbs');

  bottomButtonEvent() {
    this.navigate('client');
    //  AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.navigate('collector');
  }

  pageWillLoad() {
   StorageHub.setData('profile', [
     { key: 'Name', value: 'Ray Sinan'},
     { key: 'PhoneNumber', value: '0431 111 111' },
     { key: 'Status', value: 'Grace Period' },
     { key: 'Collector', value: 'Jafari'},
     { key: 'Cohort', value: 'Area51'}
   ])

   StorageHub.setData('loanSummary', [
     { key: 'Status', value: 'Grace Period' },
     { key: 'Next Payment Due Date', value: '07/12/2019' },
     { key: 'Balance', value: '1000' },
     { key: 'Remaining Time', value: '12' },
   ])

    StorageHub.setData('confirmedMeetings', [
     { key: 'Time', value: '1:30pm' },
     { key: 'Date', value: '21/05/2019' },
     { key: 'Status', value: 'Pending' },
   ])
  }
}

module.exports = HomePage;
