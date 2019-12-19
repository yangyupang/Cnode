<template>
  <div>
    <!-- 中间内容(全部,精华,分析,问答...) -->
    <div class="header">
      <a href="#" class="topic-tab" :class="{currentTab :num ===1}" @click="change(1)">全部</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===2}" @click="change(2)">精华</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===3}" @click="change(3)">分享</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===4}" @click="change(4)">问答</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===5}" @click="change(5)">招聘</a>
      <a href="#" class="topic-tab" :class="{currentTab :num ===6}" @click="change(6)">客户端测试</a>
    </div>
    <!-- 循环填充获取到的数据 展示在页面内-->
    <div>
      <div class="details" v-for="(item,index) in list.slice((currentPage-1)*pageSize,pageSize*currentPage)" :key="index">
        <div>
          <!-- 作者头像 存在时-->
          <img :src="item.author.avatar_url" onerror="onerror=null;src='../../assets/image/default.png'" alt :title="item.author.loginname"/>
        </div>

        <!-- 回复人数/浏览次数 -->
        <div>{{item.reply_count}}/{{item.visit_count}}</div>
        <!-- 帖子类型 -->
        <div>
          <span v-if="item.top === true" class="bg">置顶</span>
          <span v-else-if="item.good === true" class="bg">精华</span>
          <span v-else-if="item.tab === 'share'" class="bg1">分享</span>
          <span v-else-if="item.tab === 'ask'" class="bg1">问答</span>
        </div>
        <!-- 帖子标题 -->
        <div @click="run(item.id,item.author.loginname)">
          <a>{{item.title}}</a>
        </div>
        <!-- 帖子最后一个回复人和回复时间 -->
        <div>{{times(item.last_reply_at)}}</div>
      </div>
    </div>
    <!-- 分页方法 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
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
      //确认点击的哪一项,方便添加样式
      num: 1,
      //用于接收接口获取到的数据
      list: [],
      //分页时显示的第几页
      currentPage: 1,
      //每一页有多少条数据
      pageSize: 10,
      //
      // arr: []
    };
  },
  components: {
    Pagination
  },
  methods: {
    //中间内容(全部,精华,分析,问答...)点击改变样式
    change(data) {
      this.num = data;
    },
    //求帖子最后一个回复人的回复时间
    times(oldtime) {
      let nowtime = new Date();
      // valueOf是转换成时间戳
      let time =
        this.$dayjs(nowtime).valueOf() - this.$dayjs(oldtime).valueOf();
      let days = time / (24 * 60 * 60 * 1000);
      let hours = time / (60 * 60 * 1000);
      let minu = time / (60 * 1000);
      if (days >= 1) {
        return Math.ceil(days) + "天前";
      } else if (days < 1 && hours >= 1) {
        return Math.floor(hours) + "小时前";
      } else if (hours < 1) {
        return Math.ceil(minu) + "分钟前";
      }
    },
    //获取到topics(话题)的数据 40条
    getdata() {
      this.$axios
        .req("topics")
        .then(res => {
          this.list = res.data;
          // this.paging();
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //每一页有多少条数据
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      // this.paging();
    },
    //当前是第几页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = Number(val);
    },
    //获取每一页要展示多少条数据
    // paging() {
    //   this.arr = [];
    //   for (let i = 0; i < this.list.length; i += this.pageSize) {
    //     this.arr.push(this.list.slice(i, i + this.pageSize));
    //   }
    // },
    //带参传值 将用户点击的话题对应的id传到详情页
    run(val1, val2) {
      this.$router.push({
        name: "content",
        query: {
          id: val1
        }
      });
      // localStorage.setItem("loginname", val2); 
      // this.$store.state.loginname = val2;
    }
  },
  mounted() {
    this.getdata();
    this.times();
  },
  watch: {},
  computed: {
    // loginname() {
    //   return this.$store.state.loginname;
    // }
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
    // 中间内容(全部,精华,分析,问答...) 移入变蓝
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
  // 中间内容(全部,精华,分析,问答...) 点击加绿色背景字体变白
  background-color: #80bd01;
  color: #fff !important;
  padding: 3px 4px;
  border-radius: 3px;
}
.details {
  display: flex;
  margin: 10px 0;
  div {
    //作者头像
    &:nth-child(1) {
      width: 30px;
      height: 30px;
      img {
        width: 30px;
      }
    }
    //回复人数/浏览次数
    &:nth-child(2) {
      height: 30px;
      width: 10%;
      line-height: 30px;
      margin: 0 10px;
      font-size: 14px;
    }
    //帖子类型
    &:nth-child(3) {
      margin-right: 30px;
      height: 30px;
      line-height: 30px;
    }
    //帖子标题,超过长度后用。。。表示
    &:nth-child(4) {
      width: 70%;
      height: 30px;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      a {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    //帖子最后一个回复人的回复时间
    &:nth-child(5) {
      height: 30px;
      line-height: 30px;
    }
  }
}
//帖子类型 精华 置顶背景为绿色
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
//分页条的位置
.block {
  margin-left: 20%;
  margin-top: 30px;
}
</style>
