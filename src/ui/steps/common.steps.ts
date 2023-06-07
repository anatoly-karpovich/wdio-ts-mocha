import { findElement } from "../../utils/dom";
import pageFactory from "../pages/page-factory";
import { allureStep } from "../../utils/reporter/logStep";

class CommonSteps {
  @allureStep("Sign Out")
  async signOut() {
      await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["User Dropdown"]);
      await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["SignOut button"]);
  }

  async waitForPageIsLoaded() {
      const spinner = await findElement(pageFactory["Home"].Spinner);
      await browser.pause(500);
      await spinner.waitForDisplayed({ reverse: true, timeout: 30000 });
  }

  @allureStep("Close notification")
  async closeNotification() {
      await pageFactory["Home"].waitForElementAndClick(pageFactory["Home"]["Notification close button"]);
  }

  @allureStep("Verify notification text")
  async verifyNotificationText(text: string) {
      await pageFactory["Home"].checkElementText(pageFactory["Home"]["Notification text"], text);
  }

  async getAuthorizationToken() {
    const token = (await browser.getCookies("Authorization"))[0].value;
    return token;
  }
}

export default new CommonSteps();
