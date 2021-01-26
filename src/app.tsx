import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    basename: '/seller',
    fallback: `<div>loading...</div>`,
    modifyRoutes: (routes) => {
      return routes;
    }
  },
  icestark: {
    type: 'child',
  },
};

runApp(appConfig);
