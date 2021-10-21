<template>
  <div class="menu-bar">
    <ul class="menu-bar-ul" @click="setActive">
      <li
        v-for="item in menu"
        :key="item.key"
        :data-key="item.key"
        :class="{active: item.active}"
      >
        {{item.name}}
      </li>
    </ul>
  </div>

  <teleport to="body">
    <div class="drop-menu" v-if="key">
      <ul class="drop-menu-ul" :style="{left: left + 'px'}">
        <li
          v-for="(item, index) in list[key]"
          :key="index"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
  </teleport>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const key = ref('')
const left = ref(0)
const store = useStore()

const menu = ref([
  {key: '1', name: '首页', active: true},
  {key: '2', name: '走进华亿', active: false},
  {key: '3', name: '认证项目', active: false},
  {key: '4', name: '证书查询', active: false},
  {key: '5', name: '证书样本', active: false},
  {key: '6', name: '认证知识', active: false},
  {key: '7', name: '文件下载', active: false},
  {key: '8', name: '人才招聘', active: false},
  {key: '9', name: '登录专区', active: false},
  {key: '10', name: '联系我们', active: false},
])

const list = ref({
  1: [],
  2: [
    {name: '公司简介', href: ''},
    {name: '公司资质', href: ''},
    {name: '公司文化', href: ''},
    {name: '组织机构', href: ''},
    {name: '认证流程', href: ''},
    {name: '公司新闻', href: ''},
  ],
  3: [
    {name: '知识产权管理体系', href: ''},
    {name: '信息安全管理体系', href: ''},
    {name: '信息技术服务管理体系', href: ''},
    {name: '企业信用等级评价', href: ''},
    {name: '食品安全管理体系', href: ''},
    {name: 'HACCP危害分析与关键控制点', href: ''},
    {name: '质量管理体系', href: ''},
    {name: '资产管理体系', href: ''},
    {name: '环境管理体系', href: ''},
    {name: '职业健康安全管理体系', href: ''},
    {name: 'HSE健康安全环境管理体系', href: ''},
    {name: '医疗器械质量管理体系', href: ''},
    {name: '商品售后服务评价体系', href: ''},
    {name: '企业诚信管理体系', href: ''},
    {name: '物业服务认证', href: ''},
    {name: '道路交通安全管理体系', href: ''},
    {name: '供应链安全管理体系', href: ''},
    {name: '合规管理体系', href: ''},
    {name: '绿色供应链管理体系', href: ''},
    {name: '企业标准体系', href: ''},
    {name: '企业质量信用评价管理体系', href: ''},
    {name: '卓越绩效管理体系', href: ''},
    {name: '隐私信息管理体系', href: ''},
    {name: '业务连续性管理体系', href: ''},
    {name: '重要产品追溯管理体系', href: ''},
  ],
  4: [
    {name: '认证证书查询', href: ''},
    {name: '内审员证书查询', href: ''},
    {name: '证书暂停公示', href: ''},
    {name: '证书撤销公示', href: ''},
    {name: '服务管理师查询', href: ''},
    {name: '专家库', href: ''},
  ],
  5: [],
  6: [
    {name: '行业动态', href: ''},
    {name: '行业标准', href: ''},
    {name: '新闻快讯', href: ''},
    {name: '政策法规', href: ''},
  ],
  7: [
    {name: '申请书', href: ''},
    {name: '认证合同', href: ''},
    {name: '社会责任', href: ''},
    {name: '公开文件', href: ''},
  ],
  8: [
    {name: '招聘岗位', href: ''},
    {name: '审核员注册', href: ''},
  ],
  9: [],
  10: [],
})

const switchDropList = e => {
  const isUL = e.target.tagName === 'UL' || e.target.tagName === 'LI'
  if (isUL) {
    if (e.target.parentElement.className === 'menu-bar-ul') {
      key.value = e.target.dataset.key
      left.value = e.target.offsetLeft
    }
  } else {
    key.value = ''
  }
}

const setActive = e => {
  if (e.target.tagName === 'LI' && e.target.parentElement.className === 'menu-bar-ul') {
    const curKey = e.target.dataset.key
    const retList = menu.value.map(v => {
      if (v.key === curKey) {
        v.active = true
        store.commit('setActiveKey', v.key)
      } else {
        v.active = false
      }
      return v
    })
    menu.value = retList
  }
}

onMounted(() => {
  document.addEventListener('mouseover', switchDropList)
})
onUnmounted(() => {
  document.removeEventListener('mouseover', switchDropList)
})

</script>
<style lang="scss" scoped>
.menu-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #00a0e9;
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: inline-block;
    li {
      list-style: none;
      float: left;
      width: 120px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #028fcf;
      }
    }
    li.active {
      background-color: #028fcf;
    }
  }
}

.drop-menu {
  ul {
    overflow: hidden;
    background-color: #2c2c2c;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-height: 275px;
    overflow-y: auto;
    display: inline-block;
    padding: 10px 0;
    position: absolute;
    top: 160px;
    z-index: 100;
    li {
      list-style: none;
      height: 36px;
      font-size: 14px;
      min-width: 80px;
      line-height: 36px;
      padding: 0 20px;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>