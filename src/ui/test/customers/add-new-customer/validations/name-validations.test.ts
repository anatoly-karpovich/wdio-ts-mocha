import { ICustomer } from "../../../../../services/types";
import { generateNewCustomer } from "../../../../data/customers/customers.data";
import CustomersSteps from "../../../../steps/customers.steps";
import CommonSteps from "../../../../steps/common.steps";
import SignInSteps from "../../../../steps/sign-in.steps";
import HomeSteps from "../../../../steps/home.steps";
import AddNewCustomerPage from "../../../../pages/customers/add-customer.page";
import { names } from "../../../../../fixtures/customers/validations";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/ui/test/customers/add-new-customer/validations/name-validations.test.js

describe('[Customers] [Add New Customer] name validations', function() {
  let customer: ICustomer;
  let token: string;

  beforeEach(async function() {
    customer = generateNewCustomer();
    await SignInSteps.openSalesPortal();
    await CommonSteps.waitForPageIsLoaded();
    await SignInSteps.signIn();
    await CommonSteps.waitForPageIsLoaded();
    token = await CommonSteps.getAuthorizationToken();
  })

  afterEach(async function () {
    await CommonSteps.signOut();
  });

  for(const name of names) {
    it(`Should see error for ${name.testName}`, async function() {
      await HomeSteps.openCustomersPage();
      await CustomersSteps.openAddNewCustomerPage();
      await CustomersSteps.fillInCustomerData(customer)
      await AddNewCustomerPage.waitForElementAndSetValue(AddNewCustomerPage["Name input"], name.value)
      await CustomersSteps.verifyError(AddNewCustomerPage["Name Error"], name.message)
    })
  }
  
})