import CustomersService from "../../services/customers.service";
import { generateNewCustomer } from "../../ui/data/customers/customers.data";
import CommonSteps from "../../ui/steps/common.steps";
import forEach from "../../utils/array/forEach";

class CustomerApiSteps {
  async createCustomers(numberOfCustomers?: number) {
    const token = await CommonSteps.getAuthorizationToken();
    if (numberOfCustomers && numberOfCustomers > 1) {
      let customers = [];
      for (let i = 0; i < numberOfCustomers; i++) {
        customers.push(CustomersService.create({ token, data: generateNewCustomer() }));
      }
      return await Promise.all(customers);
    }
    const customer = await CustomersService.create({ token, data: generateNewCustomer() });
    return customer;
  }

  async deleteCustomers(arrayOfId: Array<string>) {
    const token = await CommonSteps.getAuthorizationToken();
    forEach(arrayOfId, async (_id: string) => {
      await CustomersService.delete({ token, data: { _id } });
    });
  }
}

export default new CustomerApiSteps();
