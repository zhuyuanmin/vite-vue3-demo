<template>
  <div class="container">
    <div class="title"><span>友情链接</span></div>
    <ul>
      <li><img src="http://jian.hyrzzx.com/style/images/y1.jpg" alt="" /></li>
      <li><img src="http://jian.hyrzzx.com/style/images/y3.jpg" alt="" /></li>
      <li><img src="http://jian.hyrzzx.com/style/images/y4.jpg" alt="" /></li>
      <li><img src="http://jian.hyrzzx.com/style/images/y.jpg" alt="" /></li>
      <li><img src="http://jian.hyrzzx.com/uploads/flink/y1.jpg" alt="" /></li>
    </ul>
    <a class="control prev">{{ "<" }}</a>
    <a class="control next">></a>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 1300px;
  margin: 70px auto;
  position: relative;

  .title {
    background: url(http://jian.hyrzzx.com/style/images/t3.png) no-repeat center;
    background-size: 100% 100%;
    background-position-y: 0;
    height: 81px;
    position: relative;
    color: #fff;
    text-align: center;
    z-index: 9;
    span {
      font-size: 18px;
      text-align: center;
      display: block;
      color: #fff;
      line-height: 60px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      list-style: none;
      float: left;
      width: 180px;
      height: 92px;
      border: 1px solid #f1f1f1;
      float: left;
      margin: 15px 5px 15px 46px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .control {
    position: absolute;
    top: 130px;
    padding: 6px 6px;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .prev {
    left: 5px;
  }

  .next {
    right: 5px;
  }
}
</style>