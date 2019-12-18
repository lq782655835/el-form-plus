import Vue from "vue";
import App from "./app.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import ElFormPlus from "./components";
Vue.use(ElFormPlus);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
