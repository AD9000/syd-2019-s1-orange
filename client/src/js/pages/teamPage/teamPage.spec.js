const TeamPage = require('./teamPage');

describe('TeamPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my team page', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("<h1>Made by:</h1>");
    });

    it('should contain team members names', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("Atharv");
      expect(page.render()).toContain("Sheila");
      expect(page.render()).toContain("Bruce");
      expect(page.render()).toContain("Annie");
      expect(page.render()).toContain("Christie");
      expect(page.render()).toContain("Purujit");
      expect(page.render()).toContain("Rebecca");
    });
  });

});
