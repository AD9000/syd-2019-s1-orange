const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';


class LoanStatusPage extends BasePage {
  template = require('./loanStatusPage.hbs');


  leftButtonEvent() {
     this.navigate('collector');
  }

  topButtonEvent() {
    console.log("grac");
     this.navigate('grace');
  }
}

module.exports = LoanStatusPage;



