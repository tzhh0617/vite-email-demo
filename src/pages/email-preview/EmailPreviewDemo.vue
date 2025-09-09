<template>
  <div class="page">
    <el-radio-group v-model="activePane" class="pane-radio-group" >
      <el-radio-button label="left">未填充</el-radio-button>
      <el-radio-button label="right">已填充</el-radio-button>
    </el-radio-group>
    <div class="preview-container">
      <!-- 未填充 -->
      <div v-if="activePane === 'left'" class="pane">
        <div class="pane-title">
          未填充
          <div class="tab-group">
            <button
              v-if="leftTab === 'code'"
              class="copy-btn copy-btn-tab"
              @click="copyRaw"
            >
              复制
            </button>

            <button
              :class="{ active: leftTab === 'preview' }"
              @click="leftTab = 'preview'"
            >
              预览
            </button>
            <button
              :class="{ active: leftTab === 'code' }"
              @click="leftTab = 'code'"
            >
              代码
            </button>
          </div>
        </div>
        <div v-if="leftTab === 'preview'" class="pane-content">
          <iframe
            class="preview-iframe"
            :srcdoc="EMAIL_TEMPLATE"
            frameborder="0"
            sandbox="allow-same-origin allow-popups allow-forms allow-scripts"
          ></iframe>
        </div>
        <div v-else class="pane-content">
          <pre class="code-block"><code>{{ EMAIL_TEMPLATE }}</code></pre>
        </div>
      </div>
      <!-- 已填充 -->
      <div v-if="activePane === 'right'" class="pane">
        <div class="pane-title">
          已填充
          <div class="tab-group">
            <button
              v-if="rightTab === 'code'"
              class="copy-btn copy-btn-tab"
              @click="copyFilled"
            >
              复制
            </button>

            <button
              :class="{ active: rightTab === 'preview' }"
              @click="rightTab = 'preview'"
            >
              预览
            </button>
            <button
              :class="{ active: rightTab === 'code' }"
              @click="rightTab = 'code'"
            >
              代码
            </button>
            
          </div>
        </div>
        <div v-if="rightTab === 'preview'" class="pane-content">
          <iframe
            class="preview-iframe"
            :srcdoc="EMAIL_TEMPLATE_FILLED"
            frameborder="0"
            sandbox="allow-same-origin allow-popups allow-forms allow-scripts"
          ></iframe>
        </div>
        <div v-else class="pane-content">
          <pre class="code-block"><code>{{ EMAIL_TEMPLATE_FILLED }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElRadioGroup, ElRadioButton } from 'element-plus';
import { EMAIL_TEMPLATE, EMAIL_TEMPLATE_FILLED } from "@/constants/email.js";

const leftTab = ref("preview");
const rightTab = ref("preview");
const activePane = ref("right");

function copyRaw() {
  navigator.clipboard.writeText(EMAIL_TEMPLATE);
}
function copyFilled() {
  navigator.clipboard.writeText(EMAIL_TEMPLATE_FILLED);
}
</script>

<style scoped>

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

.preview-container {
  flex: 1;
  display: flex;
  gap: 16px;
  overflow: hidden;
}
.pane {
  margin-top: 12px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  overflow: hidden;
  min-width: 0;
  border: 1px solid #eee;
}
.pane-title {
  font-weight: bold;
  font-size: 16px;
  padding: 12px 20px 8px 20px;
  background: #f0f0f0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tab-group {
  display: flex;
  gap: 8px;
}
.tab-group button {
  padding: 4px 16px;
  border: none;
  border-radius: 4px 4px 0 0;
  background: #e0e0e0;
  color: #333;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
}
.tab-group button.active {
  background: #fff;
  border-bottom: 2px solid #727cf5;
  color: #727cf5;
}
.pane-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.preview-iframe {
  flex: 1;
  width: 100%;
  border: none;
  background: #fff;
}
.code-block {
  flex: 1;
  margin: 0;
  padding: 20px;
  background: #222;
  color: #fff;
  font-size: 13px;
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  overflow: auto;
  border-radius: 0 0 8px 8px;
}
.copy-btn {
  margin-left: 12px;
  padding: 4px 12px;
  font-size: 13px;
  border: none;
  border-radius: 4px;
  background: #727cf5;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
.copy-btn-tab {
  margin-left: 16px;
  align-self: center;
}
.copy-btn:hover {
  background: #4e5ed3;
}
</style>
