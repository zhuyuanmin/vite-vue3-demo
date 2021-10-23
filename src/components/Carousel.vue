<template>
  <el-carousel
    :interval="5000"
    arrow="always"
    :height="height"
  >
    <el-carousel-item v-for="(item, index) in list[store.state.activeKey]" :key="index">
      <h3 class="img-height"><img :src="item" alt="" /></h3>
    </el-carousel-item>
  </el-carousel>
  <slot :height="height"></slot>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useStore } from "vuex";
import { ElCarousel, ElCarouselItem } from "element-plus";

const height = ref("300px");
const store = useStore();

const list = ref({
  1: [
    "http://shenzhen.hyrzzx.com/style/images/ban1.jpg",
    "http://shenzhen.hyrzzx.com/style/images/banner-2.jpg",
    "http://shenzhen.hyrzzx.com/style/images/banner-3.jpg",
    "http://shenzhen.hyrzzx.com/style/images/ban2.jpg",
    "	http://shenzhen.hyrzzx.com/style/images/ban3.jpg",
    "http://shenzhen.hyrzzx.com/style/images/ban4.jpg",
    
  ],
  2: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  3: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  4: [
    "http://shenzhen.hyrzzx.com/style/images/ban1.jpg",
    "http://www.hyrzzx.com/style/images/1.jpg",
    "http://www.hyrzzx.com/style/images/23.jpg",
    "http://www.hyrzzx.com/style/images/banner2.jpg",
  ],
  5: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  6: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  7: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  8: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
  9: [
    "http://shenzhen.hyrzzx.com/style/images/ban1.jpg",
    "http://www.hyrzzx.com/style/images/1.jpg",
    "http://www.hyrzzx.com/style/images/23.jpg",
    "http://www.hyrzzx.com/style/images/banner2.jpg",
  ],
  10: [
    "http://www.hyrzzx.com/style/images/ban1%20(1).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(2).jpg",
    "http://www.hyrzzx.com/style/images/ban1%20(3).jpg",
  ],
});

const computeImgHeight = () => {
  const img = document.querySelector(".img-height img");
  const imgH = img && img.clientHeight;
  height.value = imgH + "px";
};

onMounted(() => {
  setTimeout(() => {
    computeImgHeight();
  }, 500);
});

watch(() => store.state.activeKey, () => {
  setTimeout(() => {
    computeImgHeight();
  }, 500);
})

window.addEventListener("resize", computeImgHeight);

onUnmounted(() => {
  window.removeEventListener("resize", computeImgHeight);
});
</script>
<style lang="scss">
.el-carousel__item .img-height {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  img {
    width: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>