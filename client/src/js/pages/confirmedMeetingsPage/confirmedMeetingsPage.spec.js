const ConfirmedMeetingsPage = require('./confirmedMeetingsPage');


describe('confirmedMeetingsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });
  describe('#leftButtonEvent', () => {
    it('goes to client home page', () => {
      const page = new ConfirmedMeetingsPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });
});
