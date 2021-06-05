import store from "../store"
import * as Types from '@/store/actions-types'

export default{
    // 此字段只是给自己看的没有任何实际意义
    'clear_token': async (to, from, next) => {
        store.commit(Types.CLEAR_TOKEN) //清空token
        next()
    }

}