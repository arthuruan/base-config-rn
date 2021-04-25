import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';

const AUTHENTICATED = true;

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      {AUTHENTICATED ? <PrivateRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default routes;
