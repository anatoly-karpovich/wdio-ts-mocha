import SignInPage from "../pages/sign-in.page";

class SignInSteps {
  async signIn() {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    await SignInPage.login(email, password)
  }
}

export default new SignInSteps();