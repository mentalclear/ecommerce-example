<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Products</router-link>
      </li>
      <li>
        <router-link to="/cart">Shopping Cart ({{ numberOfItems }})</router-link>
      </li>
      <li>
        <router-link to="/user-info">Edit My Info</router-link>
      </li>
      <li>
        <router-link to="/employee">Employee Of The Month</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['numberOfItems'],
};
</script>

<style>
</style>
