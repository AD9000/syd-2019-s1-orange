const ConfirmationPage = require('./confirmationPage');

describe('ConfirmationPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe("#leftButtonEvent", () => {
    it('goes to home page', () => {
      const page = new ConfirmationPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });

  describe("#rightButtonEvent", () => {
    it('goes to confirmed page', () => {
      const page = new ConfirmationPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('confirmed');
    });
  });

  describe("#bottomButtonEvent", () => {
    it('goes to home page', () => {
      const page = new ConfirmationPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('MeetingDetails');
    });
  });

});
