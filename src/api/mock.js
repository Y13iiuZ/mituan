import Mock from 'mockjs'
import homeApi from './mockData/homeApi'
import storeApi from './mockData/storeApi'
import addressApi from './mockData/addressApi'
Mock.mock('/home/getHomeData',homeApi.getHomeData)
Mock.mock('/home/getStoreData',storeApi.getStoreData)
Mock.mock('/home/getAddressData',addressApi.getAddressData)