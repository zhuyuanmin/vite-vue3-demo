<template>
  <div class="container">
    <Header />
    <MenuBar />
    <!-- 轮播区 -->
    <Carousel>
      <template #default="{ height }">
        <SubmitForm :height="height" />
      </template>
    </Carousel>
    <NoticeSearch />
    <div v-if="store.state.activeKey === '1'">
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
    </div>
    <div v-else>
      <MenuList :data="obj[store.state.activeKey]" @activeEmit="handleEmit" />
    </div>
    <Footer />
    <ScrollTop />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuList from '@/components/MenuList'
import Content from '@/components/Content'
import Content2 from '@/components/Content2'
import Content3 from '@/components/Content3'
import Content4 from '@/components/Content4'
import ScrollTop from '@/components/ScrollTop'
import MenuBar from '@/components/MenuBar'
import Carousel from '../components/Carousel'
import SubmitForm from '../components/SubmitForm'
import NoticeSearch from '../components/NoticeSearch'

const store = useStore()

const obj = ref({
  2: { name: '走进华亿', list: [
    { name: '公司简介', content: '/images/welcome/intro.png', active: true },
    { name: '公司资质', content: '/images/welcome/cert.png' },
    { name: '公司文化', content: '/images/welcome/cartu.png' },
    { name: '组织机构', content: '/images/welcome/struct.png' },
    { name: '认证流程', content: '/images/welcome/step.png' },
    { name: '公司新闻', content: '/images/welcome/news.png' },
  ]},
  3: { name: '认证项目', list: [
    { name: '知识产权管理体系', content: '/images/cert-step/1.png', active: true },
    { name: '信息安全管理体系', content: '/images/cert-step/1.png' },
    { name: '信息技术服务管理体系', content: '/images/cert-step/1.png' },
    { name: '企业信用等级评价', content: '/images/cert-step/1.png' },
    { name: '食品安全管理体系', content: '/images/cert-step/1.png' },
    { name: 'HACCP危害分析与关键控制点', content: '/images/cert-step/1.png' },
    { name: '质量管理体系', content: '/images/cert-step/1.png' },
    { name: '资产管理体系', content: '/images/cert-step/1.png' },
    { name: '环境管理体系', content: '/images/cert-step/1.png' },
    { name: '职业健康安全管理体系', content: '/images/cert-step/1.png' },
    { name: 'HSE健康安全环境管理体系', content: '/images/cert-step/1.png' },
    { name: '医疗器械质量管理体系', content: '/images/cert-step/1.png' },
    { name: '商品售后服务评价体系', content: '/images/cert-step/1.png' },
    { name: '企业诚信管理体系', content: '/images/cert-step/1.png' },
    { name: '物业服务认证', content: '/images/cert-step/1.png' },
    { name: '道路交通安全管理体系', content: '/images/cert-step/1.png' },
    { name: '供应链安全管理体系', content: '/images/cert-step/1.png' },
    { name: '合规管理体系', content: '/images/cert-step/1.png' },
    { name: '绿色供应链管理体系', content: '/images/cert-step/1.png' },
    { name: '企业标准体系', content: '/images/cert-step/1.png' },
  ]},
  4: { name: '证书查询', list: [
    { name: '认证证书查询', content: '/images/book-query/1.png', active: true },
    { name: '内审员证书查询', content: '/images/book-query/2.png' },
    { name: '证书暂停公示', content: '/images/book-query/3.png' },
    { name: '证书撤销公示', content: '/images/book-query/4.png' },
    { name: '服务管理师查询', content: '/images/book-query/5.png' },
    { name: '专家库', content: '/images/book-query/6.png' },
  ]},
  5: { name: '证书样本', list: [
    { name: '证书样本', content: '/images/demo/1.png', active: true },
  ]},
  6: { name: '认证知识', list: [
    { name: '行业动态', content: '/images/know/1.png', active: true },
    { name: '行业标准', content: '/images/know/2.png' },
    { name: '新闻快讯', content: '/images/know/3.png' },
    { name: '政策法规', content: '/images/know/4.png' },
  ]},
  7: { name: '文件下载', list: [
    { name: '申请书', content: '/images/download/1.png', active: true },
    { name: '认证合同', content: '/images/download/2.png' },
    { name: '社会责任', content: '/images/download/3.png' },
    { name: '公开文件', content: '/images/download/4.png' },
  ]},
  8: { name: '人才招聘', list: [
    { name: '招聘岗位', content: '/images/job/1.png', active: true },
    { name: '审核员注册', content: '/images/job/2.png' },
  ]},
  9: { name: '登录专区', list: [
    { name: '登录专区', content: '/images/login/1.png', active: true },
  ]},
  10: { name: '联系我们', list: [
    { name: '联系我们', content: '/images/contact/1.png', active: true },
  ]},
})

const handleEmit = index => {
  obj.value[store.state.activeKey].list.forEach(v => v.active = false)
  obj.value[store.state.activeKey].list[index].active = true
}

</script>
<style>
body {
  width: 100%;
  margin: 0;
  border: 0;
}
.container {
  min-width: 1300px;
}
</style>