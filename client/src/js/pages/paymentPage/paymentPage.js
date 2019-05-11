const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class paymentPage extends BasePage {
  template = require('./paymentPage.hbs');

  pageWillLoad() {
    this.grace = StorageHub.getData('gracePeriod');
  }

  leftButtonEvent() {
    this.navigate('loanStatus');
  }
}

module.exports = paymentPage;



