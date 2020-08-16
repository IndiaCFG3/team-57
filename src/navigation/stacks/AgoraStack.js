import React from 'react';
import openDrawerButton from '../openDrawerButton';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import {navigationRef} from '../RootNavigation';
import RouterComponent from '../../../components/Router';
function AgoraStack() {
  return (
    <Stack.Navigator
      mode="modal"
      
      ref={navigationRef}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#162447',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
        headerTitleContainerStyle: {
          marginLeft: -10,
        },
      }}>
      <Stack.Screen
        name="Agora"
        component={RouterComponent}
        options={({navigation}) => ({
          headerLeft: openDrawerButton,
        })}
      />
    </Stack.Navigator>
  );
}

export default AgoraStack;
