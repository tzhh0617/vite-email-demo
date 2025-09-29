<template>
  <div class="page">
    <h2>TinyMCE 富文本编辑器 inline</h2>
    <div ref="editorRef" class="tinymce-container">
      <p>欢迎使用 TinyMCE 富文本编辑器！</p>
    </div>
    <el-button type="primary" style="margin: 16px 0" @click="setFilledContent">
      填充邮件内容
    </el-button>
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
import { ref, onMounted, onUnmounted } from "vue";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import 'tinymce/models/dom'
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/charmap";
import "tinymce/plugins/codesample";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/wordcount";
import { ElButton } from "element-plus";
import { EMAIL_TEMPLATE_FILLED } from "@/constants/email.js";

const content = ref("<p>欢迎使用 TinyMCE 富文本编辑器！</p>");
const editorRef = ref(null);
let editor = null;

onMounted(() => {
  initTinyMCE();
});

onUnmounted(() => {
  if (editor) {
    editor.destroy();
  }
});

function initTinyMCE() {
  tinymce.init({
    target: editorRef.value,
    height: 500,
    menubar: false,
    inline: true,
    plugins: 'anchor autolink charmap codesample image link lists media searchreplace table visualblocks wordcount',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | charmap | removeformat',
    content_style: `
      .editable { border: 1px solid transparent; }
      .editable:focus,.editable:hover { border-color: green; }
    `,
    // editable_root: false,
    // editable_class: 'editable',
    license_key: 'gpl',
    setup: (ed) => {
      editor = ed;
      ed.on('input change', () => {
        content.value = ed.getContent();
      });
    }
  });
}

function setFilledContent() {
  content.value = EMAIL_TEMPLATE_FILLED;
  if (editor) {
    editor.setContent(EMAIL_TEMPLATE_FILLED);
  }
}
</script>

<style scoped lang="scss">
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
:deep(.tox-tinymce) {
  .tox-promotion {
    display: none;
  }
}
</style>
