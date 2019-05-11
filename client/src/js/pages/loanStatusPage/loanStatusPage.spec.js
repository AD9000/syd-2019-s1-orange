const LoanStatusPage = require('./loanStatusPage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('LoanStatusPage', () => {
    describe('#render', () => {
      it('should render my status page', () => {
        const page = new LoanStatusPage();
        expect(page.render()).toContain("");
    });
  });
});

