<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="$router.back()"> </van-nav-bar>
    <form-submit @submit="onsubmit"></form-submit>
  </div>
</template>

<script>
import * as Types from '@/store/actions-types'
import FormSubmit from "@/components/form-submit";
import { createNamespacedHelpers } from "vuex";
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
    onsubmit(value) {
      this[Types.SET_LOGIN](value)

    },
  },
};
</script>

<style>
</style>