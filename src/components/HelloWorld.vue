<script setup>
import {
  getCurrentInstance,
  ref,
  useAttrs,
  useSlots,
  inject,
  // defineProps, // 不需要导入
  // defineEmits, // 不需要导入
  // defineExpose, // 不需要导入
} from "vue";
import { useNow } from "@/utils";
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

defineProps({
  msg: String,
});

const attrs = useAttrs();
const slots = useSlots();
const emit = defineEmits(["key", "value"]);

const name = inject("name");

const handleClick = () => {
  emit("update:key", "新的key");
  emit("update:value", "新的value");
};

defineExpose({
  childName: "这是子组件的属性",
  someMethod() {
    console.log("这是子组件的方法");
  },
});

const slotProps = ref({ a: 123 });
const time = useNow();
const { proxy } = getCurrentInstance();
proxy.$http.get("https://www.baidu.com");


const route = useRoute()
const { state, dispatch, commit } = useStore()

const asyncFn = () => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

console.log(route);
console.log(state);
</script>

<template>
  <slot :item="slotProps">默认文本</slot>
  <h1 @click="commit('increment')">{{ msg }} {{ state.count }}</h1>
  <h2 @click="asyncFn">{{ msg }} {{ state.count }}</h2>
  <p>{{ name }}</p>
  <p>{{ time }}</p>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}
h1 {
  cursor: pointer;
}
</style>
