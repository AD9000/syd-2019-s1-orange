const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MeetingDetails extends BasePage {
  template = require('./MeetingDetails.hbs');

  pageWillLoad() {
    StorageHub.setData('MeetingDetails', [
      { date: '4/17/2019' ,time: '15:15' ,invitees: 'Guy, girl' ,location: 'Sydney' ,status: 'Confirmed' },
      { date: '5/17/2019' ,time: '16:15' ,invitees: 'NewGuy, Newgirl' ,location: 'Brisbane' ,status: 'Confirmed' },
      { date: '6/17/2019' ,time: '17:15' ,invitees: 'sameGuy, samegirl' ,location: 'Mel' ,status: 'Confirmed' },
    ])

  }
}

module.exports = MeetingDetails;
