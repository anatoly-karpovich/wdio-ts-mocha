import CustomersPage from "../pages/customers/customers.page";
import HomePage from "../pages/home.page";

class HomeSteps {
  async openCustomersPage() {
    await HomePage.waitForElementAndClick(HomePage["Customers button"]) 
    await CustomersPage.waitForPage(CustomersPage.uniqueElement);
  }
}

export default new HomeSteps();