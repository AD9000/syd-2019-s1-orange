const notifications = require('./notifications');

describe('notifications', () => {
//  it('all notifications should exist', () => {
//   expect(notifications).toHaveLength(2);
// });
  it('option to send confirmation notification', () => {
    expect(notifications[2].type).toBe("confirmation");
  });
});
