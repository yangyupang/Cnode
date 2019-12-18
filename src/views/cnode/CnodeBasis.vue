<template>
  <div class="el__header el__footer bg">
    <el-container>
      <!-- 首页头部 -->
      <el-header>
        <div class="header">
          <div class="header-content">
            <!-- logo图标 -->
            <a href="/cnode" class="brand">
              <img src="../../assets/image/cnodejs_light.svg" alt />
            </a>
            <!-- 搜索框 -->
            <div class="search">
              <img src="../../assets/image/search.svg" alt />
              <input type="text" class="search-query" />
            </div>
            <!-- 右边几个选择项（首页，新手入门。。。） -->
            <ul class="pull-right">
              <li>
                <a href="/cnode">首页</a>
              </li>
              <li>
                <a href>新手入门</a>
              </li>
              <li>
                <a href>API</a>
              </li>
              <li>
                <a href>关于</a>
              </li>
              <li>
                <a href>注册</a>
              </li>
              <li>
                <a href="/">登录</a>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <!-- 中间内容  -->
      <el-container>
        <!-- 首页主要内容挂载处 -->
        <el-main>
          <div class="mian">
            <router-view />
          </div>
        </el-main>
        <!-- 首页侧边栏 -->
        <el-aside width="385px">
          <!-- 登录过后个人信息展示 -->
          <div class="aside log" v-if="this.username">
            <div class="author">
              <span>个人信息</span>
            </div>
            <div>用户名:{{username}}</div>
            <div>积分:0</div>
            <div>"这家伙很懒啥也没留下"</div>
            <el-button type="primary" @click="exit">点击退出</el-button>
          </div>
          <!-- <div class="aside log" v-if="this.loginname">
            dddd
          </div> -->
          <!-- 未登录时登录窗口 -->
          <div class="aside log" v-else>
            <p>CNode：Node.js专业中文社区</p>
            <div>
              <div>
                您可以
                <a href="/">登录</a> 或者
                <a href="/">注册</a>，也可以
              </div>
              <div>
                <el-button type="primary" @click="go('/')">点击登录</el-button>
              </div>
            </div>
          </div>
          <!-- 侧边栏广告 -->
          <div class="aside">
            <img src="../../assets/image/Detailpage-aside1.jpg" alt />
            <img src="../../assets/image/Detailpage-aside2.jpg" alt />
            <img src="../../assets/image/Detailpage-aside3.jpg" alt />
          </div>
          <!-- 无人回复的话题 -->
          <div class="aside">
            <div class="topic">
              <span>无人回复的话题</span>
            </div>
            <div>
              <ul>
                <li>
                  <div class="topics">Koa系框架（egg/cabloy）如何获取微信支付回调请求中的xml参数</div>
                </li>
                <li>
                  <div class="topics">mongodb在事务中更新了文档后如何在事务中就能查询出来</div>
                </li>
                <li>
                  <div class="topics">Node+MongoDB+TypeScript 开发后端服务的一些实践</div>
                </li>
                <li>
                  <div class="topics">疑似在`sofa-rpc-node`模块中对dubbo协议支持的一个小问题</div>
                </li>
                <li>
                  <div class="topics">node v8.1.3 pm2问题</div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 积分排行榜 -->
          <div class="aside">
            <div class="ranking">
              <span>积分榜 TOP 100 >></span>
            </div>
            <div>
              <ul>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
                <li>
                  <span>21815</span>
                  <span>
                    <a href>i5ting</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 友情社区 -->
          <div class="aside">
            <div class="community">
              <span>友情社区</span>
            </div>
            <ul>
              <li>
                <img src="../../assets/image/golangtc-logo.png" alt class="siz" />
              </li>
              <li>
                <img src="../../assets/image/phphub-logo.png" alt class="siz" />
              </li>
              <li>
                <img src="../../assets/image/ruby-china.png" alt class="siz" />
              </li>
              <li>
                <img src="../../assets/image/TesterHome-logo.png" alt class="siz" />
              </li>
            </ul>
          </div>
          <!-- 二维码 -->
          <div class="aside">
            <div class="client">
              <span>客户端二维码</span>
            </div>
            <div>
              <img src="../../assets/image/erweima.png" alt />
            </div>
          </div>
        </el-aside>
      </el-container>
      <!-- 底部 -->
      <el-footer>
        <div class="footer">
          <div>RSS | 源码地址</div>
          <div>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
          <div>
            服务器赞助商为
            <img src="../../assets/image/bottom1.jpg" alt /> ，
            存储赞助商为
            <img src="../../assets/image/bottom2.jpg" alt /> ，
            由
            <img src="../../assets/image/bottom3.jpg" alt />提供应用性能服务。
          </div>
          <div>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</div>
        </div>
      </el-footer>
    </el-container>
    <!-- 返回顶部 -->
    <BackTop></BackTop>
  </div>
</template>

<script>
import BackTop from "../../components/cnode/BackTop";
export default {
  data() {
    return {
      username: "",
      loginname: ""
    };
  },
  components: { BackTop },
  methods: {
    //点击登录 跳转到登录页面
    go(data) {
      this.$router.push(data);
    },
    //点击退出 
    exit() {
      this.$confirm("是否退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })//点击确定后清空localStorage 
        .then(() => {
          (this.username = ""),
            localStorage.removeItem("user"),
            this.$message({
              type: "success",
              message: "退出成功!"
            });
        })//点击取消不做任何操作
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  mounted() {
    //获取到localStorage中的值
    this.username = localStorage.getItem("user");
    this.loginname = localStorage.getItem("loginname");
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.bg {
  background-color: rgb(226, 219, 219);
}
.header {
  //顶部
  background-color: #000;
  height: 50px;
  display: flex;
  justify-content: center;
   // logo图标
  .header-content {
    width: 90%;
    display: flex;
    .brand {
      width: 9%;
      padding: 8px 20px;
      height: 34px;
      line-height: 34px;
    }
    //搜索
    .search {
      margin-top: 10px;
      display: flex;
      img {
        position: relative;
        left: 20px;
        bottom: 2px;
      }
      .search-query {
        height: 30px;
        width: 100%;
        background: #888;
        border: 0;
        border-radius: 15px;
        padding-left: 20px;
        transition: all 0.5s;
        &:hover {
          background: white;
        }
      }
    }
    //右边几个选择项（首页，新手入门。。。）
    .pull-right {
      position: absolute;
      right: 75px;
      display: flex;
      font-size: 13px;
      li {
        line-height: 50px;
      }
      a {
        padding: 10px 15px;
        color: #888;
        &:hover {
          color: white;
        }
      }
    }
  }
}
//中间数据留白处
.mian {
  width: 100%;
  border-radius: 5px;
  background-color: white;
}
//侧边栏
.aside {
  width: 75%;
  background-color: white;
  overflow: hidden;
  padding: 10px;
  margin-bottom: 13px;
  box-shadow: 2px 2px 2px 1px rgb(167, 163, 163);
  img {
    width: 100%;
    margin-bottom: 10px;
  }
  .siz {
    width: 50%;
    margin-bottom: 0;
  }
  ul {
    font-size: 14px;
    color: #778087;
    li {
      margin: 10px;
      span {
        margin-right: 20px;
      }
    }
  }
  .topic {
    background: rgb(226, 219, 219);
    span {
      margin-left: 10px;
      font-size: 13px;
    }
  }
  .topics {
    width: 100%;
    height: 30px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    color: #778087;
  }
  .ranking {
    background: rgb(226, 219, 219);
    span {
      margin-left: 10px;
      font-size: 13px;
    }
  }
  .community {
    background: rgb(226, 219, 219);
    span {
      margin-left: 10px;
      font-size: 13px;
    }
  }
  .client {
    background: rgb(226, 219, 219);
    span {
      margin-left: 10px;
      font-size: 13px;
    }
  }
}
.log {
  line-height: 2em;
  p {
    margin: 0 0 10px;
    font-size: 14px;
  }
  .author {
    background: rgb(226, 219, 219);
    span {
      margin-left: 10px;
      font-size: 13px;
    }
  }
  div {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.footer {
  height: 200px;
  background-color: #fff;
  div {
    margin: 10px 0 20px 90px;
    font-size: 14px;
    color: #778087;
    &:nth-child(3) {
      img {
        width: 165px;
      }
    }
  }
}
</style>