<template>
  <div>
    这是Home 页面
  </div>
</template>
<script>
  import { useRouter } from 'vue-router'
  
  export default {
    mounted() {
      console.log('挂载了');
    },
    setup() {
      const router = useRouter()
      router.push('/')
    }
  }
</script>