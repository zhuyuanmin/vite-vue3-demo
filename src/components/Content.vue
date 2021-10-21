<template>
  <div class="section1">
    <div class="left">
      <div class="title">公司新闻</div>
      <div class="carousel">
        <el-carousel height="382px" arrow="never">
          <el-carousel-item v-for="item in listImg" :key="item.title">
            <div class="word">{{ item.title }}</div>
            <img :src="item.img" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mid">
      <ul class="menu">
        <li
          :class="item.active ? 'li active' : 'li'"
          @mouseover="showContext"
          v-for="item in textList"
          :key="item.title"
        >
          <div class="title">{{ item.title }}</div>
          <ul class="context">
            <li v-for="v in item.list" :key="v.text">
              <div class="left">{{ v.text }}</div>
              <div class="right">{{ v.time }}</div>
            </li>
          </ul>
        </li>
      <div class="more"></div>
      </ul>
    </div>
    <div class="right">
      <div class="title">认证相关</div>
      <div>
        <ul>
          <li>
            <img src="http://shenzhen.hyrzzx.com/style/images/l1.png" alt="" />
            证书查询
          </li>
          <li>
            <img src="http://shenzhen.hyrzzx.com/style/images/l2.png" alt="" />
            审核员登录
          </li>
          <li>
            <img src="http://shenzhen.hyrzzx.com/style/images/l3.png" alt="" />
            下载中心
          </li>
          <li>
            <img src="http://shenzhen.hyrzzx.com/style/images/l3.png" alt="" />
            学习平台
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElCarousel, ElCarouselItem } from "element-plus";
import { ref } from "vue";

const listImg = ref([
  {
    title: "招聘公告丨华亿寻英才，就业大舞台",
    img: "http://shenzhen.hyrzzx.com/uploads/210226/1-210226163352912.jpg",
  },
  {
    title: "招聘|实现高薪梦想，就“职”等你来！",
    img: "http://shenzhen.hyrzzx.com/uploads/210705/1-210F5091024W2.jpg",
  },
  {
    title: "挑战自我 突破极限 | 华亿认证中心两天一夜户外探险之旅圆满落幕",
    img: "http://shenzhen.hyrzzx.com/uploads/210423/1-210423110306123.jpg",
  },
  {
    title: "华亿专家受邀出席越秀区2021年知识产权宣传周活动",
    img: "http://shenzhen.hyrzzx.com/uploads/210423/1-210423112Q5114.jpg",
  },
  {
    title: "福利来袭！华亿圣诞主题活动欢乐进行！",
    img: "http://shenzhen.hyrzzx.com/uploads/201225/1-201225141IQ10.jpg",
  },
  {
    title:
      "华亿认证中心注册部部长田博受邀参与“中小企业法律政策宣讲市州行” 南充专场",
    img: "http://shenzhen.hyrzzx.com/uploads/201130/1-201130151604193.jpg",
  },
  {
    title:
      "华亿认证中心注册部部长田博应邀参加“遂溪县区域知识产权能力提升培训活动”",
    img: "http://shenzhen.hyrzzx.com/uploads/201028/1-20102Q01RV10.jpg",
  },
  {
    title: "华亿认证中心执行董事龚洪平受邀参加“两化融合”演讲比赛暨新产品发布会",
    img: "http://shenzhen.hyrzzx.com/uploads/201009/1-201009105U3311.jpg",
  },
]);

const textList = ref([
  {
    title: "行业动态",
    active: true,
    list: [
      {
        text: "全面加强知识产权保护 促进知识产权高质量发展",
        time: "2021-09-16",
      },
      {
        text: "广州市增城区市场监督管理局关于印发 广州市增城区2021年度知识产权专利发展资金申报指南的通知",
        time: "2021-09-13",
      },
      { text: "江苏省“十四五”知识产权发展突出“高质量”", time: "2021-09-08" },
      {
        text: "国家级新区中首个！天府新区出台知识产权全类别政策",
        time: "2021-09-06",
      },
      { text: "光谷出台“强化知识产权保护十条措施”", time: "2021-09-03" },
      {
        text: "重庆市知识产权质押融资对接会召开 提升科创企业融资获得感便利度",
        time: "2021-09-03",
      },
    ],
  },
  {
    title: "行业标准",
    list: [
      {
        text: "GBT50430-2007 工程建设施工企业质量管理规范",
        time: "2020-01-03",
      },
      { text: "GBT 28001-2011 职业健康安全管理体系 要求", time: "2020-01-03" },
      { text: "GBT24001-2016环境管理体系 要求及使用指南", time: "2020-01-03" },
      { text: "GBT19001-2016质量管理体系 要求", time: "2020-01-03" },
      { text: "CNAS-CC01管理体系认证机构要求", time: "2020-01-03" },
      { text: "管理体系审核员注册准则", time: "2020-01-03" },
    ],
  },
  {
    title: "新闻快讯",
    list: [
      { text: "北京首个知识产权保险工作示范园区落户大兴", time: "2021-08-27" },
      { text: "走出一条中国特色知识产权发展之路", time: "2021-08-20" },
      {
        text: "国家知识产权局“携手”湖北 共建知识产权强省推动科技创新又出硬招",
        time: "2021-07-30",
      },
      { text: "深圳发布全国首例“知识产权行政禁令”", time: "2021-07-29" },
      { text: "浙江的“小目标”：5年打造引领型知识产权强省", time: "2021-07-02" },
      {
        text: "国家知识产权局副局长赵刚出席浙江台州知识产权保护大会",
        time: "2021-06-24",
      },
    ],
  },
]);

const showContext = (e) => {
  const li = document.getElementsByClassName("li");
  if (e.target.tagName === "DIV" && e.target.className === "title") {
    Array.from(li).forEach((el) => {
      el.className = "li";
    });
    e.target.parentElement.className = "li active";
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.section1 {
  display: flex;
  width: 1300px;
  margin: 0 auto;
  margin-top: 80px;
  > .left {
    width: 342px;
    margin-right: 14px;
    .title {
      width: 100%;
      height: 60px;
      background: url(http://shenzhen.hyrzzx.com/style/images/t110.png)
        no-repeat center;
      background-position-y: -0.1px;
      font-size: 18px;
      text-align: center;
      display: block;
      color: #fff;
      line-height: 60px;
    }
    .carousel {
      position: relative;
      .el-carousel__item {
        img {
          width: 100%;
          height: 100%;
        }
        .word {
          background-color: rgba(0, 0, 0, 0.7);
          position: absolute;
          bottom: 0;
          width: 100%;
          color: #fff;
          left: 0;
          text-align: center;
          padding: 15px 0 45px 0;
          font-size: 18px;
          box-sizing: border-box;
        }
      }
    }
  }
  .mid {
    flex: 1;
    height: 440px;
    position: relative;
    ul.menu {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 60px;
      background-color: #009ce3;
      > li {
        float: left;
        width: 105px;
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        color: #fff;
        height: 70px;
        .context {
          position: absolute;
          display: none;
          width: 100%;
          padding: 0 10px;
          box-sizing: border-box;
          left: 0;
          top: 80px;
          li {
            overflow: hidden;
            color: #121212;
            border-bottom: 1px dashed #121212;
            cursor: pointer;
            .left {
              float: left;
              max-width: 500px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .right {
              float: right;
            }
          }
        }
      }
      > li.active {
        background: url(http://shenzhen.hyrzzx.com/style/images/t22.png)
          no-repeat;
        background-position-y: 2px;
        .context {
          display: block;
        }
      }
    }
    .more {
      background: url(http://shenzhen.hyrzzx.com/style/images/jt1.png) #fff
        no-repeat center;
      width: 23px;
      height: 23px;
      margin: 20px 20px 0 0;
      border-radius: 100%;
      float: right;
    }
  }
  > .right {
    width: 237px;
    margin-left: 14px;
    .title {
      width: 100%;
      height: 60px;
      background: url(http://shenzhen.hyrzzx.com/style/images/t110.png)
        no-repeat center;
      background-position-y: -0.1px;
      font-size: 18px;
      text-align: center;
      display: block;
      color: #fff;
      line-height: 60px;
    }

    ul {
      background: #f6f6f7;
      padding-top: 15px;
      position: relative;
      padding-bottom: 30px;
      padding-left: 0;
      margin-top: 0;
      li {
        width: 193px;
        height: 67px;
        margin: 18px auto 0;
        background: #fff;
        text-align: center;
        line-height: 67px;
        img {
          vertical-align: middle;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
<style>
.carousel .el-carousel__button {
  width: 4px;
  height: 4px;
  border-radius: 50%;
}
</style>