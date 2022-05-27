import axios from 'axios';

export default {
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
