<template>
  <ul>
    <li>
      <router-link to="/">
        {{ $t('home') }}
      </router-link>
    </li>
    <li>
      <router-link to="/about">
        {{ $t('about') }}
      </router-link>
    </li>
  </ul>
</template>

<style lang="less" scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 8px;
}
</style>
