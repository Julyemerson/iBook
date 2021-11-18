<template>
  <div class="wrapper">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  gap: 0.5rem;
  justify-items: center;
  align-items: center;

  .box {
    width: 300px;
    height: 300px;
    background-color: color('dark', 'darkest');
  }
}
</style>
