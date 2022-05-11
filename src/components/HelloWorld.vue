<script setup>
import { useCounterStore } from '@/stores/counter'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const counterStore = useCounterStore()
</script>

<template>
  <h1>{{ $t('helloWorld.hello') }} {{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="counterStore.increment()"
  >
    count is: {{ counterStore.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}
</style>
