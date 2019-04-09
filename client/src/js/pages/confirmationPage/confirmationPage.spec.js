const ConfirmationPage = require('./confirmationPage');

describe('ConfirmationPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my confirmation page', () => {
      const page = new ConfirmationPage();
      expect(page.render()).toContain("Confirmation:");
    });

    it('should contain confirmation message', () => {
      const page = new ConfirmationPage();
    });
  });

});
