<template>
  <div class="container">
    <div class="box">
      <svg-icon
        icon-class="notice"
        color="#00A0E9"
        class-name="svg-size"
      />
      <marquee class="css-marquee">华亿认证中心乔迁至成都市成华区东华二路38号4栋24层1号！</marquee>
      <el-input placeholder="请输入关键字" v-model="inputValue" class="input-css">
        <template #append>
          <el-button icon="el-icon-search" @click="searchSubmit"></el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElInput, ElButton } from 'element-plus'

const inputValue = ref('')

const searchSubmit = () => {
  console.log(inputValue.value)
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    margin-top: 10px;
    width: 1300px;
    .svg-size {
      font-size: 30px;
      margin-top: 4px;
    }
    .css-marquee {
      line-height: 40px;
      margin-left: 10px;
    }
    .input-css {
      width: 400px;
      border-radius: 20px;
      margin-left: 50px;
    }
  }
}
</style>