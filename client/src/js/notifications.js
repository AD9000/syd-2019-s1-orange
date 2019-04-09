const AlertNotification = require('./notifications/AlertNotification/AlertNotification');
const ConfirmationNotification = require('./notifications/ConfirmationNotification/ConfirmationNotification')

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  },
  {
    type: "confirmation",
    label: "Confirmation",
    defaultValue: "This is test Confirmation!",
    view: ConfirmationNotification,
  },
];

module.exports = notifications;