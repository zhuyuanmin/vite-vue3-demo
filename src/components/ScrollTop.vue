<template>
  <div
    :class="show ? 'side-bar side-bar2' : 'side-bar'"
    @mouseover="showMenu"
    @mouseleave="hideMenu"
  >
    <div class="bdh566" v-show="show">
      <a
        href="http://wpa.qq.com/msgrd?v=3&amp;uin=2546874082&amp;site=qq&amp;menu=yes"
        target="_blank"
        ><img src="http://shenzhen.hyrzzx.com/style/images/qq.png" />在线客服</a
      >
      <li>
        <img src="http://shenzhen.hyrzzx.com/style/images/wx.png" />官方微信
        <div class="chat-tips wx19">
          <img src="http://shenzhen.hyrzzx.com/style/images/wx.jpg" />
          <p>微信扫一扫关注</p>
        </div>
      </li>
      <li>
        <img src="http://shenzhen.hyrzzx.com/style/images/dh3.png" />客服电话
        <div class="chat-tips">028-83221100<i></i></div>
      </li>
      <li>
        <img src="http://shenzhen.hyrzzx.com/style/images/dh2.png" />24小时热线
        <div class="chat-tips">131 9851 2233<i></i></div>
      </li>
      <li>
        <img src="http://shenzhen.hyrzzx.com/style/images/yx.png" />资料投递
        <div class="chat-tips" style="font-size: 12px">
          huayirenzheng@126.com<i></i>
        </div>
      </li>
    </div>
    <a href="#top"
      ><img src="http://shenzhen.hyrzzx.com/style/images/top.png" />返回顶部</a
    >
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(false);

const showMenu = () => {
  show.value = true;
};
const hideMenu = () => {
  show.value = false;
};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 113px;
  height: 92px;
  background: url(http://shenzhen.hyrzzx.com/style/images/xf.png) no-repeat
    center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  background-size: 100% 100%;
  a {
    width: 76px;
    height: 54px;
    display: block;
    margin: 19px auto 1px;
    text-align: center;
    color: #444;
    opacity: 0.9;
    position: relative;
    text-decoration: none;
  }
  img {
    display: block;
    margin: 0 auto 5px;
  }

  li {
    list-style: none;
    width: 76px;
    height: 54px;
    display: block;
    margin: 19px auto 1px;
    text-align: center;
    color: #444;
    opacity: 0.9;
    position: relative;
    cursor: pointer;
    &:hover {
      .chat-tips {
        display: block;
      }
    }
  }

  .wx19 {
    width: 146px !important;
    height: 160px !important;
    background: url(http://shenzhen.hyrzzx.com/style/images/wx19.png) no-repeat
      center !important;
    p {
      line-height: 30px;
      text-indent: -8px;
      margin: 0;
    }
  }
  .chat-tips {
    position: absolute;
    right: 78px;
    top: -3px;
    display: none;
    width: 182px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: url(http://shenzhen.hyrzzx.com/style/images/dj.png) no-repeat
      center;
    font-size: 14px;

    img {
      width: 92px;
      height: 92px;
      margin: 20px 22px 0 22px !important;
    }
  }
}
.side-bar2 {
  width: 113px;
  height: 452px;
  background: url(http://shenzhen.hyrzzx.com/style/images/xf.png) no-repeat
    center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
}
</style>