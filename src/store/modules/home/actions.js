import * as Types from '@/store/actions-types'
import { fetchSlides } from "@/api/home.js";

const homeActions = {
    async [Types.SET_SLIDES]({commit}){
        let slides = await fetchSlides();
        commit(Types.SET_SLIDES,slides)
    }
}

export default homeActions