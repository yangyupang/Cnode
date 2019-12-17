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
    <div>
      <div class="details" v-for="(item,index) in arr[currentPage-1]" :key="index">
        <div>
          <img :src="item.author.avatar_url" alt />
        </div>
        <div>{{item.reply_count}}/{{item.visit_count}}</div>
        <div>
          <span v-if="item.top === true" class="bg">置顶</span>
          <span v-else-if="item.tab === 'share'" class="bg1">分享</span>
          <span v-else-if="item.tab === 'ask'" class="bg1">问答</span>
          <span v-else-if="item.good === true" class="bg">精华</span>
        </div>
        <div @click="run(item.id,item.author.loginname)">
          <a>{{item.title}}</a>
        </div>
        <div>{{times(item.last_reply_at)}}</div>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :hide-on-single-page="value"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/cnode/Pagination";
export default {
  data() {
    return {
      num: 1,
      list: [],
      currentPage: 1,
      value: false,
      pageSize: 10,
      arr: []
    };
  },
  components: {
    Pagination
  },
  methods: {
    change(data) {
      this.num = data;
    },
    times(oldtime) {
      let nowtime = new Date();
      // valueOf是转换成时间戳
      let time =
        this.$dayjs(nowtime).valueOf() - this.$dayjs(oldtime).valueOf();
      let days = time / (24 * 60 * 60 * 1000);
      let hours = time / (60 * 60 * 1000);
      let minu = time / (60 * 1000);
      if (days >= 1) {
        return parseInt(days) + "天前";
      } else if (days < 1 && hours >= 1) {
        return parseInt(hours) + "小时前";
      } else if (hours < 1) {
        return parseInt(minu) + "分钟前";
      }
    },
    getdata() {
      this.$axios
        .req("topics")
        .then(res => {
          this.list = res.data;
          this.paging();
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.paging();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = Number(val);
    },
    paging() {
      this.arr = [];
      for (let i = 0; i < this.list.length; i += this.pageSize) {
        this.arr.push(this.list.slice(i, i + this.pageSize));
      }
    },
    run(val1, val2) {
      this.$router.push({
        name: "content",
        params: {
          id: val1
        }
      });
      this.$store.state.loginname = val2;
    }
  },
  mounted() {
    this.getdata();
    this.times();
  },
  watch: {},
  computed: {
  },
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
    &:hover {
      color: rgb(128, 209, 247);
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
.details {
  display: flex;
  margin: 10px 0;
  div {
    &:nth-child(1) {
      width: 30px;
      height: 30px;
      img {
        width: 30px;
      }
    }
    &:nth-child(2) {
      height: 30px;
      width: 10%;
      line-height: 30px;
      margin: 0 10px;
      font-size: 14px;
    }
    &:nth-child(3) {
      margin-right: 30px;
      height: 30px;
      line-height: 30px;
    }
    &:nth-child(4) {
      width: 70%;
      height: 30px;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &:nth-child(5) {
      height: 30px;
      line-height: 30px;
    }
  }
}
.bg {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
}
.bg1 {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
}
.block {
  margin-left: 20%;
  margin-top: 30px;
}
</style>
