const SetUpPage = require('./pages/setUpPage/setUpPage');
const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const ConfirmationPage = require('./pages/confirmationPage/confirmationPage');
const ConfirmedPage = require('./pages/confirmedPage/confirmedPage');
const LoanSummaryPage = require('./pages/loanSummaryPage/loanSummaryPage');

module.exports = {
  'setup': SetUpPage,
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'confirmation': ConfirmationPage,
  'confirmed': ConfirmedPage,
  'loanSummary': LoanSummaryPage,
};
