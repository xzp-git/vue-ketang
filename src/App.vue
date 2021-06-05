<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/lesson">我的课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/profile">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
/*这里我们可以覆盖vant的样式*/
#app{
  .van-dropdown-menu__bar{
    background-color: $background;
  }
  .van-dropdown-menu__title{
    color: $color;
  }
}

</style>
