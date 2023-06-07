import SignInPage from "../pages/sign-in.page";
import allure from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";
import { allureStep } from "../../utils/reporter/logStep";


class SignInSteps {

  @allureStep('Sign in')
  async signIn() {
      const email = process.env.EMAIL;
      const password = process.env.PASSWORD;
      await SignInPage.login(email, password);
  }

  @allureStep('Open sales portal')
  async openSalesPortal() {
      await browser.url("https://anatoly-karpovich.github.io/aqa-course-project/?#");
      await browser.maximizeWindow();
  }
}

export default new SignInSteps();