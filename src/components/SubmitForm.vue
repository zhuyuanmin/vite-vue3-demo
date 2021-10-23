<template>
  <div class="form" :style="{transform: `scale(${scale})`, top: `${scale * 13}em`, right: `${scale * 8}em`}">
    <div class="title">快速办理通道</div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleRef"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓 名" prop="name" required>
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" required>
        <el-input type="number" v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="公司座机" prop="telephone" required>
        <el-input v-model="ruleForm.telephone" />
      </el-form-item>
      <el-form-item label="认证项目" prop="items" required>
        <el-input v-model="ruleForm.items" />
      </el-form-item>
      <el-form-item label="公司名称" prop="companyName" required>
        <el-input v-model="ruleForm.companyName" />
      </el-form-item>

      <el-form-item class="btn-form-item">
        <el-button type="primary" @click="submitForm"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, watch } from "vue"
import axios from "axios"
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from "element-plus"
const ruleRef = ref(null)
const scale = ref(1)
const ruleForm = ref({
  name: "",
  phone: "",
  telephone: "",
  items: "",
  companyName: "",
})

const rules = ref({
  name: [
    { required: true, message: " ", trigger: "blur" },
  ],
  phone: [
    { required: true, length: 11, message: " ", trigger: "blur", pattern: /^1[3-9]\d{9}$/ },
  ],
  telephone: [
    { required: true, message: " ", trigger: "blur" },
  ],
  items: [
    { required: true, message: " ", trigger: "blur" },
  ],
  companyName: [
    { required: true, message: " ", trigger: "blur" },
  ],
})

const props = defineProps({
  height: {
    type: String
  }
})

watch(() => props.height, () => {
  if (props.height) {
    scale.value = parseInt(props.height) / 500
  }
})

const submitForm = () => {
  ruleRef.value.validate(valid => {
    if (valid) {
      axios.post('/cer/data/channel', ruleForm.value).then(res => {
        ElMessage({
          showClose: true,
          message: '提交成功！',
          type: 'success',
        })
      }).catch(err => {
        throw new Error(err)
      })
    } else {
      return false
    }
  })
}

</script>
<style lang="scss" scoped>
.form {
  width: 410px;
  background: url(http://www.hyrzzx.com/style/images/75.png);
  border-radius: 15px;
  position: absolute;
  top: 13em;
  right: 8em;
  z-index: 9;
  padding: 0 30px 10px 20px;
  box-sizing: border-box;

  .title {
    font-size: 30px;
    color: #151515;
    text-align: center;
    font-weight: 700;
    padding: 20px 0;
  }

  .demo-ruleForm {
    .el-form-item {
      margin-bottom: 10px;
    }

    .btn-form-item {
      margin-top: 15px;
    }
  }
}
</style>