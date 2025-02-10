import { App } from '@cosmo-flux/foundation.subscriber';
import { MemoryRouter } from 'react-router-dom';
import { marketingMfe } from './marketing-mfe.js';

export const BasicMarketingMfe = () => {
  const app = new App();
  marketingMfe(app);
  return <MemoryRouter>{app.renderApp()}</MemoryRouter>;
};
