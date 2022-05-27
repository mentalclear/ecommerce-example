<template>
  <div>
    <h1>User Info</h1>
    <div v-if="shoudlShowValidationErrors">
      <div v-for="error in validationErrors" :key="error" class="error">
        {{ error }}
      </div>
    </div>
    <div>
      <input placeholder="Name" v-model="name" />
      <input placeholder="Age" type="number" v-model.number="age" />
      <input placeholder="Address" v-model="address" />
      <button @click="displayData()">Save</button>
      <div v-if="savedUserInfo" class="saved-user-info">User info has been saved!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoPage',
  props: ['userInfo'],
  emits: ['userInfoSaved'],
  data() {
    return {
      name: this.userInfo.name,
      age: this.userInfo.age,
      address: this.userInfo.address,
      shoudlShowValidationErrors: false,
      savedUserInfo: false,
    };
  },
  methods: {
    displayData() {
      this.shoudlShowValidationErrors = true;
      if (this.validationErrors.length === 0) {
        this.$emit('userInfoSaved', this.name, this.age, this.address);
        this.savedUserInfo = true;
      }
    },
  },
  computed: {
    validationErrors() {
      const errors = [];
      if (this.name.length < 2) {
        errors.push('*Please enter a name longer than 2 characters');
      }
      if (this.age < 16) {
        errors.push('*Age must be 16 or greater');
      }
      if (this.address.length <= 5) {
        errors.push('*Please enter an address longer than 4 characters');
      }
      return errors;
    },
  },
};
</script>

<style>
.error {
  font-size: small;
  color: brown;
}

.saved-user-info {
  font-size: small;
  color: green;
  margin-top: 5px;
}
</style>
