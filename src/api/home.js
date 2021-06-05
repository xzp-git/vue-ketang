import axios from "@/utils/axios";



// 设置接口 state -> action-types -> api -> actions ->mutions

export const fetchSlides = () => axios.get('/api/slider')