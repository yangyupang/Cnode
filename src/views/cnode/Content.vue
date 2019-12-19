<template>
  <div class="detail markdown-body">
    <el-card>
      <!-- 帖子状态（置顶，分享，问答，精华） -->
      <div class="top">
        <span v-if="list.top === true" class="bg">置顶</span>
        <span v-else-if="list.good === true" class="bg">精华</span>
        <span class="fs">{{list.title}}</span>
      </div>
      <!-- 帖子发布时间 作者 浏览次数 来自类型 -->
      <div class="desc" v-if="list.author">
        <div class="item">
          <span>发布于{{times(list.create_at)}}</span>
        </div>
        <div class="item">作者 {{list.author.loginname}}</div>
        <div class="item">{{list.visit_count}} 次浏览</div>
        <div class="item">
          来自
          <span v-if="list.tab === 'ask'">问答</span>
          <span v-if="list.tab === 'share'">分享</span>
        </div>
      </div>
    </el-card>
    <!-- v-html展示帖子内容 -->
    <el-card v-if="list">
      <div v-html="list.content" class="markdown-body"></div>
    </el-card>
    <br />
    <!-- 展示留言 -->
    <el-card class="el__card__header" v-if="list">
      <div slot="header">
        <div class="reply">{{list.reply_count}} 回复</div>
      </div>
      <div v-for="(item, index) in list.replies" :key="item.id" class>
        <div class="content">
          <!-- 留言者头像 -->
          <div class="c-img">
            <img :src="item.author.avatar_url" alt :title="item.author.loginname"/>
          </div>
          <!-- 留言者名字 -->
          <div>
            <span>{{item.author.loginname}}</span>
          </div>
          <!-- 第几楼 -->
          <div>
            <span>{{index + 1}}楼</span>
            <span>·</span>
          </div>
          <!-- 回复时间 -->
          <div>
            <span>{{times(list.create_at)}}</span>
          </div>
          <!-- 点赞 -->
          <div v-if="item.ups.length >0" class="ups">
            <img src="../../assets/image/ups.svg" alt />
            <span>{{item.ups.length}}</span>
          </div>
        </div>
        <!-- 回复内容 -->
        <div class="replyContent" v-if="list.reply_count > 0">
          <div v-html="item.content"></div>
        </div>
        <div class="line"></div>
      </div>
      <!-- <div v-for="(item, index) in newlist[currentPage-1]" :key="item.id" class>
        <div class="content">
          <div class="c-img">
            <img :src="item.author.avatar_url" alt />
          </div>
          <div>
            <span>{{item.author.loginname}}</span>
          </div>
          <div>
            <span>{{index + 1}}楼</span>
            <span>·</span>
          </div>
          <div>
            <span>{{times(list.create_at)}}</span>
          </div>
          <div v-if="item.ups.length >0">
            <img src="../../assets/image/ups.svg" alt />
            <span>{{item.ups.length}}</span>
          </div>
        </div>
        <div class="replyContent" v-if="list.reply_count > 0">
          <div v-html="item.content"></div>
        </div>
        <div class="line"></div>
      </div>-->
    </el-card>
    <!-- <div class="block" v-if="list.replies">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.replies.length"
      ></el-pagination>
    </div>-->
  </div>
</template>

<script>
// import  '../../../public/markdown.css'
export default {
  data() {
    return {
      id: "",
      list: [],
      newlist: [],
      currentPage: 1,
      pageSize: 10
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$axios
        .req(`topic/${this.id}`)
        .then(res => {
          this.list = res.data;
          // this.paging();
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    times(oldtime) {
      let nowtime = new Date();
      // valueOf是转换成时间戳
      let time =
        this.$dayjs(nowtime).valueOf() - this.$dayjs(oldtime).valueOf();
      let month = this.$dayjs(time).month()
      let days = time / (24 * 60 * 60 * 1000);
      let hours = time / (60 * 60 * 1000);
      let minu = time / (60 * 1000);
      if (month >= 1) {
        return parseInt(month + 1) + "月前";
      } else if (month < 1 && days >= 1) {
        return parseInt(days) + "天前";
      } else if (days < 1 && hours >= 1) {
        return parseInt(hours) + "小时前";
      } else if (hours < 1) {
        return parseInt(minu) + "分钟前";
      }
    }
    // handleSizeChange(val) {
    //   // console.log(`每页 ${val} 条`);
    //   this.pageSize = val;
    //   this.paging();
    // },
    // handleCurrentChange(val) {
    //   // console.log(`当前页: ${val}`);
    //   this.currentPage = Number(val);
    // },
    // paging() {
    //   this.newlist = [];
    //   for (let i = 0; i < this.list.replies.length; i += this.pageSize) {
    //     this.newlist.push(this.list.replies.slice(i, i + this.pageSize));
    //   }
    //   // console.log(this.newlist);
    // }
  },
  mounted() {
    // this.id = this.$route.params.id;
    this.id = this.$route.query.id;
    this.getdata();
    this.times();
  },
  watch: {},
  computed: {
    // top3(){
    //   list.replies.filters(item =>{
    //     item.ups.length
    //   })
    //   return;
    // }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
// @import '../../../public/markdown';
.detail {
  /deep/ img {
    max-width: 100% !important;
  }
  .bg {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }
  .bg1 {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }
  .fs {
    font-weight: 700;
    font-size: 22px;
  }
  .top {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .desc {
    display: flex;
    align-items: center;
    .item {
      &:before {
        content: "·";
        font-size: 16px;
        font-weight: 700;
      }
      margin-left: 5px;
      font-size: 12px;
      color: #838383;
    }
  }
  .reply {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    color: #444;
  }
  .content {
    display: flex;
    align-items: center;
    position: relative;
    div {
      &:nth-child(2) {
        span {
          color: #000;
          font-weight: 700;
          margin: 0 10px;
        }
      }
      &:nth-child(3) {
        span {
          &:nth-child(2) {
            font-weight: 700;
          }
        }
      }
      .ups {
        display: flex;
        position: absolute;
        left: 70%;
      }
    }
    .ups {
        display: flex;
        position: absolute;
        right: 20px;
      }
    .c-img {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      color: #08c;
      text-decoration: none;
      font-size: 12px;
    }
  }
  .replyContent {
    padding: 0 35px;
  }
  .line {
    height: 1px;
    width: 120%;
    background: #eee;
    position: relative;
    right: 10%;
    margin: 10px 0;
  }
}
</style>