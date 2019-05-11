const ConfirmedPage = require('./confirmedPage');
const StorageHub = require('watch-framework').StorageHub;

describe('confirmedPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my confirmed page', () => {
      const page = new ConfirmedPage();
      expect(page.render()).toContain("Confirmed");
    });

    it('should contain confirmation message', () => {
      const page = new ConfirmedPage();
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ConfirmedPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });
});
