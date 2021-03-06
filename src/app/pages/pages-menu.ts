import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Platform',
    icon: 'ion-cloud',
    link: '/pages/dashboard',
    home: true
  },
  {
    title: 'IoT',
    group: true
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot'
  },
  {
    title: 'Devices',
    icon: 'ion-cube',
    link: '/pages/iot'
  },
  {
    title: 'AUTO',
    group: true
  },
  {
    title: 'Auto Dashboard',
    icon: 'nb-home',
    link: '/pages/auto'
  },
  {
    title: 'Vehicle',
    icon: 'ion-android-car',
    link: '/pages/auto/vehicles'
  },
  {
    title: 'Actions',
    icon: 'nb-plus',
    children: [
      {
        title: 'Reminders',
        link: '/pages/auto/actions/reminders'
      },
      {
        title: 'Services',
        link: '/pages/auto/actions/services'
      },
      {
        title: 'Options',
        link: '/pages/auto/actions/options'
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login'
      },
      {
        title: 'Register',
        link: '/auth/register'
      },
      {
        title: 'Request Password',
        link: '/auth/request-password'
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password'
      }
    ]
  }
];
