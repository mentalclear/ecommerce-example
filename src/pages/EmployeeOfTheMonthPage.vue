<template>
  <div>
    <h1>Employee Of The Month Page</h1>
    <!-- With custom directive here:
     <h1 v-flash="300">Employee Of The Month Page</h1> -->
    <div v-if="personData">
      <h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
      <div>
        <img v-bind:src="personData.picture.large" />
      </div>
    </div>
  </div>
</template>

<script>
import randomPersonMixin from '../mixins/randomPersonMixin';

export default {
  name: 'EmployeeOfTheMonthPage',
  mixins: [randomPersonMixin],
};
</script>

<style>
img {
  border-radius: 100px;
}
</style>
