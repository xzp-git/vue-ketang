import axios from "@/utils/axios";



// 登录接口
export const toLogin = () => axios.set('/user/login',data)

// 验证是否登录
export const validate = () => axios.get('user/validate')