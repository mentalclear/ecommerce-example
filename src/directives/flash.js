// This is a custom directive that is later used as v-flash
/* eslint-disable no-param-reassign */
export default {
  mounted(el, binding) {
    setInterval(() => {
      if (el.style.visibility === 'visible') {
        el.style.visibility = 'hidden';
      } else {
        el.style.visibility = 'visible';
      }
    }, binding.value);
  },
};
