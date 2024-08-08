<template>
  <div class="page-default">
    <Aside />
    <div class="container-header-orders">
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
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
  }
  .container-header-orders {
    width: 85%;
    height: 100%;
    left: 15%;
  }
  .header {
    width: 100%;
    height: 60px;
    top: 0px;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
</style>
