import Home from '@/views/HomeView';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView')
  }
];
