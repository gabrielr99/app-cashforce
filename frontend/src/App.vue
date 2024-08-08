<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  html {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    padding: 0px;
    margin: 0px;
    height: 100%;
    font-family: 'DM Sans', sans-serif;
  }

  #app {
    display: flex;
    height: 100vh;
  }
</style>