import SignInPage from "../../pages/sign-in.page";
import CommonSteps from "../../steps/common.steps";
import SignInSteps from "../../steps/sign-in.steps";
import CustomersPage from "../../pages/customers/customers.page";
import HomeSteps from "../../steps/home.steps";
import { generateNewCustomer } from "../../data/customers/customers.data";
import { ICustomer } from "../../../services/types";
import CustomersService from "../../../services/customers.service";
import ListSteps from "../../steps/list.steps";
import { AxiosResponse } from "axios";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/ui/test/customers/search.test.js

let customer: ICustomer;
let token: string;
let response: AxiosResponse;

describe("[Customers] Customer list search tests", function () {
  beforeEach(async function () {
    customer = generateNewCustomer();
    await SignInSteps.openSalesPortal();
    await CommonSteps.waitForPageIsLoaded();
    await SignInSteps.signIn();
    await CommonSteps.waitForPageIsLoaded();
    token = await CommonSteps.getAuthorizationToken();
    response = await CustomersService.create({ token, data: customer });
    await HomeSteps.openCustomersPage();
  });

  afterEach(async function () {
    await CustomersService.delete({ token, data: { _id: response.data.Customer._id } });    
    await CommonSteps.signOut();
  });

  it("Should search by customer's email", async function () {
    await ListSteps.searchInTable(CustomersPage, customer.email);
    const actual = await ListSteps.getSearchChipButtonText(CustomersPage);
    expect(actual).toBe(customer.email);
    await ListSteps.verifyTableData(CustomersPage);
  });

  it("Should search by customer's name", async function () {
    await ListSteps.searchInTable(CustomersPage, customer.name);
    const actual = await ListSteps.getSearchChipButtonText(CustomersPage);
    expect(actual).toBe(customer.name);
    await ListSteps.verifyTableData(CustomersPage);
  });

  it("Should search by customer's country", async function () {
    await ListSteps.searchInTable(CustomersPage, customer.country);
    const actual = await ListSteps.getSearchChipButtonText(CustomersPage);
    expect(actual).toBe(customer.country);
    await ListSteps.verifyTableData(CustomersPage);
  });
});
