const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class CollectorPage extends BasePage {
  template = require('./collectorPage.hbs');

  rightButtonEvent() {
    //this.navigate('contacts');
  }

  leftButtonEvent() {
    //this.navigate('confirmation');
    //  AudioHub.playSound(plop);
  }


  topButtonEvent() {
  }

  bottomButtonEvent() {
    //this.navigate('loanSummary');
  }
}

module.exports = CollectorPage;
