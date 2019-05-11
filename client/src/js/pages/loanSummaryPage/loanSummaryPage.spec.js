const LoanSummaryPage = require('./loanSummaryPage');
const StorageHub = require('watch-framework').StorageHub;

describe('loanSummary', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render loan summary page', () => {
      const loanSummary = [
      { key: 'Status', value: 'Grace Period' }
      ];
      StorageHub.setData('loanSummary', loanSummary)
      const page = new LoanSummaryPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Status: Grace Period");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new LoanSummaryPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });

});
