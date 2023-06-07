import CustomersPage from "../pages/customers/customers.page";
import AddNewCustomerPage from "../pages/customers/add-customer.page";
import type { ICustomer } from "../../services/types";
import EditCustomerPage from "../pages/customers/edit-customer.page";
import DetailsModal from "../pages/modals/details.modal";
import { allureStep } from "../../utils/reporter/logStep";

class CustomerSteps {
  @allureStep("Open Add New Customer page")
  async openAddNewCustomerPage() {
      await CustomersPage.waitForElementAndClick(CustomersPage["Add New Customer button"]);
      await CustomersPage.waitForPage(AddNewCustomerPage.uniqueElement);
  }

  @allureStep("Open Edit Customer page")
  async openEditCustomerPage(email: string) {
      await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Edit", email));
      await CustomersPage.waitForPage(EditCustomerPage.uniqueElement);
  }

  @allureStep("Open Customer Details modal")
  async openCustomerDetailsModal(email: string) {
      await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", email));
      await CustomersPage.waitForPage(DetailsModal.uniqueElement);
  }

  @allureStep("Open Delete Customer modal")
  async openDeleteCustomerModal(email: string) {
      await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", email));
      await CustomersPage.waitForPage(DetailsModal.uniqueElement);
  }

  @allureStep('Fill in customer data into input fields')
  async fillInCustomerData(customer: ICustomer) {
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Email input"], customer.email);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Name input"], customer.name);
      await AddNewCustomerPage.waitforDropdownAndSelectValue(AddNewCustomerPage["Country dropdown"], AddNewCustomerPage["Country values"], customer.country);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["City input"], customer.city);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Street input"], customer.street);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Flat input"], customer.flat);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["House input"], customer.house);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Phone input"], customer.phone);
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Notes input"], customer.notes);
  }

  @allureStep('Verify error message and save button')
  async verifyError(selector: string, error: string) {
      await AddNewCustomerPage.checkElementText(selector, error);
      await AddNewCustomerPage.checkElementEnabled(AddNewCustomerPage["Save New Customer button"], false);
  }
}

export default new CustomerSteps();
