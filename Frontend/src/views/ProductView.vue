<template>
  <div class="about">
    <div class="product-grid">
      <div v-for="product in products" :key="product.products_id" class="product-card">
        <img :src="product.image_url" alt="Product Image" class="product-image" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Discount: {{ product.discount }}%</p>
        <p>Stock: {{ product.stock }}</p>
        <p>Category ID: {{ product.category_id }}</p>
        <p v-if="product.is_new">New!</p>
        <div class="cart-actions">
          <button @click="decrementQty(product.products_id)">-</button>
          <input
            type="number"
            min="1"
            :max="product.stock"
            v-model.number="quantities[product.products_id]"
            class="qty-input"
          />
          <button @click="incrementQty(product.products_id, product.stock)">+</button>
          <!-- Add to cart -->
          <button @click="() =>{
            addToCart(product)
          }
          ">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantities: {},
    };
  },
  computed: {
    products() {
      return this.$store.state.products || [];
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    incrementQty(id, stock) {
      if (this.quantities[id] < stock) {
        this.quantities[id]++;
      }
    },
    decrementQty(id) {
      if (this.quantities[id] > 1) {
        this.quantities[id]--;
      }
    },
    addToCart(product) {
      const qty = this.quantities[product.products_id] || 1;
      // Replace this with your actual add-to-cart logic or Vuex action
      this.$store.dispatch("addProductToCart", {
        user_id: 1,
        ...product,
        quantity: qty,
      });
    }
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.product-card {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  font-size: 0.9rem;
}
.product-card h2 {
  font-size: 1.1rem;
}
.product-card p {
  font-size: 0.85rem;
}
.product-image {
  width: 90%;
  height: auto;
  margin-bottom: 8px;
}
.cart-actions {
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 6px;
}
.qty-input {
  width: 40px;
  text-align: center;
  font-size: 0.9rem;
  padding: 2px;
}
.cart-actions button {
  font-size: 0.9rem;
  padding: 2px 8px;
  cursor: pointer;
}
</style>
