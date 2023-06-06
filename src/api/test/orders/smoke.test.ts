import { AxiosResponse } from "axios";
import AuthorizationService from "../../../services/authorization.service";
import OrdersService from "../../../services/orders.service";
import { IOrder } from "../../../services/types";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/api/test/orders/smoke.test.js

describe("Orders smoke tests", function () {
  const ids: string[] = [];
  let response: AxiosResponse;
  let token: string;

  before(async function () {
    response = await AuthorizationService.login({ data: { username: "aqacourse@gmail.com", password: "password" } });
    token = response.data.token;
  });

  it("Should receive all orders", async function () {
    response = await OrdersService.get({ token });
    const orders = response.data.Orders;
    orders.forEach((order: IOrder) => {
      ids.push(order._id);
    });
    console.log(ids);
  });

  it.skip("Should delete order", async function () {
    for (const _id of ids) {
      await OrdersService.delete({ token, data: { _id } });
    }
  });
});
