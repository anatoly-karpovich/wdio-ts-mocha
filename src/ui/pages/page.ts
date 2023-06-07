import find from "../../utils/array/find";
import { findArrayOfElements, findElement } from "../../utils/dom";
import { TIMEOUT_5_SECONDS } from "../../utils/timeouts";
import allure from "@wdio/allure-reporter";

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
    allure.addStep(`Click on element with selector ${selector}`);
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForEnabled({ timeout });
      await elem.click();
    }
  }

  async waitForPage(selector: string, reverse?: boolean, timeout?: number) {
    allure.addStep(`Wait for page to be enabled`);
    const spinner = await findElement(`.spinner-border`);
    await spinner.waitForDisplayed({ reverse: true });
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForDisplayed({ timeout: timeout ?? TIMEOUT_5_SECONDS, reverse, timeoutMsg: `Unique element wasn't found` });
    }
  }

  async waitForDisplayed(selector: string, reverse?: boolean, timeout?: number) {
    allure.addStep(`Wait for element with selector ${selector} to be displayed`);
    let element: WebdriverIO.Element;
    if (reverse) {
      element = await findElement(selector);
      await element.waitForDisplayed({ timeout: timeout ?? TIMEOUT_5_SECONDS, reverse, timeoutMsg: `Unique element wasn't found` });
    } else {
      element = await this.waitForElementAndScroll(selector);
      await element.waitForDisplayed({ timeout: timeout ?? TIMEOUT_5_SECONDS, timeoutMsg: `Unique element wasn't found` });
    }
  }

  async waitForElementAndSetValue(selector: string, text: string | number, timeout = TIMEOUT_5_SECONDS) {
    allure.addStep(`Set ${text} to input with selector ${selector}`);
    const elem = await this.waitForElementAndScroll(selector);
    if (elem) {
      await elem.waitForEnabled({ timeout });
      text || text === 0 ? await elem.setValue(text) : await elem.clearValue();
    }
  }

  async waitforDropdownAndSelectValue(dropdownSelector: string, optionsSelector: string, text: string | number, timeout = TIMEOUT_5_SECONDS) {
    allure.addStep(`Select option with text ${text} in dropdown with selector ${dropdownSelector}`);
    const options = await findArrayOfElements(optionsSelector);
    await this.waitForElementAndClick(dropdownSelector);
    const option = await find(options, async (el: WebdriverIO.Element) => (await el.getText()) === text);
    await option.click();
  }

  async getElementText(selector: string, timeout = TIMEOUT_5_SECONDS) {
    const elem = await this.waitForElementAndScroll(selector);
    const text = await elem.getText();
    return text;
  }

  async checkElementEnabled(selector: string, enabled: boolean, timeout = TIMEOUT_5_SECONDS) {
    allure.addStep(`Check that ${enabled ? "" : "not "}enabled element with selector ${selector}`);
    const elem = await this.waitForElementAndScroll(selector);
    const actual = await elem.isEnabled();
    expect(actual).toBe(enabled);
  }

  async checkElementText(selector: string, text: string, timeout = TIMEOUT_5_SECONDS) {
    allure.addStep(`Check that element with selector ${selector} contains ${text}`);
    const actual = await this.getElementText(selector);
    expect(actual).toBe(text);
  }
}
