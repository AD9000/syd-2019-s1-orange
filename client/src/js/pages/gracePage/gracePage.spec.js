const GracePage = require('./gracePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('GracePage', () => {
    describe('#render', () => {
      it('should render my confirmed page', () => {
        const page = new GracePage();
        expect(page.render()).toContain("");
    });
  });
});
