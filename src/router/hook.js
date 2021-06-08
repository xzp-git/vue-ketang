import store from "../store"
import * as Types from '@/store/actions-types'

export default{
    // 此字段只是给自己看的没有任何实际意义
    'clear_token': async (to, from, next) => {
        store.commit(Types.CLEAR_TOKEN) //清空token
        next()
    },
    'login_permission': async (to,from,next) => {

        // 用户是否需要登录
       let needLogin = to.matched.some(item =>item.meta.needLogin)
        //若果vuex有值
        if (!store.state.user.hasPermission) {
           let isLogin = await  store.dispatch(`user/${Types.VALIDATE}`)
           console.log(isLogin);
            
           if (needLogin) {
               if (!isLogin) {
                   next('/login') //需要登录没登录
               }else{
                   next() //需要登录登录了
               }
           }else{ //不需要登录
            if (to.name == 'login') { //访问的是登录页面
                if (!isLogin) {
                    next() //没登录
                }else{
                    next('/profile') //需要登录登录了
                }
            }else{
                next()
            }
           }
       
       
        }else{
            if (to.name == 'login') {
                next('/profile')
            }else{
                next()
            }
        }
    
    }
}