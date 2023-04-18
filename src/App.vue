<template>
  <div class="main-page">
    <div class="sidebar">
    <SideBarApp/>
    </div>
    <div class="router-view">
    <router-view></router-view>
    </div>
  </div>
</template>

<script  setup>
  import SideBarApp from './components/SideBarApp/SideBarApp.vue';
</script>

<style  scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
.main-page{
  display: flex;
  gap: 30px;
 }
.sidebar{
  width: 25%;
  background-color: aliceblue;
  height: 100vh;
  position: sticky;
  top: 0;
}
.router-view{
  width: 80%;
}

</style>