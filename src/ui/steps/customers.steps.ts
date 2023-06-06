import CustomersPage from "../pages/customers/customers.page";
import AddNewCustomerPage from "../pages/customers/add-customer.page"
import type { ICustomer } from "../../services/types"
import EditCustomerPage from "../pages/customers/edit-customer.page";
import DetailsModal from "../pages/modals/details.modal";


class CustomerSteps {
  async openAddNewCustomerPage() {
    await CustomersPage.waitForElementAndClick(CustomersPage["Add New Customer button"])
    await CustomersPage.waitForPage(AddNewCustomerPage.uniqueElement)
  }
  
  async openEditCustomerPage(email: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Edit", email));
    await CustomersPage.waitForPage(EditCustomerPage.uniqueElement)
  }
  async openCustomerDetailsModal(email: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", email));
    await CustomersPage.waitForPage(DetailsModal.uniqueElement)
  }

  async openDeleteCustomerModal(email: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", email));
    await CustomersPage.waitForPage(DetailsModal.uniqueElement)
  }

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
}

export default new CustomerSteps();