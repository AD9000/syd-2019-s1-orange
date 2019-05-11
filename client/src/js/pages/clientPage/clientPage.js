const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class ClientPage extends BasePage {
  template = require('./clientPage.hbs');

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {

    this.navigate('MeetingDetails');
    //  AudioHub.playSound(plop);
  }

  bottomButtonEvent() {
    this.navigate('loanSummary');
  }
}

module.exports = ClientPage;
