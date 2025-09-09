
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="app-container">
    <el-menu :default-active="$route.path" mode="horizontal" router class="nav-bar">
      <el-menu-item index="/solution-one">技术方案一</el-menu-item>
      <el-menu-item index="/solution-two">技术方案二</el-menu-item>
    </el-menu>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>
