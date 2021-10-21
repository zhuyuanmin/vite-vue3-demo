<template>
  <div class="container">
    <div class="header-title"><a>认证项目</a></div>
    <div class="box">
      <div class="card" v-for="v in dataList" :key="v.title">
        <div class="title">{{ v.title }}</div>
        <div class="sub-title">{{ v.subTitle }}</div>
        <div class="contact-us">立即咨询</div>
      </div>
    </div>
    <div class="next">
      <span>上一页</span>
      <span>下一页</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dataList = ref([
  {
    title: "知识产权管理体系",
    subTitle:
      "《企业知识产权管理规范》是我国首部企业知识产权管理国家标准，旨在指导企业建立科学、规范...",
  },
  {
    title: "商品售后服务评价体系",
    subTitle: "GB/T27922商品售后服务评价体系认证是服务认证类别...",
  },
  {
    title: "企业诚信管理体系",
    subTitle: "企业诚信管理体系是社会诚信体系建设的重要组成部分。广义上...",
  },
  {
    title: "物业服务认证",
    subTitle: "随着人民生活水平的不断提高，服务质量受到消费者的日益关注...",
  },
  {
    title: "道路交通安全管理体系",
    subTitle: "随着我国社会经济的发展，道路交通行业发展迅速，但全社会的...",
  },
  {
    title: "供应链安全管理体系",
    subTitle: "ISO 28000将供应链定义为一组相互联系的资源和过程，以...",
  },
  {
    title: "合规管理体系",
    subTitle: "近年来，国际社会和各国政府都致力于建立和维护开放、透明...",
  },
]);
</script>

<style lang="scss" scoped>
.container {
  margin-top: 78px;
  .header-title {
    width: 1300px;
    height: 76px;
    line-height: 60px;
    margin: 0 auto;
    background-image: url(http://jian.hyrzzx.com/style/images/rz4.png);
    background-repeat: no-repeat;
    background-size: cover;
    a {
      font-size: 18px;
      color: #fff;
      display: block;
      text-align: center;
    }
  }

  .box {
    width: 1300px;
    height: 448px;
    margin: 0 auto;
    overflow: hidden;
    .card {
      float: left;
      width: 275px;
      height: 221px;
      border: 1px solid #f1f1f1;
      padding: 24px;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        color: #333333;
        font-weight: 500;
      }
      .sub-title {
        font-size: 14px;
        color: #999999;
        margin: 20px 0;
      }
      .contact-us {
        width: 82px;
        height: 33px;
        display: block;
        background: #00a0e9;
        text-align: center;
        line-height: 33px;
        color: #fff;
        border-radius: 10px;
      }

      &:first-child {
        width: 358px;
        height: 448px;
        background: url(http://jian.hyrzzx.com/style/images/xm1.jpg) no-repeat
          bottom;
        .title {
          font-size: 26px;
          font-weight: 700;
          margin-top: 80px;
        }
        .contact-us {
          width: 121px;
          height: 47px;
          line-height: 47px;
        }
      }

      &:nth-child(2) {
        margin-left: 38px;
        background: url(http://jian.hyrzzx.com//uploads/201014/1-2010141039292L.jpg)
          no-repeat center;
      }

      &:nth-child(3) {
        margin-left: 38px;
        background: url(http://jian.hyrzzx.com/uploads/201014/1-201014103914614.jpg)
          no-repeat center;
      }

      &:nth-child(4) {
        margin-left: 38px;
        background: url(http://jian.hyrzzx.com/uploads/201014/1-2010141134254D.jpg)
          no-repeat center;
      }

      &:nth-child(5) {
        margin-left: 38px;
        margin-top: 10px;
        background: url(http://jian.hyrzzx.com/uploads/201014/1-201014103Q9448.jpg)
          no-repeat center;
      }

      &:nth-child(6) {
        margin-left: 38px;
        margin-top: 10px;
        background: url(http://jian.hyrzzx.com/uploads/210415/1-210415153113447.jpg)
          no-repeat center;
      }

      &:nth-child(7) {
        margin-left: 38px;
        margin-top: 10px;
        background: url(http://jian.hyrzzx.com/uploads/210517/1-21051GH41c01.jpg)
          no-repeat center;
      }
    }
  }

  .next {
    width: 1300px;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
    span {
      cursor: pointer;
      border: 1px solid #999;
      width: 92px;
      height: 32px;
      text-align: center;
      display: inline-block;
      margin: 10px;
      line-height: 32px;
      border-radius: 20px;
      font-size: 18px;
      color: #999999;
      &:first-child {
        margin-left: 16px;
      }
    }
  }
}
</style>