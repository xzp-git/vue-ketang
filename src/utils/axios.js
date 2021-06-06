import axios from "axios";
import store from "../store";
import * as Types from '@/store/actions-types'



class HttpRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:7001';
        this.timeout = 3000;
        // loading 需要加
        this.queue = {} //专门用来维护请求队列的
        //页面切换 我需要取消请求


    }
    setInterceptor(instance, url) {
        instance.interceptors.request.use((config) => {
           
            // 开启loading
            if(!Object.keys(this.queue).length){
                //  loading
            }
            // 可以记录请求的取消函数
            let CancelToken = axios.CancelToken
            config.cancelToken = new CancelToken((c) => {//存到vuex中，页面切换的时候组件销毁的时候执行
                // c就是当前取消请求的token
                store.commit(Types.SET_TOKEN,c)
            })
            
            this.queue[url] = true
            return config
        })

        instance.interceptors.response.use((res) => {
            delete this.queue[url] //一旦响应了 就从队列删除
            if(!Object.keys(this.queue).length){
                // close loading
            }
            if (res.data.err == 0) {
                return res.data.data; //可以配合switchCase 状态
            }else{
                
                return Promise.reject(res.data) //失败抛出异常即可
            }
        
        },err => {
            delete this.queue[url]
            if(!Object.keys(this.queue).length){
                // close loading
            }
            return Promise.reject(err)
        })
    }
    request(options) { //通过request方法来进行请求操作
        //每次请求可以创建一个新的实例，如果业务不复杂你可以不创建 直接使用axios

        let instance = axios.create()

        let config = {
            baseURL: this.baseURL,
            timeout: this.timeout,
            ...options
        }


        this.setInterceptor(instance, config.url)
        return instance(config)  //产生的是一个 promis axios()

    }
    get(url, data = {}) { //url, { } axios.get('/xxx',{name:xxx})
        return this.request({
            url,
            methods: 'get',
            ...data
        })
    }

    set(url, data = {}) {
        return this.request({
            url,
            methods: 'post',
            data
        })
    }
}

// a里面的请求 有独立的拦截器

// b里面也有拦截器

export default new HttpRequest