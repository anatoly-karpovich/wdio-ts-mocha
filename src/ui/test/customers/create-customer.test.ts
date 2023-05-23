import SignInPage from "../../pages/sign-in.page";
import CommonSteps from "../../steps/common.steps";
import SignInSteps from "../../steps/sign-in.steps";
import CustomerSteps from "../../steps/customers.steps";
import ListSteps from "../../steps/list.steps";
import HomeSteps from "../../steps/home.steps";
import AddNewCustomerPage from "../../pages/customers/add-customer.page";
import CustomersPage from "../../pages/customers/customers.page";
import { ICustomer, generateNewCustomer } from "../../data/customers/customers.data";

let customer: ICustomer;
//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/ui/test/customers/create-customer.test.js

describe("Should create customer with valid data", function () {
  beforeEach(async function () {
    customer = generateNewCustomer();
    await SignInPage.open();
    await CommonSteps.waitForPageIsLoaded();
    await SignInSteps.signIn();
    await HomeSteps.openCustomersPage();
    await CustomerSteps.openAddNewCustomerPage();
  });
  afterEach(async function () {
    await ListSteps.deleteEntryByUniqueValue(customer.email)
    await CommonSteps.signOut();
    await CommonSteps.waitForPageIsLoaded();
  });

  it("Should create customer with valid data", async function () {
    await CommonSteps.waitForPageIsLoaded();
    await CustomerSteps.fillInCustomerData(customer);
    await AddNewCustomerPage.waitForElementAndClick(AddNewCustomerPage["Save New Customer button"]);
    await CommonSteps.waitForPageIsLoaded();
    await CustomersPage.waitForPage(CustomersPage.uniqueElement);
    await CommonSteps.verifyNotificationText("Customer was successfully created")
    await CommonSteps.closeNotification();
  });
});
