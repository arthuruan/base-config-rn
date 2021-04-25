import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import authStackPaths from '~/constants/route-paths/auth-stack-paths';
import { SignIn, SignUp } from '~/pages';

const { SIGN_IN, SIGN_UP } = authStackPaths;

const Stack = createStackNavigator();

const AuthRouter: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SIGN_IN.path} component={SignIn} />
      <Stack.Screen name={SIGN_UP.path} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
