import { Id, RequestOptions, RequestParams } from "../utils/request/types";
import { ICustomer, ICustomerResponse } from "./types";
import { apiConfig } from "../config/apiconfig";
import requestApi from "../utils/request/requestApi"; 

class CustomersService {
	async get(params: RequestParams<Id>){
		const options: RequestOptions = {
			method: 'get',
			baseURL: apiConfig.baseUrl,
			url: params.data ? apiConfig.endpoints["Get Customer By Id"](params.data._id) : apiConfig.endpoints.Customers,
			headers: { Authorization: `Bearer ${params.token}` }
		};
		return requestApi.sendRequest(options);
	}

	async create(params: Required<RequestParams<ICustomer>>) {
		const options: RequestOptions = {
			method: 'post',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints.Customers,
			headers: { Authorization: `Bearer ${params.token}` },
			data: params.data
		};
		return requestApi.sendRequest(options);
	}

	async update(params: Required<RequestParams<ICustomerResponse>>) {
		const options: RequestOptions<ICustomer> = {
			method: 'put',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints.Customers,
			headers: { Authorization: `Bearer ${params.token}` },
			data: params.data
		};
		return requestApi.sendRequest(options);
	}

	async delete(params: RequestParams<Id>) {
		const options: RequestOptions<ICustomer> = {
			method: 'delete',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints["Get Customer By Id"](params.data._id),
			headers: { Authorization: `Bearer ${params.token}` },
		};
		return requestApi.sendRequest(options);
	}
}

export default new CustomersService();