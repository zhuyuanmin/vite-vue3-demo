<template>
  <div class="container">
    <div class="left">
      <div class="title"><span>公司简介</span></div>
      <div class="content">
        <div>
          <img src="http://jian.hyrzzx.com/style/images/ab.jpg" alt="" />
        </div>
        <p>
          华亿认证中心有限公司，目前获准从事的认证领域有知识产权管理体系（IPMS）、质量管理体系（ISO9001）、环境管理体系（ISO14001）......
        </p>
        <a>查看更多</a>
      </div>
    </div>
    <div class="middle">
      <div class="title"><span>走进华亿</span></div>
      <ul class="content">
        <li>
          <img src="http://jian.hyrzzx.com/style/images/zz.png" alt="" />
          <span>公司资质</span>
        </li>
        <li>
          <img src="http://jian.hyrzzx.com/style/images/wh.png" alt="" />
          <span>公司文化</span>
        </li>
        <li>
          <img src="http://jian.hyrzzx.com/style/images/jg.png" alt="" />
          <span>组织机构</span>
        </li>
        <li>
          <img src="http://jian.hyrzzx.com/style/images/lc.png" alt="" />
          <span>认证流程</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="title"><span>走进华亿</span></div>
      <ul>
        <li class="active" @mouseover="mouseoverEvent">
          <a>质量方针</a>
          <div class="content">
            <p>
              遵守法律法规、坚持认证公正性、持续提升认证质量、获得社会认
              可、为客户创造价值！
            </p>
            <img src="http://jian.hyrzzx.com/style/images/fz.png" alt="" />
          </div>
        </li>
        <li @mouseover="mouseoverEvent">
          <a>专业团队</a>
          <div class="content">
            <p>
              我们的管理团队具备丰富的认证行业从业经验，并曾于知名的认证机构
              任职。能够及时调整业务战略以把握市场。我们的审核员队伍，大多拥
              有本科、硕士学历，拥有专利代理人和审核员双重身份资格。
            </p>
            <img src="http://jian.hyrzzx.com/style/images/td.jpg" alt="" />
          </div>
        </li>
        <li @mouseover="mouseoverEvent">
          <a>高效审核</a>
          <div class="content">
            <p>
              专业人员对接，避免材料多次修改，浪费大量时间；标准化服务流
              程，精准无漏洞，各个环节及时反馈认证进度，精准提供解决方案；
              严谨、高效，大幅提高通过率，闪电通过认证。
            </p>
            <img src="http://jian.hyrzzx.com/style/images/sh.jpg" alt="" />
          </div>
        </li>
        <li @mouseover="mouseoverEvent">
          <a>分支机构</a>
          <div class="content">
            <img :src="imgUrl" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import url from "/public/images/1.png";
const imgUrl = ref(url);
const mouseoverEvent = (e) => {
  if (e.target.tagName === "LI") {
    const liList = Array.from(e.target.parentNode.querySelectorAll("li"));
    liList.forEach((el) => {
      el.className = "";
      el.querySelector(".content").style.display = "none";
    });
    e.target.className = "active";
    e.target.querySelector(".content").style.display = "block";
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  .left {
    width: 275px;
    height: 417px;
    .title {
      background: url(http://jian.hyrzzx.com/style/images/t3.png) no-repeat
        center;
      background-size: cover;
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
    .content {
      padding: 10px;
      padding-top: 0;
      border: 1px solid #f1f1f1;
      border-top: none;
      p {
        font-size: 14px;
        color: #333333;
        text-align: justify;
        line-height: 2.3;
        word-break: break-all;
        margin: 0;
        padding: 10px 0;
      }

      a {
        display: inline-block;
        padding-left: 10px;
        color: #028fcf;
        background: url(http://jian.hyrzzx.com/style/images/jt.png) no-repeat
          right;
        padding-right: 22px;
        font-size: 14px;
      }
    }
  }
  .middle {
    width: 260px;
    height: 417px;
    .title {
      background: url(http://jian.hyrzzx.com/style/images/t3.png) no-repeat
        center;
      background-size: cover;
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
    .content {
      overflow: hidden;
      margin: 0;
      padding: 0;
      background: #f6f6f7;
      padding-top: 15px;
      margin-top: -19px;
      position: relative;
      padding-left: 7px;
      padding-right: 7px;
      padding-bottom: 27px;
      li {
        float: left;
        list-style: none;
        width: 110px;
        height: 100px;
        background: #fff;
        border: 1px solid #eceeee;
        margin: 26px 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          text-align: center;
          margin-top: 20px;
        }
        span {
          font-size: 14px;
          text-align: center;
          display: inline-block;
          transform: translateY(35px);
        }
      }
    }
  }
  .right {
    width: 645px;
    .title {
      background: url(http://jian.hyrzzx.com/style/images/t3.png) no-repeat
        center;
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
      position: relative;
      li {
        background-color: #f6f6f7;
        list-style: none;
        width: 160px;
        height: 82px;
        line-height: 82px;
        text-align: center;
        cursor: pointer;
        font-size: 18px;
        .content {
          position: absolute;
          top: 0;
          left: 188px;
          width: 426px;
          display: none;
          p {
            line-height: 1.7;
            font-size: 14px;
            text-align: left;
          }
        }
      }
      .active {
        background-color: #fff;
        .content {
          display: block;
        }
      }
    }
  }
}
</style>