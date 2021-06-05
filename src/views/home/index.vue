<template>
  <div>
    <!-- <home-header :value="value" @input="change"></home-header> -->
    <home-header v-model="currentCategory"></home-header>
    {{currentCategory}}
  </div>
</template>

<script>
import * as Types from "@/store/actions-types";
import HomeHeader from "./home-header.vue";
import { createNamespacedHelpers } from "vuex";
let {mapState:mapHomeState,mapMutations, mapActions} = createNamespacedHelpers('home')
export default { 
  components:{
    HomeHeader
  },
  computed:{
    ...mapHomeState(['category','slides']),
    currentCategory:{
      get(){
        return this.category
      },
      set(value){
        this[Types.SET_CATEGORY](value)
      }
    }
  }, 
  data(){
    // 全部课程 -1 node课程 0 react课程1 vue课程2
    return {
      value:-1
    }
  },
  methods:{
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES])
  },
  mounted(){
    if (!this.slides.length) {
      this[Types.SET_SLIDES]()
    }
  }
}
</script>

<style>

</style>