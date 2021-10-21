<template>
  <div class="header">
    <div class="inline-box">
      <div class="logo"
        ><img src="http://shenzhen.hyrzzx.com/style/images/logo.png" alt=""
      /></div>
      <div class="box" @click="jumpCitySelect">
        <svg-icon icon-class="location" color="#00A0E9" />
        <span class="text">{{name || '深圳'}}</span>
        <span style="font-size: 14px">[ 切换城市 ]</span>
      </div>
    </div>
    <div class="right">
      <div>
        <img src="http://shenzhen.hyrzzx.com/style/images/dh.png" alt="" />
      </div>
      <div class="phone">
        <p class="desc">全国服务电话</p>
        <p class="number"><a href="tel:028-83221100">028-83221100</a></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import qs from 'qs'
const router = useRouter()
const jumpCitySelect = () => {
  router.push('/city')
}
const query = qs.parse(window.location.search, { ignoreQueryPrefix: true })
const name = ref(query.name)

</script>
<style lang="scss"  scoped>
.header {
  width: 1300px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .inline-box {
    overflow: hidden;
    .logo, .box {
      float: left;
    }
    .box {
      margin-left: 30px;
      margin-top: 35px;
      cursor: pointer;
      .text {
        color: #00A0E9;
        margin-right: 14px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
    .phone {
      margin-left: 20px;
      .desc {
        font-size: 14px;
        color: #999;
      }
      .number {
        font-size: 32px;
        font-weight: 700;
        a {
          color: #00a0e9;
          text-decoration: none;
        }
      }
    }
  }
}
</style>