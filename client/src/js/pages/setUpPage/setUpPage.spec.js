const SetUpPage = require('./setUpPage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('setUpPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });



  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new SetUpPage();
      expect(page.render()).toContain("Collector");
      expect(page.render()).toContain("Client");
    });
  });


  // describe('#bottomButtonEvent', () => {
  //   it('goes to loan summary', () => {
  //     const page = new SetUpPage();
  //     spyOn(page, 'navigate');
  //     page.bottomButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('loanSummary');
  //   });
  // });

  // describe('#leftButtonEvent', () => {
  //   it('takes you to client home page', () => {
  //     const page = new SetUpPage({ watchFace });

  //     page.leftButtonEvent();

  //     expect(page.navigate).toHaveBeenCalledWith('/');
  //   });
  // });


});

