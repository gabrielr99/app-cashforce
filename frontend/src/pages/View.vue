<template>
  <div class="page-default">
    <Aside />
    <div class="container-header">
      <div class="header"></div>
      <Orders />
    </div>
  </div>
</template>

<script>
  import Aside from '../components/Aside.vue';
  import Orders from '../components/Orders.vue';
  export default {
    name: 'View',
    components: {
      Aside,
      Orders
    },
}
</script>

<style scoped>
  .page-default {
    background-color: #FBFDFE;
    display: flex;
    margin: 0;
    width: 100%;
  }
  .container-header {
    width: 85%;
    height: 100vh;
    left: 15%;
    top: 0px;
  }
  .header {
    width: 100%;
    height: 60px;
    top: 0px;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
</style>
