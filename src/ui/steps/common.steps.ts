import { findElement } from "../../utils/dom";
import pageFactory from "../pages/page-factory";

class CommonSteps {
  async signOut() {
    await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["User Dropdown"]);
    await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["SignOut button"]);
  }

  async waitForPageIsLoaded() {
    const spinner = await findElement(pageFactory["Home"].Spinner)
    await browser.pause(500)
    await spinner.waitForDisplayed({reverse: true, timeout: 30000})
  }

  async getNotificationText() {
    return await pageFactory["Home"].getElementText(pageFactory["Home"]["Notification text"])
  }

  async closeNotification() {
    await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["Notification close button"])
  }

  async verifyNotificationText(text: string) {
    const notificationText = await this.getNotificationText();
    expect(notificationText).toBe(text);
  }

  async getAuthorizationToken() {
    const token = (await browser.getCookies("Authorization"))[0].value
    return token;
  }
}

export default new CommonSteps();