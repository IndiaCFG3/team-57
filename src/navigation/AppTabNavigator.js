import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './stacks/HomeStack';
import AgoraStack from './stacks/AgoraStack';
import TinderStack from './stacks/TinderStack';
import {appTheme} from "../constants/colors";
import fontSizes from "../constants/fontSizes";
const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = props => {
  return (
    <Tab.Navigator activeColor="whitesmoke" 
    tabBarOptions={{
        activeTintColor: appTheme.brightContent,
        inactiveTintColor: 'gray',
        showIcon: true,
        labelStyle: {
          fontSize: fontSizes.h5,
          padding: 0,
          margin: 0,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3
        },
        style: {backgroundColor: appTheme.darkBackground},
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarColor: '#106623',
          tabBarIcon: () => <Icon name="chat" size={26} color="whitesmoke" />,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Agora"
        options={{
          tabBarColor: '#162447',
          tabBarIcon: () => (
            <Icon name="video-library" size={26} color="whitesmoke" />
          ),
        }}
        component={AgoraStack}
      />
      <Tab.Screen
        name="Upload"
        options={{
          tabBarColor: '#d11b1e',
          tabBarIcon: () => (
            <Icons name="book" size={26} color="whitesmoke" />
          ),
        }}
        component={TinderStack}
      />
    </Tab.Navigator>
  );
};
export default AppTabNavigator;
