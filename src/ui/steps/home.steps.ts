import HomePage from "../pages/home.page";

class HomeSteps {
  async openCustomersPage() {
    await HomePage.waitForElementAndClick(HomePage["Customers button"])
  }
}

export default new HomeSteps();