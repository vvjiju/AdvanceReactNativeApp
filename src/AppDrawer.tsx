import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { HomeScreen } from './home';
import { DrawerParamList } from './types';
import ProfileScreen from './profile/ProfileScreen';
import ProfileNavigationContainer from './profile';

const AppDrawer = () => {
  const Drawer = createDrawerNavigator<DrawerParamList>();

  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileNavigationContainer} />
      </Drawer.Navigator>
  );
};

export default AppDrawer;
