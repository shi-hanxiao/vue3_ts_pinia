import { createApp } from "vue";
import App from "@/App.vue";
//引入模板的全局的样式
import "@/styles/index.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// svg插件需要配置代码
import "virtual:svg-icons-register";
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from "@/components/index";
import request from "@/utils/request";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(globalComponent);
app.mount("#app");

request({
  url: "/user/login",
  method: "post",
  data: { username: "admin", password: "111111" },
});
