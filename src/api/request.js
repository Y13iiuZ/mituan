import axios from 'axios'
//实际根据环境而配置！
const baseUrl = ''
class httpRequest {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl:this.baseUrl,
            header:{}
        }
        return config
    }

    //拦截器
    interceptors(axioss){
        axioss.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
          }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
          });
        
        // 添加响应拦截器
        axioss.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            const { code,data } = response.data
            if(code == 200) return data
            else {

            }
            // return response;
          }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
          });
    }

    request (options){
        const axioss =axios.create()
        options = {...this.getInsideConfig(),...options}
        this.interceptors(axioss)
        return axioss(options)
    }
}
export default new httpRequest(baseUrl);