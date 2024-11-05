import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout';
import './index.css';
import 'leaflet/dist/leaflet.css';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './components/userProvider';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH_AUDIENCE,
        scope: import.meta.env.VITE_AUTH_SCOPE
      }}
    >
      <UserProvider>
      <Layout />
      </UserProvider>
    </Auth0Provider>
  </StrictMode>,
);
