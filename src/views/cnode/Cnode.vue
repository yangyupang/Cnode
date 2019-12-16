<template>
  <div>
    <div class="header">
      <a href="#" class="topic-tab" :class="{currentTab :num ===1}" @click="change(1)">全部</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===2}" @click="change(2)">精华</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===3}" @click="change(3)">分享</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===4}" @click="change(4)">问答</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===5}" @click="change(5)">招聘</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===6}" @click="change(6)">客户端测试</a>
    </div>
    <div></div>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from "../../components/cnode/Pagination";
export default {
  data() {
    return {
      num:1,
      list:[],
    };
  },
  components: {
    Pagination
  },
  methods: {
    change(val){
      this.num =val
    },
     getdata() {
      this.$axios
        .req("topics")
        .then(res => {
          this.list = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.header {
  height: 30px;
  background-color: #f6f6f6;
  border-radius: 5px;
  line-height: 40px;
  padding: 10px;
  a {
    &:hover{
      color:rgb(128, 209, 247);
    }
  }
  .topic-tab {
    // background-color: #80bd01;
    // color: #fff;
    // padding: 3px 4px;
    // border-radius: 3px;
    margin: 0 10px;
    color: #80bd01;
  }
}
.currentTab {
  background-color: #80bd01;
  color: #fff !important;
  padding: 3px 4px;
  border-radius: 3px;
}
</style>
