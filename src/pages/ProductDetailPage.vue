<template>
  <div>
    <div v-if="productFound">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.price }}</h3>
      <p> {{ product.description }} </p>
      <button @click="addToCart(product.id)">Add to Cart</button>
    </div>
    <div v-if="!productFound">
      <h1>Oops... We couldn't find the product requested!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDatailPage',
  props: ['products'],
  computed: {
    product() {
      return this.products.find((product) => product.id === this.$route.params.id);
    },
    productFound() {
      return !!this.product;
    },
  },
  emits: ['addToCart'],
  methods: {
    addToCart() {
      this.$emit('addToCart', this.$route.params.id);
    },
  },
};
</script>

<style>
</style>
