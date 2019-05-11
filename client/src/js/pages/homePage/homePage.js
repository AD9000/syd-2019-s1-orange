const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';


class HomePage extends BasePage {
  template = require('./homePage.hbs');

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {

//    this.navigate('confirmation');
    this.navigate('MeetingDetails');
  }

  bottomButtonEvent() {
    this.navigate('client');
    //  AudioHub.playSound(plop);
  }

  topButtonEvent() {
    this.navigate('collector');
  }

  pageWillLoad() {
   StorageHub.setData('contacts', [
     { name: 'Ray', phoneNumber: '0431 111 111' },
     { name: 'Sinan', phoneNumber: '0431 222 222' },
     { name: 'Jafari', phoneNumber: '0431 333 333' },
   ])

   StorageHub.setData('loanSummary', [
     { key: 'Status', value: 'Grace Period' },
     { key: 'Next Payment Due Date', value: '07/12/2019' },
     { key: 'Balance', value: '1000' },
     { key: 'Remaining Time', value: '12' },
   ])
  }
}

module.exports = HomePage;
