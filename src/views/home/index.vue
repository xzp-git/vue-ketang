<template>
  <div>
    <!-- <home-header :value="value" @input="change"></home-header> -->
    <home-header v-model="currentCategory"></home-header>
    <van-swipe class="my-swipe"  :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(slide,index) in slides" :key="index">
         <img :src="slide.url" alt="">
      </van-swipe-item>

    </van-swipe>
    {{ currentCategory }}
  </div>
</template>

<script>
import * as Types from "@/store/actions-types";
import HomeHeader from "./home-header.vue";
import { createNamespacedHelpers } from "vuex";
let {
  mapState: mapHomeState,
  mapMutations,
  mapActions,
} = createNamespacedHelpers("home");
export default {
  components: {
    HomeHeader,
  },
  computed: {
    ...mapHomeState(["category", "slides"]),
    currentCategory: {
      get() {
        return this.category;
      },
      set(value) {
        this[Types.SET_CATEGORY](value);
      },
    },
  },
  data() {
    // 全部课程 -1 node课程 0 react课程1 vue课程2
    return {
      value: -1,
    };
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
    ...mapActions([Types.SET_SLIDES]),
  },
  async mounted() {
    if (this.slides.length === 0) {
      try {
        await  this[Types.SET_SLIDES]();
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style lang="scss">
.my-swipe {
    height: 120px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>