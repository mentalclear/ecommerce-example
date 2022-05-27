<template>
  <div>
    <router-link to="/cart">Shopping Cart</router-link>
    <router-link to="/">Home</router-link>
    <router-view :shoppingCart="shoppingCart" :products="products" @addToCart="addToCart">
    </router-view>
  </div>
</template>

<script>
import products from './pages/products';

export default {
  name: 'App',
  data() {
    return {
      shoppingCartIds: [],
      products,
    };
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartIds.map((id) => (this.products.find((p) => p.id === id)));
    },
  },
  methods: {
    addToCart(id) {
      this.shoppingCartIds.push(id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  margin-left: 5px;
  font-weight: bold;
}
</style>
