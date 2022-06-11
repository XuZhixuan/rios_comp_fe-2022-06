import Home from '@/views/HomeView';
import News from '@/views/news/NewsView';
import Notice from '@/views/notices/NoticeView';
import Question from '@/views/questions/QuestionView';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView')
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: '',
        name: 'newsIndex',
        component: () => import('@/views/news/NewsList')
      },
      {
        path: ':id',
        name: 'newsShow',
        component: () => import('@/views/news/NewsShow'),
        props: true
      }
    ]
  },
  {
    path: '/notices',
    component: Notice,
    children: [
      {
        path: '',
        name: 'noticeIndex',
        component: () => import('@/views/notices/NoticesList')
      },
      {
        path: ':id',
        name: 'noticeShow',
        component: () => import('@/views/notices/NoticeShow'),
        props: true
      }
    ]
  },
  {
    path: '/qustions',
    component: Question,
    children: [
      {
        path: '',
        name: 'questionIndex',
        component: () => import('@/views/questions/QuestionsList')
      },
      {
        path: ':id',
        name: 'questionShow',
        component: () => import('@/views/questions/QuestionShow'),
        props: true
      }
    ]
  }
];
