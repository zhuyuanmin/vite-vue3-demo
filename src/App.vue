<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, provide } from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { ElButton } from 'element-plus'

const domRef = ref(null)
const handlerClick = () => {
  console.log(domRef.value.childName) // 获取子组件对外暴露的属性
  domRef.value.someMethod() // 调用子组件对外暴露的方法
}

provide("name", "沐华")

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="handlerClick">按钮</button>
  <HelloWorld msg="Hello Vue 3 + Vite" ref="domRef">
    <template #default="slotProps">

      <div>{{ slotProps.item.a }}</div>
    </template>
  </HelloWorld>

  <ElButton>我是 ElButton</ElButton>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
