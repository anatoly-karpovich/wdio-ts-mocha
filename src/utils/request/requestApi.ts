import { RequestOptions } from "./types";
import { AxiosRequestConfig, AxiosResponse} from "axios";
import axios from "axios";


export type Response<T = any> = Promise<AxiosResponse<T>>;

const request = axios.create()
let response: AxiosResponse;

class RequestApi {
    async sendRequest(options:RequestOptions):Response {
        options.timeout ? options.timeout : 120000        
        try {
            response = await request(options as AxiosRequestConfig)
        }
        catch(err) {
            console.log('Error', err.isAxiosError ? err.message : err)
            console.log('Request URL:', options.method, options.url)
        }
        return response;
    }
}

export default new RequestApi()