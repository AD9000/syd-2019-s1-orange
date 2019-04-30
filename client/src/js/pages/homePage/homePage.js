const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');

  rightButtonEvent() {
    this.navigate('contacts');
  }

  leftButtonEvent() {

    this.navigate('confirmation');
    //  AudioHub.playSound(plop);
  }

}

module.exports = HomePage;
