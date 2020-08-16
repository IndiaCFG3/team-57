import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tinder from '../../screens/Tinder'
import {navigationRef} from '../RootNavigation';
import openDrawerButton from '../openDrawerButton';

const Stack = createStackNavigator();

function TinderStack() {
  return (
    <Stack.Navigator
      mode="modal"
      
      ref={navigationRef}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d11b1e',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <Stack.Screen
        name="Upload"
        component={Tinder}
        options={({navigation}) => ({
          headerLeft: openDrawerButton,
        })}
      />
    </Stack.Navigator>
  );
}
export default TinderStack;
