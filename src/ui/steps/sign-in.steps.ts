import { credentials } from "../../data/config";
import SignInPage from "../pages/sign-in.page";

class SignInSteps {
  async signIn() {
    const email = process.env.EMAIL ?? credentials.email
    const password = process.env.PASSWORD ?? credentials.password
    await SignInPage.login(email, password)
  }
}

export default new SignInSteps();