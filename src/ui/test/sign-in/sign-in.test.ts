import SignInPage from "../../pages/sign-in.page";
import HomePage from "../../pages/home.page";
import { findElement } from "../../../utils/dom";
import CommonSteps from "../../steps/common.steps";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/ui/test/sign-in/sign-in.test.js

describe("Sign-in tests", function () {
  before(async function () {
    await SignInPage.open();
    await CommonSteps.waitForPageIsLoaded();
  });
  
  after(async function() {
    await CommonSteps.signOut();
    await CommonSteps.waitForPageIsLoaded();
  })

  it("Should not sign in with invalid credentials", async function () {
    await SignInPage.waitForElementAndSetValue(SignInPage.Email, "abcd@gmail.com");
    await SignInPage.waitForElementAndSetValue(SignInPage.Password, "password");
    await SignInPage.waitForElementAndClick(SignInPage["Login button"]);
    await CommonSteps.waitForPageIsLoaded();
    const actualText = await (await findElement(SignInPage["Notification text"])).getText();
    const expectedText = "Incorrect credentials"
    expect(actualText.trim()).toBe(expectedText);
  });

  it("Should sign in with valid credentials", async function () {
    await SignInPage.waitForElementAndSetValue(SignInPage.Email, "aqacourse@gmail.com");
    await SignInPage.waitForElementAndSetValue(SignInPage.Password, "password");
    await SignInPage.waitForElementAndClick(SignInPage["Login button"]);
    await CommonSteps.waitForPageIsLoaded();
    await HomePage.waitForPage(HomePage.uniqueElement, false);
  });
});
