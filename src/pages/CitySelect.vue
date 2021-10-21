<template>
  <div class="container">
    <div class="contain">
      <div class="header">
        <img src="http://jian.hyrzzx.com/style/images/fz.jpg" alt="" />
      </div>
      <div class="box2">
        <div class="title">热门城市</div>
        <ul>
          <li @click="goHome('郑州')">郑州</li>
          <li @click="goHome('成都')">成都</li>
          <li @click="goHome('大连')">大连</li>
          <li @click="goHome('西安')">西安</li>
          <li @click="goHome('重庆')">重庆</li>
        </ul>
      </div>
      <div class="city-search">
        <span>选择城市</span>
        <el-select
          class="province"
          v-model="province"
          placeholder="省份"
          @change="changeCity"
        >
          <el-option
            v-for="item in provinceOpt"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select class="city" v-model="city" placeholder="城市">
          <el-option
            v-for="item in cityData[province]"
            :key="item"
            :label="cityData[province][item]"
            :value="item"
          >
          </el-option>
        </el-select>
        <span class="btn" @click="goHome(city)">跳转</span>
        <div class="search">
          <span>在线搜索</span>
          <ElInput class="input" v-model="searchVal" />
          <button>搜索</button>
        </div>
      </div>
      <div class="code-list">
        <p>点击字母可进行跳转</p>
        <div>
          <span v-for="key in Object.keys(codeList)" :key="key"><a :href="'#' + key">{{ key }}</a></span>
        </div>
      </div>
      <div class="content" v-for="key in Object.keys(codeList)" :key="key">
        <div class="box">
          <p><a :name="key">{{ key }}</a></p>
          <span @click="goHome(v)" v-for="v in codeList[key]" :key="v">{{ v }}</span>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollTop />
  </div>
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import { ElSelect, ElOption, ElInput } from "element-plus";
import jsonData from "china-area-data";
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'
import { useRouter } from 'vue-router'

const province = ref("");
const city = ref("");
const router = useRouter()

onMounted(() => {
  console.log("mounted!");
});
onUpdated(() => {
  console.log("updated!");
});
onUnmounted(() => {
  console.log("unmounted!");
});

const pData = Object.keys(jsonData["86"]).map((key) => ({
  label: jsonData["86"][key],
  value: key,
}));
const provinceOpt = ref(pData);
const cityData = ref(jsonData);

const changeCity = () => {
  city.value = "";
};

const goHome = city => {
  if (city) {
    router.push(`/?name=${city}`)
  }
}

const codeList = ref({
  A: [
    "安庆",
    "安康",
    "阿克苏",
    "安顺",
    "阿拉善",
    "阿坝",
    "阿里",
    "阿拉尔",
    "澳门",
    "安阳",
    "鞍山",
  ],
  B: [
    "佛山",
    "保定",
    "滨州",
    "包头",
    "宝鸡",
    "本溪",
    "蚌埠",
    "北海",
    "巴彦淖尔",
    "白城",
    "白山",
    "亳州",
    "巴中",
    "白银",
    "百色",
    "巴音郭楞",
    "保山",
    "博尔塔拉",
    "北京",
  ],
  C: [
    "长沙",
    "长春",
    "常州",
    "赤峰",
    "承德",
    "常德",
    "长治",
    "郴州",
    "滁州",
    "巢湖",
    "潮州",
    "昌吉",
    "池州",
    "楚雄",
    "崇左",
    "昌都",
    "朝阳",
    "常熟",
    "慈溪",
    "察布",
    "成都",
    "重庆",
    "沧州",
  ],
  D: [
    "东莞",
    "德州",
    "东营",
    "大庆",
    "大同",
    "丹东",
    "儋州",
    "德阳",
    "达州",
    "大理",
    "大兴安岭",
    "定西",
    "德宏",
    "迪庆",
    "大连",
  ],
  E: ["鄂尔多斯", "鄂州"],
  F: ["福州", "抚顺", "阜阳", "阜新", "防城港"],
  G: [
    "贵阳",
    "桂林",
    "赣州",
    "广元",
    "广安",
    "贵港",
    "固原",
    "甘南",
    "甘孜",
    "果洛",
    "广州",
  ],
  H: [
    "杭州",
    "惠州",
    "哈尔滨",
    "合肥",
    "呼和浩特",
    "海口",
    "邯郸",
    "菏泽",
    "衡水",
    "淮安",
    "衡阳",
    "葫芦岛",
    "淮南",
    "汉中",
    "怀化",
    "淮北",
    "黄冈",
    "湖州",
    "黄石",
    "呼伦贝尔",
    "河源",
    "鹤壁",
    "鹤岗",
    "黄山",
    "红河",
    "河池",
    "哈密",
    "黑河",
    "贺州",
    "海西",
    "和田",
    "海北",
    "海东",
    "黄南",
  ],
  I: [],
  J: [
    "济南",
    "济宁",
    "吉林",
    "锦州",
    "金华",
    "嘉兴",
    "江门",
    "荆州",
    "焦作",
    "晋中",
    "佳木斯",
    "九江",
    "晋城",
    "荆门",
    "鸡西",
    "吉安",
    "揭阳",
    "景德镇",
    "济源",
    "酒泉",
    "金昌",
    "嘉峪关",
    "胶州",
    "即墨",
  ],
  K: ["昆明", "开封", "喀什", "克拉玛依", "库尔勒", "克孜勒苏", "昆山"],
  L: [
    "兰州",
    "拉萨",
    "廊坊",
    "临沂",
    "聊城",
    "柳州",
    "连云港",
    "临汾",
    "漯河",
    "辽阳",
    "乐山",
    "泸州",
    "六安",
    "娄底",
    "莱芜",
    "龙岩",
    "吕梁",
    "丽水",
    "凉山",
    "丽江",
    "六盘水",
    "辽源",
    "来宾",
    "临沧",
    "陇南",
    "临夏",
    "林芝",
    "洛阳",
  ],
  M: ["绵阳", "牡丹江", "茂名", "梅州", "马鞍山", "眉山"],
  N: [
    "南京",
    "宁波",
    "南宁",
    "南昌",
    "南通",
    "南阳",
    "南充",
    "内江",
    "南平",
    "宁德",
    "怒江",
    "那曲",
  ],
  O: [],
  P: [
    "平顶山",
    "濮阳",
    "盘锦",
    "莆田",
    "攀枝花",
    "萍乡",
    "平凉",
    "普洱",
    "郫县",
  ],
  Q: [
    "青岛",
    "琼海",
    "秦皇岛",
    "泉州",
    "清远",
    "曲靖",
    "衢州",
    "庆阳",
    "七台河",
    "钦州",
    "潜江",
    "黔东南",
    "黔南",
    "黔西南",
  ],
  R: ["日照", "日喀则"],
  S: [
    "沈阳",
    "石家庄",
    "苏州",
    "汕头",
    "商丘",
    "三亚",
    "宿迁",
    "绍兴",
    "十堰",
    "四平",
    "三门峡",
    "邵阳",
    "上饶",
    "遂宁",
    "三明",
    "绥化",
    "石河子",
    "韶关",
    "松原",
    "随州",
    "汕尾",
    "双鸭山",
    "朔州",
    "石嘴山",
    "商洛",
    "神农架",
    "山南",
    "双流",
    "上海",
    "深圳",
  ],
  T: [
    "天津",
    "太原",
    "唐山",
    "泰安",
    "台州",
    "泰州",
    "铁岭",
    "通辽",
    "通化",
    "天水",
    "铜陵",
    "铜川",
    "铜仁",
    "天门",
    "塔城",
    "吐鲁番",
    "图木舒克",
  ],
  U: [],
  V: [],
  W: [
    "无锡",
    "威海",
    "潍坊",
    "温州",
    "芜湖",
    "渭南",
    "乌海",
    "梧州",
    "乌兰",
    "武威",
    "文山",
    "五家渠",
    "五指山",
    "武汉",
    "乌鲁木齐",
  ],
  X: [
    "西宁",
    "徐州",
    "咸阳",
    "邢台",
    "襄阳",
    "湘潭",
    "许昌",
    "信阳",
    "孝感",
    "忻州",
    "咸宁",
    "新余",
    "宣城",
    "仙桃",
    "锡林郭勒",
    "湘西",
    "兴安",
    "西双版纳",
    "香港",
    "新乡",
    "西安",
  ],
  Y: [
    "银川",
    "宜昌",
    "烟台",
    "扬州",
    "盐城",
    "营口",
    "岳阳",
    "运城",
    "榆林",
    "阳泉",
    "延安",
    "益阳",
    "永州",
    "宜春",
    "阳江",
    "延边",
    "玉溪",
    "伊犁",
    "云浮",
    "雅安",
    "鹰潭",
    "玉树",
    "义乌",
    "宜宾",
  ],
  Z: [
    "珠海",
    "淄博",
    "中山",
    "枣庄",
    "张家口",
    "株洲",
    "镇江",
    "周口",
    "湛江",
    "驻马店",
    "肇庆",
    "自贡",
    "遵义",
    "漳州",
    "舟山",
    "张掖",
    "资阳",
    "张家界",
    "昭通",
    "中卫",
    "郑州",
  ],
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .contain {
    width: 1300px;
    margin: 0 auto;
    margin-bottom: 70px;
    .header {
      width: 100%;
      img {
        width: 1300px;
        height: 300px;
      }
    }
    .box2 {
      display: flex;
      margin-top: 50px;
      .title {
        font-size: 18px;
        color: #ff6000;
        font-weight: 600;
        width: 80px;
      }
      ul {
        overflow: hidden;
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          float: left;
          font-size: 18px;
          color: #999999;
          margin: 0 10px;
          cursor: pointer;
        }
      }
    }
    .city-search {
      margin-top: 20px;
      font-size: 18px;
      .province {
        margin-left: 15px;
        width: 130px;
      }
      .city {
        margin-left: 15px;
        width: 130px;
      }
      .btn {
        display: inline-block;
        border-radius: 18px;
        font-size: 16px;
        padding: 3px 25px 5px 4px;
        border: 1px solid #bdbdbd;
        margin-left: 15px;
        height: 35px;
        outline: none;
        background: #00a0ea;
        color: #fff;
        width: 80px;
        padding: 0;
        text-align: center;
        margin-left: 10px;
        cursor: pointer;
        line-height: 33px;
      }
      .search {
        display: flex;
        float: right;
        align-items: center;
        margin-right: 400px;
        .input {
          width: 150px;
          margin-left: 10px;
        }
        button {
          border-radius: 18px;
          font-size: 16px;
          padding: 3px 25px 5px 4px;
          border: 1px solid #bdbdbd;
          margin-left: 15px;
          height: 35px;
          outline: none;
          background: #00a0ea;
          color: #fff;
          width: 80px;
          padding: 0;
          text-align: center;
          margin-left: 10px;
          line-height: 33px;
        }
      }
    }
    .code-list {
      p {
        margin-top: 35px;
        margin-bottom: 15px;
        color: #8f8d8d;
      }
      span {
        font-size: 14px;
        margin-right: 30px;
        cursor: pointer;
        a {
          color: #8f8d8d;
          text-decoration: none;
        }
      }
    }
    .content {
      .box {
        p {
          font-size: 18px;
          margin-top: 35px;
          margin-bottom: 0;
        }
        span {
          margin-top: 19px;
          display: inline-block;
          padding: 5px 18px;
          background: #eeeeee;
          border-radius: 8px;
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>