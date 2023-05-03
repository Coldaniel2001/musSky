import { Toaster } from 'react-hot-toast';
import './App.css';
import RoutesPath from './routes/RoutesPath';
import { Auth0Provider } from '@auth0/auth0-react';


function App() {


  return (
    <>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + "/home"
        }}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      >
        <Toaster />
        <RoutesPath />
      </Auth0Provider>
    </>
  );
}

export default App;
