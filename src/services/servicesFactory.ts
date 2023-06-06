import CustomersService from "./customers.service";
import ProductsService from "./products.service";
import OrdersService from "./orders.service";
import AuthorizationService from "./authorization.service";

export default {
  customers: CustomersService,
  products: ProductsService,
  orders: OrdersService,
  authorization: AuthorizationService,
};
