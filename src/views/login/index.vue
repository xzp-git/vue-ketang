<template>
  <div>
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()">
    </van-nav-bar>
    <form-submit @submit="onsubmit"></form-submit>
  </div>
</template>

<script>
import FormSubmit from "@/components/form-submit";
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
    onsubmit(value) {
      console.log(value);
    },
  },
};
</script>

<style>
</style>