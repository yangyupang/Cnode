<template>
  <div>
    <div class="login">
      <div class="login-top">欢迎来到cNode社区</div>
      <div class="login-validation">
        <el-form status-icon :model="ruleForm" :rules="rules" label-width="110px">
          <el-form-item label="请输入用户名" prop="userName">
            <el-input placeholder="请输入用户名" v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码" prop="pass">
            <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass"></el-input>
          </el-form-item>
          <el-form-item label="请确认密码" prop="checkPass">
            <el-input type="password" placeholder="请确认密码" v-model="ruleForm.checkPass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="go('/cnode')" :plain="true" class="go">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("名字不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        userName: ""
      },
      rules: {
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        userName: [{ required: true, validator: checkName, trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    go(data) {
      this.$store.state.username = this.ruleForm.userName;
      this.$store.state.pass = this.ruleForm.pass;
      localStorage.setItem("user", this.ruleForm.userName);
      localStorage.setItem("pass", this.ruleForm.pass);
      this.ruleForm.userName = this.ruleForm.pass = this.ruleForm.checkPass =
        "";
      this.$router.push(data);
      this.$message({
        message: "恭喜你登录成功",
        type: "success"
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {
    uname() {
      return this.$store.state.username;
    },
    upass() {
      return this.$store.state.pass;
    }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
.login {
  width: 500px;
  height: 400px;
  border: 1px solid rgb(167, 163, 163);
  margin: 0 auto;
  position: relative;
  top: 160px;
  box-shadow: 2px 2px 30px 2px rgb(167, 163, 163);
}
.login-top {
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 26px;
  font-weight: 600;
  border-bottom: 1px solid rgb(167, 163, 163);
}
.login-validation {
  width: 80%;
  height: 250px;
  margin: 0 auto;
  position: relative;
  top: 20px;
}
.go {
  position: relative;
  left: 45px;
}
</style>