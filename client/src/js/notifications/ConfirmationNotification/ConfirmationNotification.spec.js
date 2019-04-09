const ConfirmationNotification = require("./ConfirmationNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("ConfirmationNotification", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const notification = new ConfirmationNotification();
      expect(notification.render()).toContain("Confirmation");
    });
  });

  describe("#leftButtonEvent", () => {
    it("should call NotificationHub.hide", () => {
      console.log = jest.fn();
      const notification = new ConfirmationNotification();
      notification.leftButtonEvent();
      expect(hideSpy).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith("LEFT");
    });
  });

});
