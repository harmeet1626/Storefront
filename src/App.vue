<template>
  <div id="app">
    <div>
      <b-nav pills>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/cart">Cart ({{ cartLength }})</b-nav-item>
        <b-nav-item to="/About">About</b-nav-item>
        <b-nav-item to="/login" v-if="!loggedin">login</b-nav-item>
        <b-nav-item to="/About" v-else @click="logout()">logout</b-nav-item>
      </b-nav>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import store from "./store/index";
import Parse from "parse";
export default {
  computed: {
    loggedin() {
      return store.getters.getIsLoggedIn;
    },
    cartLength() {
      return store.getters.cart.length;
    },
  },
  methods: {
    logout() {
      Parse.User.logOut().then(store.dispatch("Logout"));
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
