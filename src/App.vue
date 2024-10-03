<template>
  <div id="app">
    <!-- 頁面標題 -->
    <header>
      <button class="menu-btn" @click="toggleNav">&#9776;</button>
      <h1>會議室預約系統 - BookMySpace</h1>

      <!-- 桌面版導航欄 -->
      <nav class="desktop-nav">
        <ul>
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/register">註冊</router-link></li>
          <li><router-link to="/booking">預約</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- 側邊導航欄 (手機模式) -->
    <nav :class="{ 'nav-open': isNavOpen }" class="mobile-nav">
      <ul>
        <li><router-link to="/" @click="closeNav">首頁</router-link></li>
        <li>
          <router-link to="/register" @click="closeNav">註冊</router-link>
        </li>
        <li><router-link to="/booking" @click="closeNav">預約</router-link></li>
      </ul>
    </nav>

    <!-- 遮罩層，用來點擊關閉側邊欄 -->
    <div v-if="isNavOpen" class="overlay" @click="closeNav"></div>

    <!-- 路由對應頁面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/css/APP.css"; // 正確引入樣式

export default {
  name: "App",
  data() {
    return {
      isNavOpen: false, // 控制側邊導航欄的打開和關閉
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
};
</script>
