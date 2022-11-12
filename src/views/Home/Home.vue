<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav></TypeNav>
    <ListContainerVue></ListContainerVue>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floorList" :key="item.id" :floorList="item"></Floor>
    <Brands></Brands>
  </div>
</template>

<script>
// 引入其他组件
import ListContainerVue from "./ListContainer/ListContainer.vue";
// 今日推荐组件
import TodayRecommend from "@/views/Home/TodayRecommend/TodayRecommend";
// 商品排行组件
import Rank from "@/views/Home/Rank/Rank";
// 猜你喜欢组件
import Like from "@/views/Home/Like/Like";
// 楼层组件
import Floor from "@/views/Home/Floor/Floor";
// 商标组件
import Brands from "@/views/Home/Brands/Brands";

import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    ListContainerVue,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brands,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="less">
</style>