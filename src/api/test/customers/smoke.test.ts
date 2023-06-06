import { AxiosResponse } from "axios";
import AuthorizationService from "../../../services/authorization.service";
import { ICustomerResponse } from "../../../services/types";
import CustomersService from "../../../services/customers.service";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/api/test/customers/smoke.test.js

describe("Orders smoke tests", function () {
  const ids: string[] = [];
  let response: AxiosResponse;
  let token: string;

  before(async function () {
    response = await AuthorizationService.login({ data: { username: "aqacourse@gmail.com", password: "password" } });
    token = response.data.token;
  });

  it("Should receive all customers", async function () {
    response = await CustomersService.get({ token });
    const customers = response.data.Customers;
    customers.forEach((customer: ICustomerResponse) => {
      ids.push(customer._id);
    });
    console.log(ids);
  });

  it.skip("Should delete customer", async function () {
    for (const _id of ids) {
      await CustomersService.delete({ token, data: { _id } });
    }
  });
});
