<template>
  <div class="page">
    <h2>WangEditor 富文本编辑器</h2>
    <Editor
      v-model="content"
    />
    <el-button type="primary" style="margin: 16px 0;" @click="setFilledContent">填充邮件内容</el-button>
    <div class="card">
      <h3>内容预览：</h3>
      <div v-html="content" class="preview"></div>
    </div>
    <div class="card">
      <h3>内容 HTML：</h3>
      <pre class="code-block"><code>{{ content }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Editor from "@/components/WangRichEditor/RichEditor.vue";
import { ElButton } from 'element-plus';
import { EMAIL_TEMPLATE_FILLED } from '@/constants/email.js';

const content = ref("<p>欢迎使用 WangEditor 富文本编辑器！</p>");

function setFilledContent() {
  content.value = EMAIL_TEMPLATE_FILLED;
}
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
}
.card {
  margin-top: 32px;
  background: #fff;
  box-shadow: 0 2px 8px #0001;
  border-radius: 8px;
  padding: 16px;
}
.code-block {
  background: #222;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  overflow-x: auto;
}
</style>
