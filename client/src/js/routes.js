const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const ConfirmationPage = require('./pages/confirmationPage/confirmationPage');
const ConfirmedPage = require('./pages/confirmedPage/confirmedPage');
const LoanSummaryPage = require('./pages/loanSummaryPage/loanSummaryPage');
const MeetingDetailsPage = require('./pages/MeetingDetails/MeetingDetails');
const MeetingListPage = require('./pages/MeetingListPage/MeetingListPage');
const ClientPage = require('./pages/clientPage/clientPage');
const CollectorPage = require('./pages/collectorPage/collectorPage');
const ConfirmedMeetingsPage = require('./pages/confirmedMeetingsPage/confirmedMeetingsPage');
const CollectorMeetings = require('./pages/collectorsMeetings/collectorsMeetings')

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'confirmedMeetings': ConfirmedMeetingsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'confirmation': ConfirmationPage,
  'confirmed': ConfirmedPage,
  'loanSummary': LoanSummaryPage,
  'MeetingDetails' :MeetingDetailsPage,
  'meetingList': MeetingListPage,
  'client': ClientPage,
  'collector': CollectorPage,
  'ColMeetings' : CollectorMeetings
};
