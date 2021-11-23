<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'Ibook',
  created() {
    console.log(books.index())
  },
})
</script>
