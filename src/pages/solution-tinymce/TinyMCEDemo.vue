<template>
  <div class="page">
    <h2>TinyMCE 富文本编辑器</h2>
    <Editor
      v-model="content"
      apiKey="avs0zhkuua6qsxgcky76lrar007kt9qxd1zmnld8xkhgnecw"
      :init="{
        height: 500,
        plugins:
          'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }"
    />
    <div class="output">
      <h3>内容预览：</h3>
      <div v-html="content" class="preview"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";

const content = ref("<p>欢迎使用 TinyMCE 富文本编辑器！</p>");
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
}
.output {
  margin-top: 32px;
  background: #fafafa;
  padding: 16px;
  border-radius: 8px;
}
.preview {
  min-height: 100px;
}
</style>
