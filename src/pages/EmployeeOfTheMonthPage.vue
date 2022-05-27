<template>
  <div>
    <h1>Employee Of The Month Page</h1>
    <div v-if="personData">
      <h3>{{ personData.name.title }} {{ personData.name.first }} {{ personData.name.last }}</h3>
      <div>
        <img v-bind:src="personData.picture.large" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmployeeOfTheMonthPage',
  data() {
    return {
      personData: null,
    };
  },
  created() {
    axios.get('https://randomuser.me/api/')
      // eslint-disable-next-line prefer-destructuring
      .then((response) => { this.personData = response.data.results[0]; });

    // Working example using fetch
    // fetch('https://randomuser.me/api/')
    //   .then((response) => response.json())
    //   // eslint-disable-next-line prefer-destructuring
    //   .then((respData) => { this.personData = respData.results[0]; });
  },
};
</script>

<style>
img {
  border-radius: 100px;
}
</style>
