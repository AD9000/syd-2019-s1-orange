const CollectorPage = require('./collectorPage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('CollectorPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new CollectorPage();
      expect(page.render()).toContain(" ");
    });
  });

  // describe('#leftButtonEvent', () => {
  //   // it('audioHub plays a sound', () => {
  //   //   spyOn(AudioHub, 'playSound')
  //   //   const page = new collectorPage();
  //   //   page.leftButtonEvent();
  //   //   expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
  //   // });

  //   it('goes to confirmation page', () => {
  //     const page = new CollectorPage();
  //     spyOn(page, 'navigate');

  //     page.leftButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('confirmation');
  //   });
  // });

  // describe('#rightButtonEvent', () => {
  //   it('goes to contacts page', () => {
  //     const page = new CollectorPage();
  //     spyOn(page, 'navigate');

  //     page.rightButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('contacts');
  //   });
  // });


  // describe('#bottomButtonEvent', () => {
  //   it('goes to loan summary', () => {
  //     const page = new CollectorPage();
  //     spyOn(page, 'navigate');
  //     page.bottomButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('loanSummary');
  //   });
  // });

  // describe('#updateTimeDisplay', () => {
  //   it('updateTimeDisplays calls clock-time if its in the window', () => {
  //     const page = new CollectorPage();

  //     watchFace.innerHTML = page.render();

  //     jest.spyOn(page,"getDateTime");
  //     page.updateTimeDisplay(page.getDateTime);
  //     expect(page.getDateTime).toHaveBeenCalledTimes(1);
  //   });
  // });
});

