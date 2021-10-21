<template>
  <div class="container">
    <div class="content">
      <div class="box-left">
        <div class="btn-class">
          <svg-icon
            class-name="svg-icon icon1"
            icon-class="phone"
            color="#00A0E9"
          />
          <span>咨询电话</span>
        </div>
        <div class="area">
          <p>028-83221100</p>
          <p>131 9851 2233</p>
        </div>
        <div class="btn-class">
          <svg-icon
            class-name="svg-icon"
            icon-class="message"
            color="#00A0E9"
          />
          <span>联系方式</span>
        </div>
        <p>QQ: 2546874082</p>
        <p>地址: 四川省成都市成华区东华二路38号4栋24层1号</p>
        <p>投诉邮箱：huayirenzheng@126.com</p>
      </div>
      <div class="box-mid">
        <dl v-for="(item, index) in list" :key="index">
          <dt>
            <a :href="item.href">{{ item.title }}</a>
          </dt>
          <dd v-for="(v, i) in item.menu" :key="i">
            <a :href="v.href">{{ v.name }}</a>
          </dd>
        </dl>
      </div>
      <div class="box-right">
        <div class="text">扫码关注公众号</div>
        <div>
          <img src="http://shenzhen.hyrzzx.com/style/images/wx.jpg" alt="" />
        </div>
        <div class="text">关注我们了解更多资讯</div>
        <div class="view-count">网站浏览：227369 次</div>
      </div>
    </div>
    <div class="total">
      <span>华亿认证中心有限公司 版权所有 备案号:蜀ICP备18035890号</span>
      <img border="0" src="https://icon.cnzz.com/img/pic1.gif" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const list = ref([
  {
    title: "走进华亿",
    href: "",
    menu: [
      { name: "公司简介", href: "" },
      { name: "公司资质", href: "" },
      { name: "公司文化", href: "" },
      { name: "组织机构", href: "" },
      { name: "认证流程", href: "" },
    ],
  },
  {
    title: "证书查询",
    href: "",
    menu: [
      { name: "认证证书查询", href: "" },
      { name: "内审员证书查询", href: "" },
      { name: "证书暂停公示", href: "" },
      { name: "证书撤销公示", href: "" },
      { name: "服务管理师查询", href: "" },
    ],
  },
  {
    title: "认证知识",
    href: "",
    menu: [
      { name: "行业动态", href: "" },
      { name: "行业标准", href: "" },
      { name: "新闻快讯", href: "" },
      { name: "政策法规", href: "" },
    ],
  },
  {
    title: "文件下载",
    href: "",
    menu: [
      { name: "申请书", href: "" },
      { name: "认证合同", href: "" },
      { name: "社会责任", href: "" },
      { name: "公开文件", href: "" },
    ],
  },
  {
    title: "认证项目",
    href: "",
    menu: [
      { name: "知识产权管理体系", href: "" },
      { name: "信息安全管理体系", href: "" },
      { name: "信息技术服务管理", href: "" },
      { name: "企业信用等级评价", href: "" },
      { name: "食品安全管理体系", href: "" },
    ],
  },
]);
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  .content {
    display: flex;
    width: 1300px;
    padding: 60px 0;
    .box-left {
      background: url(http://shenzhen.hyrzzx.com/style/images/sx.jpg) repeat-y
        right;
      padding-right: 10px;
      .btn-class {
        display: block;
        border: 1px solid #00a0e9;
        width: 134px;
        height: 35px;
        line-height: 35px;
        margin: 0px auto 18px;
        border-radius: 9px;
        font-size: 16px;
        color: #00a0e9;
        .svg-icon {
          font-size: 20px;
        }
        .icon1 {
          margin-top: -3px;
        }
        span {
          margin-left: 5px;
        }
      }
      .area {
        font-size: 26px;
        color: #fff;
        margin-bottom: 19px;
        p {
          margin: 0;
          margin-bottom: 5px;
        }
      }
      p {
        color: #fbfbfb;
        margin: 0;
        margin-bottom: 5px;
      }
    }
    .box-mid {
      display: flex;
      width: 650px;
      justify-content: space-around;
      background: url(http://shenzhen.hyrzzx.com/style/images/sx.jpg) repeat-y
        right;
      dl {
        text-align: left;
        dt {
          margin-bottom: 21px;
          a {
            font-size: 18px;
            color: #fff;
            text-decoration: none;
          }
        }
        dd {
          margin: 0;
          margin-bottom: 5px;
          a {
            font-size: 14px;
            color: #777777;
            text-decoration: none;
          }
        }
      }
    }
    .box-right {
      width: 213px;
      text-align: center;
      .text {
        font-size: 18px;
        color: #fff;
        margin-bottom: 15px;
      }
      img {
        border: 1px solid #f1f1f1;
        width: 150px;
        border-radius: 5px;
        padding: 8px;
        margin-bottom: 12px;
      }
      .view-count {
        margin: 15px auto;
        background: url(http://shenzhen.hyrzzx.com/style/images/ll.png) no-repeat center;
        font-size: 12px;
        width: 144px;
        height: 34px;
        line-height: 34px;
        color: #fff;
      }
    }
  }
  .total {
    width: 1300px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: url(http://shenzhen.hyrzzx.com/style/images/xx.jpg) repeat-x top;
    color: #6b6b6b;
    img {
      margin-left: 2px;
      vertical-align: middle;
    }
  }
}
</style>