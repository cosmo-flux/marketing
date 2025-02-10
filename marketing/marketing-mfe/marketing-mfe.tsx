import type { Frontend } from '@cosmo-flux/foundation.subscriber';
import { Homepage } from '@cosmo-flux/marketing.pages.homepage';

export const marketingMfe: Frontend = (app) => {
  app.registerRoutes([
    {
      path: '/',
      element: <Homepage />,
    },
  ]);
  app.registerHeaderLinks([
    {
      label: 'Home',
      path: '/',
    },
  ]);
  return app;
};
