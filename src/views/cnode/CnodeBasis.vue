<template>
  <div class="el__header el__footer bg">
    <el-container>
      <el-header>
        <div class="header">
          <div class="header-content">
            <a href="/cnode" class="brand">
              <img src="../../assets/image/cnodejs_light.svg" alt />
            </a>
            <div class="search">
              <img src="../../assets/image/search.svg" alt />
              <input type="text" class="search-query" />
            </div>
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
      <el-container>
        <el-main>
          <div class="mian">
            <router-view />
          </div>
        </el-main>
        <el-aside width="385px">
          <div class="aside log" v-if="username === '' ">
            <p>CNode：Node.js专业中文社区</p>
            <div>
              <div>
                您可以
                <a href="/">登录</a> 或者
                <a href="/">注册</a>，也可以
              </div>
              <div>
                <el-button type="primary">点击登录</el-button>
              </div>
            </div>
          </div>
          <div class="aside log" v-else>
            <div class="author">
              <span>个人信息</span>
            </div>
            <div>用户名:{{username}}</div>
            <div>积分:0</div>
            <div>"这家伙很懒啥也没留下"</div>
          </div>
          <div class="aside">
            <img src="../../assets/image/Detailpage-aside1.jpg" alt />
            <img src="../../assets/image/Detailpage-aside2.jpg" alt />
            <img src="../../assets/image/Detailpage-aside3.jpg" alt />
          </div>
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

    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
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
    </el-backtop>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.username = localStorage.getItem("user");
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
  background-color: #000;
  height: 50px;
  display: flex;
  justify-content: center;
  .header-content {
    width: 90%;
    display: flex;
    .brand {
      width: 9%;
      padding: 8px 20px;
      height: 34px;
      line-height: 34px;
    }
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
.mian {
  width: 100%;
  height: 100%;
   border-radius: 5px;
  background-color: white;
}
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
  height: 120px;
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