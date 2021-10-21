<template>
  <div class="menu-list">
    <div class="title"><a>联系我们</a></div>
    <ul>
      <li class="li-1">
        <p>服务热线</p>
        <p>028-83221100</p>
      </li>
      <li class="li-2">
        <p>在线QQ</p>
        <p>1458699959</p>
      </li>
      <li class="li-3">
        <p>24小时热线</p>
        <p>130-6008-8000</p>
      </li>
      <li class="li-4">
        <p>投诉邮箱</p>
        <p>huayirenzheng@126.com</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.menu-list {
  width: 360px;
  .title {
    background: url(http://www.hyrzzx.com/style/images/t3.png) no-repeat center;
    background-position-y: 0;
    height: 81px;
    position: relative;
    color: #fff;
    text-align: center;
    z-index: 9;
    width: 100%;
    background-size: 100% 100%;
    a {
      font-size: 18px;
      text-align: center;
      display: block;
      color: #fff;
      line-height: 60px;
    }
  }
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 1px solid #ededed;
    margin-top: -10px;
    padding-top: 15px;
    border-top: none;
    padding-bottom: 0px;
    border-radius: 5px;
    li {
      list-style: none;
      line-height: 35px;
      width: 270px;
      margin: 0 auto;
      border-bottom: 1px solid #ededed;
      font-size: 16px;
      padding: 8px 0 8px 40px;
      p {
        margin: 0;
      }
      &.li-1 {
        background: url(http://www.hyrzzx.com/style/images/zj.png) no-repeat
          left;
      }
      &.li-2 {
        background: url(http://www.hyrzzx.com/style/images/q.png) no-repeat left;
      }
      &.li-3 {
        background: url(http://www.hyrzzx.com/style/images/d.png) no-repeat left;
      }
      &.li-4 {
        background: url(http://www.hyrzzx.com/style/images/yx1.png) no-repeat
          left;
      }
    }
  }
}
</style>