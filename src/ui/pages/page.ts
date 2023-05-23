import find from "../../utils/array/find";
import { findArrayOfElements, findElement } from "../../utils/dom";
import { TIMEOUT_5_SECONDS } from "../../utils/timeouts";

export class Page {
  async waitForElementAndScroll(selector: string, timeout = TIMEOUT_5_SECONDS) {
    const elem = await findElement(selector);
    if (elem) {
      await elem.waitForExist({ timeout });
      await elem.scrollIntoView({ block: "center" });
      return elem;
    }
  }

  async waitForElementAndClick(selector: string, timeout = TIMEOUT_5_SECONDS) {
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForEnabled({ timeout });
      await elem.click();
    }
  }

  async waitForPage(selector: string, reverse?: boolean, timeout?: number) {
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForDisplayed({ timeout: timeout ?? TIMEOUT_5_SECONDS, reverse, timeoutMsg: `Unique element wasn't found` });
    }
  }

  async waitForElementAndSetValue(selector: string, text: string | number, timeout = TIMEOUT_5_SECONDS) {
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForEnabled({ timeout });
      await elem.setValue(text);
    }
  }

  async waitforDropdownAndSelectValue(dropdownSelector: string, optionsSelector: string, text: string | number, timeout = TIMEOUT_5_SECONDS) {
    const options = await findArrayOfElements(optionsSelector);
    await this.waitForElementAndClick(dropdownSelector)
    const option = await find(options, async (el: WebdriverIO.Element) => await el.getText() === text)
    await option.click();
  }

  async getElementText(selector: string, timeout = TIMEOUT_5_SECONDS) {
    const elem = await this.waitForElementAndScroll(selector);
    return await elem.getText();
  }
}