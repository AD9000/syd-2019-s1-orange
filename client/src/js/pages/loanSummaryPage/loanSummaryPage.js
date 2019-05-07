const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class LoanSummaryPage extends BasePage {
  template = require('./loanSummaryPage.hbs');

  leftButtonEvent() {
    this.navigate('/');
  }

  pageWillLoad() {
    this.loanSummary = StorageHub.getData('loanSummary')
  }
  bottomButtonEvent() {
    this.navigate('home');
  }
}


module.exports = LoanSummaryPage;
