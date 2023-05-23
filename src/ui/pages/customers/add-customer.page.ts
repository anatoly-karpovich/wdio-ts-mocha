import { BasePage } from "../basePage.page";

class AddNewCustomerPage extends BasePage {
  uniqueElement = `//h2[.='Add New Customer']`;

  get ['Title']() {
    return `h2.pageTitle`
  }

  get ["Email label"]() {
    return `label[for="inputEmail"]`;
  }

  get ["Email input"]() {
    return `#inputEmail`;
  }

  get ["Email Error"]() {
    return `#error-inputEmail`;
  }

  get ["Name label"]() {
    return `label[for="inputName"]`;
  }

  get ["Name input"]() {
    return `#inputName`;
  }

  get ["Name Error"]() {
    return `#error-inputName`;
  }

  get ["Country label"]() {
    return `label[for="inputCountry"]`;
  }

  get ["Country dropdown"]() {
    return `#inputCountry`;
  }

  get ["Country values"]() {
    return `#inputCountry > option`;
  }

  get ["City label"]() {
    return `label[for="inputCity"]`;
  }

  get ["City input"]() {
    return `#inputCity`;
  }

  get ["City Error"]() {
    return `#error-inputCity`;
  }

  get ["Street label"]() {
    return `label[for="inputStreet"]`;
  }

  get ["Street input"]() {
    return `#inputStreet`;
  }

  get ["Street Error"]() {
    return `#error-inputStreet`;
  }

  get ["House label"]() {
    return `label[for="inputHouse"]`;
  }

  get ["House input"]() {
    return `#inputHouse`;
  }

  get ["House Error"]() {
    return `#error-inputHouse`;
  }

  get ["Flat label"]() {
    return `label[for="inputFlat"]`;
  }

  get ["Flat input"]() {
    return `#inputFlat`;
  }

  get ["Flat Error"]() {
    return `#error-inputFlat`;
  }

  get ["Phone label"]() {
    return `label[for="inputPhone"]`;
  }

  get ["Phone input"]() {
    return `#inputPhone`;
  }

  get ["Phone Error"]() {
    return `#error-inputPhone`;
  }

  get ["Notes label"]() {
    return `label[for="textareaNotes"]`;
  }

  get ["Notes input"]() {
    return `#textareaNotes`;
  }

  get ["Notes Error"]() {
    return `#error-textareaNotes`;
  }

  get ["Save New Customer button"]() {
    return `#save-new-customer`
  }

  get ["Back button"]() {
    return `#back-to-customers-page`
  }

  get ["Clear All button"]() {
    return `button.btn-link`
  }
}

export default new AddNewCustomerPage();
