<template>
  <div>
    <h2>Список замовлень</h2>
    <ul>
      <li v-for="(order, index) in orders" :key="index">
        {{ order.guests }} гостей, клас: {{ order.class }}, дата: {{ order.date }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminPage',
  data() {
    return {
      orders: [] // Порожній масив для зберігання замовлень з сервера
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await axios.get('/api/orders'); // Виконуємо GET-запит до сервера
        this.orders = response.data; // Зберігаємо отримані дані в масиві orders
      } catch (error) {
        console.error('Помилка при отриманні замовлень:', error);
      }
    }
  },
  mounted() {
    this.fetchOrders(); // Викликаємо метод при завантаженні компонента
  }
};
</script>

<style scoped>
h2 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>
