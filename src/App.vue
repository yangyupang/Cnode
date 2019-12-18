<template>
  <div>
    <!-- <template>
      <el-backtop target=".wraper" :bottom="100">
        <div
          style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >UP</div>
      </el-backtop>
    </template>-->
    <BackTop>
      <router-view />
    </BackTop>
  </div>
</template>

<script>
import BackTop from "./components/cnode/BackTop";
export default {
  data() {
    return {};
  },
  components: { BackTop }
};
</script>
<style lang="scss">
@import "./styles/common";
body,
html {
  margin: 0;
  padding: 0;
}
// .wraper {
//   height: 100vh;
//   overflow-x: hidden;
// }
</style>
