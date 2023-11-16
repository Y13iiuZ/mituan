import axios  from "./request";
/** 首页数据接口 **/
export const getApiHomeData = (param)=>{
    return axios.request({
        url:'/home/getHomeData',
        method:'get',
        data:param
    })
}

/** 商店数据接口  **/
export const getApiStoreData = (param)=>{
    return axios.request({
        url:'/home/getStoreData',
        method:'get',
        data:param
    })
}

/** 地址数据接口  **/
export const getApiAddressData = (param)=>{
    return axios.request({
        url:'/home/getAddressData',
        method:'get',
        data:param
    })
}