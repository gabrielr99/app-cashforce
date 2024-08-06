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
  .container-nf {
    width: 96.63%;
    height: calc(100vh - 60px);
    top: 60px;
    margin: 50px;
  }
  .svg-notas-fiscais {
    width: 182px;
    height: 28px;
    margin: 10px;
    display: flex;
  }
  .p-nf {
    margin-left: 18px;
    margin-top: 3px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: rgb(46, 191, 164);
  }
  .container-svg-span-nf {
    margin-bottom: 10px;
  }
  
  .span-botton {
    font-size: 13px;
  }
</style>
