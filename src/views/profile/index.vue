<template>
  <div class="profile">
    <van-nav-bar title="个人中心"> </van-nav-bar>
    <div class="profile-info">
      <template v-if="
      !$store.state.user.hasPermission">
        <img src="@/assets/logo.png" alt="" />
        <van-button size="small" to="/login">登录</van-button>
      </template>
      <template v-else>
        <img src="@/assets/logo.png" alt="" />
        <span>{{$store.state.user.username}}</span>
      </template>
    </div>

    <template  v-if="$store.state.user.menuPermission">
       <van-tabs type="card">
          <van-tab :title="item.name" v-for="item in  $store.state.user.authList" :to="item.path" :key="item.path"></van-tab>
        </van-tabs>
    </template>
   <router-view></router-view> 
   <van-button v-has='"edit"'>编辑</van-button>
   <van-button v-has='"remove"'>删除</van-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.profile {
  .profile-info {
    display: flex;
    align-items: center;
    height: 150px;
    padding: 0 15px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>