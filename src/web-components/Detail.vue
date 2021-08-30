
<template>
  <div>这是Detail {{ count }}页面</div>
</template>
<script>
export default {
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
