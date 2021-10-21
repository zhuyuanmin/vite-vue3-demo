<template>
  <div class="container">
    <div class="menu-list">
      <div class="title"><a>{{data.name}}</a></div>
      <ul>
        <li
          v-for="(item, index) in data.list"
          :key="item.name"
          :class="item.active ? 'active' : ''"
          @click="activeHandle(index)"
        >
          <a>{{ item.name }}</a>
        </li>
      </ul>
      <Contact class="contact" />
    </div>
    <div class="content">
      <div
        v-for="item in data.list"
        :key="item.name"
        :style="{ display: item.active ? 'block' : '' }"
      >
        <h1>{{ item.name }}</h1>
        <div><img :src="item.content" alt="" srcset=""></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Contact from "@/components/Contact";
const props = defineProps({
  data: {
    type: Object,
  },
})

const emit = defineEmits(["activeEmit"])
const activeHandle = index => {
  emit("activeEmit", index);
}
</script>

<style lang="scss" scoped>
.container {
  width: 1300px;
  overflow: hidden;
  margin: 75px auto;
  .menu-list {
    width: 360px;
    float: left;
    .title {
      background: url(http://www.hyrzzx.com/style/images/t3.png) no-repeat
        center;
      background-position-y: 0;
      height: 81px;
      position: relative;
      color: #fff;
      text-align: center;
      z-index: 9;
      width: 100%;
      background-size: 100% 100%;
      a {
        font-size: 18px;
        text-align: center;
        display: block;
        color: #fff;
        line-height: 60px;
      }
    }
    ul {
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 1px solid #ededed;
      margin-top: -10px;
      padding-top: 15px;
      border-top: none;
      padding-bottom: 8px;
      border-radius: 5px;
      li {
        list-style: none;
        line-height: 50px;
        width: 270px;
        margin: 0 auto;
        border-bottom: 1px solid #ededed;
        cursor: pointer;
        a {
          display: block;
          padding-left: 39px;
          background: url(http://www.hyrzzx.com/style/images/j.png) no-repeat
            left;
          font-size: 16px;
        }
        &:last-child {
          border-bottom: none;
        }
      }
      li.active a {
        background: url(http://www.hyrzzx.com/style/images/jo.png) no-repeat
          left;
        color: #028fcf;
      }
    }
  }
  .content {
    float: right;
    width: 850px;
    > div {
      display: none;
      img {
        width: 100%;
      }
    }
    h1 {
      font-weight: 500;
      font-size: 26px;
      padding-bottom: 17px;
      background: url(http://www.hyrzzx.com/style/images/x.png) no-repeat bottom;
      background-size: contain;
    }
  }
  .contact {
    margin-top: 20px;
    clear: both;
  }
}
</style>