
import Fly from 'flyio' 
import baseUrl from './baseUrl' 

const fly = new Fly() 
// http 请求拦截 
fly.interceptors.request.use((config) => {
    config.baseURL = baseUrl;
    return config;
})

// http 相应拦截
fly.interceptors.response.use((response, promise) => {

    return promise.resolve(response.data)
}, (err, promise) => {
    return promise.resolve()
})

export default fly