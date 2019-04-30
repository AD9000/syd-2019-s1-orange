const HomePage = require('./loanSummaryPage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('loanSummary', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
       expect(page.render()).toContain("<div>Status:</div>");
      expect(page.render()).toContain("<div>Next Payment Due Date:</div>");
      expect(page.render()).toContain("<div>Balance:</div>");
      expect(page.render()).toContain("<div>Remaining Time:</div>");
    });
  });
});
