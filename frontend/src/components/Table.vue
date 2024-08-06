<template>
  <div>
    <div class="table">
      <div class="table-row table-header">
        <div class="table-cell th">NOTA FISCAL</div>
        <div class="table-cell th">SACADO</div>
        <div class="table-cell th">CEDENTE</div>
        <div class="table-cell th">EMISSÃO</div>
        <div class="table-cell th">VALOR</div>
        <div class="table-cell th">STATUS</div>
        <div class="table-cell th divbutton"></div>
      </div>
      <div class="table-td" v-for="order in ordersList"
      :key="order.id"
      :order="order">
        <div class="td">{{ order.orderNumber }}</div>
        <div class="td">{{ order.buyer.name }}</div>
        <div class="td">{{ order.provider.name }}</div>
        <div class="td">{{ formatarData(order.createdAt) }}</div>
        <div class="td value-table">{{ formatarValor(order.value) }}</div>
        <div class="td status-table">{{ formatStatus(order.orderStatusBuyer) }}</div>
        <div class="td button-table">
          <button>Dados do cedente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'Table',
    data () {
      return {
        ordersList: []
      }
    },
  methods: {
    fetchOrders() {
      fetch('http://localhost:3001/orders?buyerId=1')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Espera-se que a resposta seja JSON
        })
        .then(data => {
          this.ordersList = data;
          console.log(this.ordersList)
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    },
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
    formatarValor(valor) {
      // Converte a string para número e formata como moeda
      return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    formatStatus(status) {
      const statusMap = {
        0: 'PENDENTE DE CONFIRMAÇÃO',
        1: 'PEDIDO CONFIRMADO',
        2: 'NÃO RECONHECE O PEDIDO',
        3: 'MERCADORIA NÃO RECEBIDA',
        4: 'RECEBIDO COM AVARIA',
        5: 'DEVOLVIDA',
        6: 'RECEBIDA COM DEVOLUÇÃO PARCIAL',
        7: 'RECEBIDA E CONFIRMADA',
        8: 'PAGAMENTO AUTORIZADO'
      };

      return statusMap[status];
   }
  },
  mounted() {
    this.fetchOrders();
  }
}
</script>

<style scoped>
  .table {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 95%;
  }

  .table-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .table-header {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  .table-td {
    border: 1px solid #f2f2f2;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    border-width: 1px;
    border-color: rgb(231, 231, 231);
    border-radius: 6px;
    padding: 2px;

  }
  .page-default {
    background-color: #FBFDFE;
    display: flex;
    margin: 0;
    width: 100%;
  }
  
  .container_table {
    margin-top: 100px;
  }
  .th {
    background-color: rgba(255, 255, 255, 0.784);
    text-align: left;
    width: 160px;
    font-size: 10px;
    font-weight: 500;
    color : rgb(167, 167, 167);
    padding: 8px;;
  }
  .td {
    background-color: rgba(255, 255, 255, 0.784);
    text-align: left;
    width: 160px;
    font-size: 12px;
    font-weight: 500;
    color : rgb(58, 58, 58);
    padding: 10px;
    
  }
  .trtable  {
    background-color: red;
    border-radius: 10px solid;
  }
  .value-table {
    color: rgb(2, 208, 170);
  }
  .status-table {
    width: 180px;
    color: rgb(2, 208, 170);;
  }
  .button-table {
    width: 20%;
    padding: 0px 10px 0px 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .button-table > button {
    border: 1px solid #CAD3FF;
    border-radius: 17px;
    cursor: pointer;
    height: 28px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
</style>