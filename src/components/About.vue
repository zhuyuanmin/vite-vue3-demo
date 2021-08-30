<template>
  <div>这是About 页面</div>
  <my-button size="18"></my-button>
</template>
<script setup>
import { onMounted, onUpdated, onUnmounted } from "vue";

onMounted(() => {
  console.log("mounted!");
});
onUpdated(() => {
  console.log("updated!");
});
onUnmounted(() => {
  console.log("unmounted!");
});
</script>