<template>
  <div>
    <h1>註冊頁</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="username" placeholder="用戶名" />
      <input type="password" v-model="password" placeholder="密碼" />
      <button type="submit">註冊</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserRegister",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      // 註冊邏輯
      console.log("註冊", this.username, this.password);
    },
  },
};
</script>
