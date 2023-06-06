import requestApi from "../utils/request/requestApi";
import { RequestOptions, RequestParams } from "../utils/request/types";
import { apiConfig } from "../config/apiconfig";
import { ICredentials } from "./types/authorization.types";

class AuthorizationService {
	async login(params: RequestParams<ICredentials>) {
		const options: RequestOptions = {
			method: 'post',
			baseURL: apiConfig.baseUrl,
			url: apiConfig.endpoints.Login,
			headers: {},
			data: params.data
		};
		return requestApi.sendRequest(options);
	}
}
export default new AuthorizationService();