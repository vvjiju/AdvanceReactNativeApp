import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from './home';
import AppDrawer from './AppDrawer';
import ProfileNavigationContainer from './profile';
import { AppStackParamList } from './types';

function App(): React.JSX.Element {
  const AppStack = createNativeStackNavigator<AppStackParamList>()
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown:false}}>
          <AppStack.Screen name='AppDrawer' component={AppDrawer}/>
          <AppStack.Screen name='Profile' component={ProfileNavigationContainer}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
