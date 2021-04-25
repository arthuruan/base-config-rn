export const mainPath = '@public/HOME';

const bottomTabPaths = {
  HOME: {
    path: '@public/HOME',
    title: 'Início',
  },
  REQUESTS: {
    path: '@public/REQUESTS',
    title: 'Pedidos',
  },
  NOTIFICATION: {
    path: '@public/NOTIFICATION',
    title: 'Notificação',
  },
  MY_ACCOUNT: {
    path: '@public/MY_ACCOUNT',
    title: 'Minha conta',
  },
} as const;

export default bottomTabPaths;
