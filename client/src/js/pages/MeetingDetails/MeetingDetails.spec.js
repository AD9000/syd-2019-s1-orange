const MeetingDetails = require('./MeetingDetails');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('Meeting_Details', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new MeetingDetails();
      expect(page.render()).toContain("<span>Date:");
      expect(page.render()).toContain("<span>Time:");
      expect(page.render()).toContain("<span>Location:");
      expect(page.render()).toContain("<span>Invitees:");
      expect(page.render()).toContain("<span>Status:")
    });
  });

   describe('#pageWillLoad', () => {
    it('should set meeting details on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new MeetingDetails();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('MeetingDetails', expect.any(Array));
    })
  })


});
