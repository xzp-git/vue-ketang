import * as Types from '@/store/actions-types'
import { toLogin, validate} from "@/api/user";
import per from "@/router/permission";

import router from "@/router";

const fileterRouter = (authList) => {
    authList = authList.map(item => item.auth)

    function filters(per) {
        let result =  per.filter(route => {
            if (authList.includes(route.meta.auth)) {
                return route
            }
        })
        return result
    }


    return filters(per)
}

const userActions = {
    async [Types.SET_LOGIN]({commit}, payload){
        let userInfo = await toLogin(payload);
        commit(Types.SET_USER,userInfo)
        commit(Types.SET_PERMISSION,true)
    },
    async [Types.VALIDATE]({commit}, payload){
        // 此时需要 看一下用户 是否登陆过
        if (!localStorage.getItem('token')) return false
        try {
            let result = await validate()
            commit(Types.SET_USER,result)
            commit(Types.SET_PERMISSION,true)
            return true
        } catch (error) {
            commit(Types.SET_USER,{})
            commit(Types.SET_PERMISSION,false)
            return false
        }
        
    },
    async [Types.ADD_ROUTE]({commit, state}, payload){
        //添加路由
        let authList = state.authList

        let routes = fileterRouter(authList)
        console.log(routes);

        let route =  router.options.routes.find(item => item.path == '/profile')

        route.children = routes;

        router.addRoutes([route])
        commit(Types.SET_MENU_PERMISSION,true)
    }

}

export default userActions