<template>
  <div class="scrollBox">
    <div>
      <!-- 商城头部 -->
      <sellerHeader :seller="seller"></sellerHeader>
      <van-tabs v-model:active="active" sticky animated color="#ffda41">
        <van-tab title="菜单">
          <order></order>
        </van-tab>
        <van-tab title="评价">评价</van-tab>
        <van-tab title="商家">商家</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getStoreById } from "@/api/detail";
import sellerHeader from "./seller-header";
import order from "./order";
import BSscroll from 'better-scroll'
export default {
  data() {
    return {
      seller: [],
      active: 0,
      scrollBox:null
    };
  },
  components: {
    sellerHeader,
    order,
  },
  methods: {

    getStoreMsg() {
      getStoreById({ id: this.$route.query.id }).then((res) => {
        this.seller = res.data;
      });
    },
  },
  mounted(){
    this.scrollBox = new BSscroll('.scrollBox',{bounce:false});
  },
  created() {
    this.getStoreMsg();
  },
};
</script>

<style lang="scss" scoped>
  .scrollBox{
    height: 100vh;
    // overflow: hidden;
  }
</style>