<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Delete } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <h1>APP</h1>
    <el-button type="primary" :icon="Delete">删除</el-button>
    <svg>
      <use xlink:href="#icon-item" fill="red"></use>
    </svg>
    <Pagination />
  </div>
</template>

<style scoped></style>
