const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class GracePage extends BasePage {
  template = require('./gracePage.hbs');

  pageWillLoad() {
    this.grace = StorageHub.getData('gracePeriod');
  }

  leftButtonEvent() {
    this.navigate('loanStatus');
  }
}

module.exports = GracePage;



