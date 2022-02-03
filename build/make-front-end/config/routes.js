export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: '主页',
    icon: 'smile',
    component: './Index',
  },
  {
    path: '/list',
    name: '视频库',
    icon: 'icon-table',
    component: './List',
  },
  {
    name: '字幕库',
    icon: 'profile',
    path: '/subtitle',
    component: './Subtitle',
  },
  {
    name: '分段下载',
    icon: 'icon-play',
    path: '/range',
    component: './Range',
  },
  {
    name: '关于',
    icon: 'info',
    path: '/about',
    component: './About',
  },
  
  {
    component: './404',
  },
];
