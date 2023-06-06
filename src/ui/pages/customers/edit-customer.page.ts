import { BasePage } from "../basePage.page";
import AddNewCustomerPage from "./add-customer.page";

class EditCustomerPage extends BasePage {
  uniqueElement = `//h2[contains(text(), 'Edit')]`;

  addCustomer = AddNewCustomerPage

  get ['Title']() {
    return AddNewCustomerPage.Title
  }

  get ["Email label"]() {
    return AddNewCustomerPage["Email label"]
  }

  get ["Email input"]() {
    return AddNewCustomerPage["Email input"];
  }

  get ["Email Error"]() {
    return AddNewCustomerPage["Email Error"];
  }

  get ["Name label"]() {
    return AddNewCustomerPage["Name label"];
  }

  get ["Name input"]() {
    return AddNewCustomerPage["Name input"];
  }

  get ["Name Error"]() {
    return AddNewCustomerPage["Name Error"];
  }

  get ["Country label"]() {
    return AddNewCustomerPage["Country label"];
  }

  get ["Country dropdown"]() {
    return AddNewCustomerPage["Country dropdown"];
  }

  get ["Country values"]() {
    return AddNewCustomerPage["Country values"];
  }

  get ["City label"]() {
    return AddNewCustomerPage["City label"];
  }

  get ["City input"]() {
    return AddNewCustomerPage["City input"];
  }

  get ["City Error"]() {
    return AddNewCustomerPage["City Error"];
  }

  get ["Street label"]() {
    return AddNewCustomerPage["Street label"];
  }

  get ["Street input"]() {
    return AddNewCustomerPage["Street input"];
  }

  get ["Street Error"]() {
    return AddNewCustomerPage["Street Error"];
  }

  get ["House label"]() {
    return AddNewCustomerPage["House label"];
  }

  get ["House input"]() {
    return AddNewCustomerPage["House input"];
  }

  get ["House Error"]() {
    return AddNewCustomerPage["House Error"];
  }

  get ["Flat label"]() {
    return AddNewCustomerPage["Flat label"];
  }

  get ["Flat input"]() {
    return AddNewCustomerPage["Flat input"];
  }

  get ["Flat Error"]() {
    return AddNewCustomerPage["Flat Error"];
  }

  get ["Phone label"]() {
    return AddNewCustomerPage["Phone label"];
  }

  get ["Phone input"]() {
    return AddNewCustomerPage["Phone input"];
  }

  get ["Phone Error"]() {
    return AddNewCustomerPage["Phone Error"];
  }

  get ["Notes label"]() {
    return AddNewCustomerPage["Notes label"];
  }

  get ["Notes input"]() {
    return AddNewCustomerPage["Notes input"];
  }

  get ["Notes Error"]() {
    return AddNewCustomerPage["Name Error"];
  }

  get ["Save Changed button"]() {
    return `#save-customer-changes`
  }

  get ["Back button"]() {
    return `#back-to-customers-page`
  }

  get ["Delete button"]() {
    return `#delete-customer-btn`
  }
}

export default new EditCustomerPage();
