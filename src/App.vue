<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <router-view></router-view>
    <FooterVue v-show="$route.meta.show"></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "./components/Header/Header.vue";
import FooterVue from "./components/Footer/Footer.vue";
export default {
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>
<style lang="less">
</style>
