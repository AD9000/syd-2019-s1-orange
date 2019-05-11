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
      expect(page.render()).toContain("Client");
    });
  });

  describe('#bottomButtonEvent', () => {
    // it('audioHub plays a sound', () => {
    //   spyOn(AudioHub, 'playSound')
    //   const page = new HomePage();
    //   page.leftButtonEvent();
    //   expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
    // });

    it('goes to client page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('client');
    });
  });

  describe('#topButtonEvent', () => {
    it('goes to collector\'s page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('collector');
    });
  });

  // describe('#updateTimeDisplay', () => {
  //   it('updateTimeDisplays calls clock-time if its in the window', () => {
  //     const page = new HomePage();

  //     watchFace.innerHTML = page.render();

  //     jest.spyOn(page,"getDateTime");
  //     page.updateTimeDisplay(page.getDateTime);
  //     expect(page.getDateTime).toHaveBeenCalledTimes(1);
  //   });
  // });
});

