<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"> </van-nav-bar>
    <form-submit @submit="onsubmit"></form-submit>
  </div>
</template>

<script>
import * as Types from '@/store/actions-types'
import FormSubmit from "@/components/form-submit";
import { createNamespacedHelpers } from "vuex";
import { Dialog } from "vant";
let {
  mapActions,
} = createNamespacedHelpers("user");
export default {
  components: {
    FormSubmit,
  },
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
    };
  },
  methods: {
    ...mapActions([Types.SET_LOGIN]),
    async onsubmit(value) {
      try {
       await  this[Types.SET_LOGIN](value)
       this.$router.push('/profile')
      } catch (e) {
        Dialog.alert({
          title:'登录失败',
          message:e.data
        })
      }

    },
  },
};
</script>

<style>
</style>