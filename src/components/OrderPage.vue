<template>
  <div>
    <h2>Заповніть заявку на замовлення номера</h2>
    <form @submit.prevent="submitOrder">
      <label>Кількість місць:
        <input type="number" v-model="order.guests" />
      </label>
      <label>Клас апартаментів:
        <select v-model="order.class">
          <option value="economy">Економ</option>
          <option value="standard">Стандарт</option>
          <option value="luxury">Люкс</option>
        </select>
      </label>
      <label>Час перебування:
        <input type="date" v-model="order.date" />
      </label>
      <button type="submit">Відправити заявку</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrderPage',
  data() {
    return {
      order: {
        guests: 1,
        class: 'economy',
        date: ''
      }
    };
  },
  methods: {
    async submitOrder() {
      try {
        // Надсилаємо запит до сервера для збереження заявки
        const response = await axios.post('/api/orders', this.order);
        console.log('Замовлення відправлено:', response.data);

        // Очищуємо форму після успішної відправки
        this.order = { guests: 1, class: 'economy', date: '' };

        // Відобразити повідомлення про успішну відправку, якщо необхідно
        alert('Заявку успішно відправлено!');
      } catch (error) {
        console.error('Помилка при відправці замовлення:', error);
        alert('Сталася помилка при відправці замовлення. Будь ласка, спробуйте ще раз.');
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: #333;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 10px;
}
</style>
