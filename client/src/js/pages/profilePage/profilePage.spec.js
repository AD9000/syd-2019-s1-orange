const ProfilePage = require('./profilePage');
const StorageHub = require('watch-framework').StorageHub;

describe('ProfilesPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my specific Profile', () => {
      const page = new ProfilePage();
      expect(page.render()).toContain("<h1>My Profile</h1>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ProfilePage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });
});
