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
    max-width: 100vw;  /* Limita a largura ao tamanho da viewport */
    max-height: 100vh; /* Limita a altura ao tamanho da viewport */
    overflow: auto; 
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0px;
    margin: 0px;
    font-family: 'DM Sans', sans-serif;
  }

  #app {
    display: flex;
    height: 100vh;
  }
</style>