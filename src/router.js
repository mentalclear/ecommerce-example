import { createRouter, createWebHistory } from 'vue-router';
import EmployeeOfTheMonthPage from './pages/EmployeeOfTheMonthPage.vue';
import ProductsListPage from './pages/ProductsListPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import UserInfoPage from './pages/UserInfoPage.vue';

const routes = [
  { path: '/', component: ProductsListPage },
  { path: '/products/:id', component: ProductDetailPage },
  { path: '/cart', component: ShoppingCartPage },
  { path: '/user-info', component: UserInfoPage },
  { path: '/employee', component: EmployeeOfTheMonthPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
