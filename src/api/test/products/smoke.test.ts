import { AxiosResponse } from "axios";
import AuthorizationService from "../../../services/authorization.service";
import { IProduct } from "../../../services/types";
import ProductsService from "../../../services/products.service";

//To run this suite: npx wdio dist/wdio.conf.js --spec dist/src/api/test/products/smoke.test.js

describe("Orders smoke tests", function () {
  const ids: string[] = [];
  let response: AxiosResponse;
  let token: string;

  before(async function () {
    response = await AuthorizationService.login({ data: { username: "aqacourse@gmail.com", password: "password" } });
    token = response.data.token;
  });

  it("Should receive all products", async function () {
    response = await ProductsService.get({ token });
    const products = response.data.Products;
    products.forEach((customer: IProduct) => {
      ids.push(customer._id);
    });
    console.log(ids);
  });

  it.skip("Should delete product", async function () {
    for (const _id of ids) {
      await ProductsService.delete({ token, data: { _id } });
    }
  });
});
