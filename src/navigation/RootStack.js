import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {defaultHeaderStyle} from '../constants/styles';
import AppTabNavigator from './AppTabNavigator';
import Tinder from '../screens/Tinder';
import HomeScreen from '../screens/HomeScreen';
import Home from '../../components/Home';
import AddRoomScreen from '../screens/AddRoomScreen';
import Analytics from '../screens/Analytics';
import About from '../screens/About';


const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultHeaderStyle}>
      <Stack.Screen
        name="TabsNavigator"
        component={AppTabNavigator}
        options={{title: '', headerShown: false}}
      />
       <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
       <Stack.Screen
        name='Upload'
        component={Tinder}
        options={{
          title: "Upload",
        }}
      />
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "HomeScreen",
        }}
      />
       <Stack.Screen
        name="Analytics"
        component={Analytics}
        options={{
          title: "Analytics",
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About",
        }}
      />

<Stack.Screen
        name="AddRoomScreen"
        component={AddRoomScreen}
        options={{
          title: "AddRoomScreen",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
