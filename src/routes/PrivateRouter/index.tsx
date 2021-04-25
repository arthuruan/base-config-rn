import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import bottomTabPaths, {
  mainPath,
} from '~/constants/route-paths/tab-bar-paths';
import { Home, UnderDevelopment } from '~/pages';

const { HOME, NOTIFICATION, MY_ACCOUNT, REQUESTS } = bottomTabPaths;

const Tab = createMaterialBottomTabNavigator();
const ModalStack = createStackNavigator();

const BottomTabRouter = () => {
  return (
    <Tab.Navigator backBehavior="history">
      <Tab.Screen name={HOME.title} component={Home} />
      <Tab.Screen name={REQUESTS.title} component={UnderDevelopment} />
      <Tab.Screen name={NOTIFICATION.title} component={UnderDevelopment} />
      <Tab.Screen name={MY_ACCOUNT.title} component={UnderDevelopment} />
    </Tab.Navigator>
  );
};

const ModalRouter = () => {
  return (
    <ModalStack.Navigator
      headerMode="screen"
      mode="modal"
      initialRouteName={mainPath}>
      <ModalStack.Screen
        name={mainPath}
        component={BottomTabRouter}
        options={{
          headerShown: false,
        }}
      />
    </ModalStack.Navigator>
  );
};

export default ModalRouter;
