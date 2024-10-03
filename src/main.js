import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由配置

const app = createApp(App);  // 創建 Vue 應用實例
app.use(router);             // 使用路由
app.mount('#app');           // 挂載應用
