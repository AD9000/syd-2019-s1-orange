const ClientPage = require('./clientPage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('ClientPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });



  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new ClientPage();
      expect(page.render()).toContain("Request Meeting");
    });
  });

  describe('#leftButtonEvent', () => {
    // it('audioHub plays a sound', () => {
    //   spyOn(AudioHub, 'playSound')
    //   const page = new ClientPage();
    //   page.leftButtonEvent();
    //   expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
    // });
    it('goes to confirmation page', () => {
      const page = new ClientPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('MeetingDetails');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const page = new ClientPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('profile');
    });
  });


  describe('#bottomButtonEvent', () => {
    it('goes to loan summary', () => {
      const page = new ClientPage();
      spyOn(page, 'navigate');
      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('loanSummary');
    });
  });

  // describe('#updateTimeDisplay', () => {
  //   it('updateTimeDisplays calls clock-time if its in the window', () => {
  //     const page = new ClientPage();

  //     watchFace.innerHTML = page.render();

  //     jest.spyOn(page,"getDateTime");
  //     page.updateTimeDisplay(page.getDateTime);
  //     expect(page.getDateTime).toHaveBeenCalledTimes(1);
  //   });
  // });
});

