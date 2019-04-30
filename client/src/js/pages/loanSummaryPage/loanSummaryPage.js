const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./loanSummaryPage.hbs');

  pageWillLoad() {
    StorageHub.setData('loanSummary', [
      { key: 'Status', value: 'Grace Period' },
      { key: 'Next Payment Due Date', value: '07/12/2019' },
      { key: 'Balance', value: '1000' },
      { key: 'Remaining Time', value: '12' },
    ])

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;
  }
}

module.exports = loanSummaryPage;
