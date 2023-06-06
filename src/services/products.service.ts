import { Id, RequestOptions, RequestParams } from "../utils/request/types";
import { IProduct } from "./types";
import { apiConfig } from "../config/apiconfig";
import requestApi from "../utils/request/requestApi"; 

class ProductsService {
	async get(params: RequestParams<Id>){
		const options: RequestOptions = {
			method: 'get',
			baseURL: apiConfig.baseUrl,
			url: params.data ? apiConfig.endpoints["Get Product By Id"](params.data._id) : apiConfig.endpoints.Products,
			headers: { Authorization: `Bearer ${params.token}` }
		};
		return requestApi.sendRequest(options);
	}

	async create(params: RequestParams<IProduct>) {
		const options: RequestOptions = {
			method: 'post',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints.Products,
			headers: { Authorization: `Bearer ${params.token}` },
			data: params.data
		};
		return requestApi.sendRequest(options);
	}

	async update(params: RequestParams<IProduct>) {
		const options: RequestOptions = {
			method: 'put',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints.Products,
			headers: { Authorization: `Bearer ${params.token}` },
			data: params.data
		};
		return requestApi.sendRequest(options);
	}

	async delete(params: RequestParams<Id>) {
		const options: RequestOptions = {
			method: 'delete',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints["Get Product By Id"](params.data._id),
			headers: { Authorization: `Bearer ${params.token}` },
		};
		return requestApi.sendRequest(options);
	}
}

export default new ProductsService();