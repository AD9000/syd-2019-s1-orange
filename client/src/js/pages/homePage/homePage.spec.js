const HomePage = require('./homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });



  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
      expect(page.render()).toContain("Request Meeting");
    });
  });

  describe('#leftButtonEvent', () => {
    // it('audioHub plays a sound', () => {
    //   spyOn(AudioHub, 'playSound')
    //   const page = new HomePage();
    //   page.leftButtonEvent();
    //   expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
    // });

    it('goes to confirmation page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('confirmation');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacts');
    });
  });
});

