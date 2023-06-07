import CommonSteps from "../../steps/common.steps";
import SignInSteps from "../../steps/sign-in.steps";
import CustomerSteps from "../../steps/customers.steps";
import AddNewCustomerPage from "../../pages/customers/add-customer.page";
import CustomersPage from "../../pages/customers/customers.page";
import HomeSteps from "../../steps/home.steps";
import { generateNewCustomer } from "../../data/customers/customers.data";
import { ICustomer } from "../../../services/types";
import CustomersService from "../../../services/customers.service";
import EditCustomerPage from "../../pages/customers/edit-customer.page";
import ListSteps from "../../steps/list.steps";
import DetailsSteps from "../../steps/details.steps";

//To run this suite: npm run build && npx wdio dist/wdio.conf.js --spec dist/src/ui/test/customers/smoke.test.js

let customer: ICustomer;
let token: string;

describe("[Customers] Customer CRUD smoke tests", function () {
  beforeEach(async function () {
    customer = generateNewCustomer();
    await SignInSteps.openSalesPortal();
    await CommonSteps.waitForPageIsLoaded();
    await SignInSteps.signIn();
    await CommonSteps.waitForPageIsLoaded();
    token = await CommonSteps.getAuthorizationToken();
  });

  afterEach(async function () {
    const customers = await CustomersService.get({ token });
    const createdCustomer = customers.data.Customers.find((c: ICustomer) => c.email === customer.email);
    if(createdCustomer) {
      await CustomersService.delete({ token, data: { _id: createdCustomer._id } });    
    }
    await CommonSteps.signOut();
  });

  it("Should create customer with valid data", async function () {
    await HomeSteps.openCustomersPage();
    await CustomerSteps.openAddNewCustomerPage();
    await CustomerSteps.fillInCustomerData(customer);
    await AddNewCustomerPage.waitForElementAndClick(AddNewCustomerPage["Save New Customer button"]);
    await CustomersPage.waitForPage(CustomersPage.uniqueElement);
    await CommonSteps.verifyNotificationText("Customer was successfully created");
    await CommonSteps.closeNotification();
  });

  it("Should update customer with valid data", async function () {
    await CustomersService.create({ token, data: customer });
    await HomeSteps.openCustomersPage();
    await CustomerSteps.openEditCustomerPage(customer.email);
    await CommonSteps.waitForPageIsLoaded();
    await CustomersPage.waitForPage(EditCustomerPage.uniqueElement);
    customer = generateNewCustomer();
    await CustomerSteps.fillInCustomerData(customer);
    await CustomersPage.waitForElementAndClick(EditCustomerPage["Save Changed button"]);
    await CommonSteps.waitForPageIsLoaded();
    await CustomersPage.waitForPage(CustomersPage.uniqueElement);
    await CommonSteps.verifyNotificationText("Customer was successfully updated");
    await CommonSteps.closeNotification();
  });

  it("Should check customer details", async function() {
    await CustomersService.create({ token, data: customer });
    await HomeSteps.openCustomersPage();
    await CustomerSteps.openCustomerDetailsModal(customer.email);
    await DetailsSteps.verifyDetailsModalData(customer);
    await DetailsSteps.closeDetailsModal();
  })

  it("Should open edit customer page from details modal", async function() {
    await CustomersService.create({ token, data: customer });
    await HomeSteps.openCustomersPage();
    await CustomerSteps.openCustomerDetailsModal(customer.email);
    await DetailsSteps.openEditPage(EditCustomerPage);
  })

  it("Should delete created customer", async function() {
    await CustomersService.create({ token, data: customer });
    await HomeSteps.openCustomersPage();
    await ListSteps.deleteEntryByUniqueValue(customer.email)
  })
});
