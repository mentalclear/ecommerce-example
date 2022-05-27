import { createApp } from 'vue';
import flash from './directives/flash';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .directive('flash', flash)
  .mount('#app');
