import { Id, RequestOptions, RequestParams } from "../utils/request/types";
import { IOrderData } from "./types";
import { apiConfig } from "../config/apiconfig";
import requestApi from "../utils/request/requestApi"; 

class OrderService {
  async get(params: RequestParams<Id>) {
      const options: RequestOptions = {
          method: 'get',
          baseURL: apiConfig.baseUrl,
          url: params.data ? apiConfig.endpoints["Get Order By Id"](params.data._id) : apiConfig.endpoints.Orders,
          headers: { 
              Authorization: `Bearer ${params.token}`,
              ["Content-Type"]: "application/json" 
          },
        };
        return requestApi.sendRequest(options);
  }

  async create(params: RequestParams<IOrderData>) {
      const options: RequestOptions = {
          method: "post",
          baseURL: apiConfig.baseUrl,
          url: apiConfig.endpoints.Orders,
          headers: { 
              Authorization: `Bearer ${params.token}`,
              ["Content-Type"]: "application/json" 
          },
          data: params.data
        };
        return requestApi.sendRequest(options); 
  }

  async edit(params: RequestParams<IOrderData>) {
    const options: RequestOptions = {
      method: "put",
      baseURL: apiConfig.baseUrl,
      url: apiConfig.endpoints.Orders,
      headers: { 
          Authorization: `Bearer ${params.token}`,
          ["Content-Type"]: "application/json" 
      },
      data: params.data
    };
        return requestApi.sendRequest(options); 
  }

  async delete(params: RequestParams<Id>) {
      const options: RequestOptions = {
          method: "delete",
          baseURL: apiConfig.baseUrl,
          url: apiConfig.endpoints["Get Order By Id"](params.data._id),
          headers: { 
              Authorization: `Bearer ${params.token}`,
              ["Content-Type"]: "application/json" 
          },
        };
        return requestApi.sendRequest(options); 
  }

  // static async submitDelivery(delivery) {
  //     const options = {
  //         method: "post",
  //         baseURL: BASE_URL,
  //         url: ENDPOINTS["Order Delivery"],
  //         headers: { 
  //             Authorization: getAuthorizationCookie(),
  //             ["Content-Type"]: "application/json" 
  //         },
  //         data: delivery
  //       };
  //       return requestApi.sendRequest(options); 
  // }

  // static async changeOrderStatus(_id, status) {
  //     const options = {
  //         method: "put",
  //         baseURL: BASE_URL,
  //         url: ENDPOINTS["Order Status"],
  //         headers: { 
  //             Authorization: getAuthorizationCookie(),
  //             ["Content-Type"]: "application/json" 
  //         },
  //         data: { _id, status }
  //       };
  //       return requestApi.sendRequest(options); 
  // }

  // static async receiveProducts(_id, products) {
  //     const options = {
  //         method: "post",
  //         baseURL: BASE_URL,
  //         url: ENDPOINTS["Order Receive"],
  //         headers: { 
  //             Authorization: getAuthorizationCookie(),
  //             ["Content-Type"]: "application/json" 
  //         },
  //         data: { _id, products }
  //       };
  //       return requestApi.sendRequest(options); 
  // }

  // static async createComment(_id, comments) {
  //     const options = {
  //         method: "post",
  //         baseURL: BASE_URL,
  //         url: ENDPOINTS["Order Comments"],
  //         headers: { 
  //             Authorization: getAuthorizationCookie(),
  //             ["Content-Type"]: "application/json" 
  //         },
  //         data: { _id, comments }
  //       };
  //       return requestApi.sendRequest(options); 
  // }

  // static async requestApi.deleteComment(_id, comments) {
  //     const options = {
  //         method: "put",
  //         baseURL: BASE_URL,
  //         url: ENDPOINTS["Order Comments"],
  //         headers: { 
  //             Authorization: getAuthorizationCookie(),
  //             ["Content-Type"]: "application/json" 
  //         },
  //         data: { _id, comments }
  //       };
  //       return sendRequest(options); 
  // }
}

export default new OrderService();