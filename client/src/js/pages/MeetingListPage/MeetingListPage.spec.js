const MeetingListPage = require('./MeetingListPage');

describe('Meeting List', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });
  describe('#leftButtonEvent', () => {
    it('goes to client home page', () => {
      const page = new MeetingListPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('');
    });
  });
});
