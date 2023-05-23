import CustomersPage from "../pages/customers/customers.page";
import DeleteModal from "../pages/modals/delete.modal";


class ListSteps {
  /**
   * Performs search in table by unique value
   * @param {string} value Email for Customer, Name for Product, Order Number for Order
   */
  async searchByUniqueValue(value: string) {
    await CustomersPage.waitForElementAndSetValue(CustomersPage["Search input"], value);
    await CustomersPage.waitForElementAndClick(CustomersPage["Search button"]);
  }

  async clickOnEditButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Edit", uniqueValue));
  }

  async clickOnDetailsButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Details", uniqueValue));
  }

  async clickOnDeleteButtinByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Delete", uniqueValue));
  }

  async deleteEntryByUniqueValue(uniqueValue: string) {
    await CustomersPage.waitForElementAndClick(CustomersPage.getButtonSelectorByUniqueValue("Delete", uniqueValue));
    await DeleteModal.waitForElementAndClick(DeleteModal["Delete button"])
  }
}

export default new ListSteps();