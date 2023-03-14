import axios from "axios"
import type {AxiosInstance,AxiosRequestConfig} from 'axios'

class WJZRequest{
    //request 实例 => axios实例
    instance:AxiosInstance

    constructor(config:AxiosRequestConfig){
        this.instance = axios.create(config)

        //拦截器

        this.instance.interceptors.request.use

    }

    //封装网络请求的方法
    request(config:AxiosRequestConfig){
        return this.instance.request(config)
    }

}

export default WJZRequest