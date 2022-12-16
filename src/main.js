import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@storefront-ui/vue/styles.scss";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Parse from "parse";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Parse.initialize(
  "zp6gE05wtbqPgllBrzjWP7QuGgxgPX5SejL9AgPL",
  "KD5lXI8xrA8cFKGNE0PKN13ljfif41K1jcnpoUWb"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";
Parse.masterKey = "UotawZ6Z34DcTK77cRgeK05X7KhKNOY7ApZuvmfe";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueToast);

let instance = Vue.$toast.open("You did it!");
instance.dismiss();
Vue.$toast.clear();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
