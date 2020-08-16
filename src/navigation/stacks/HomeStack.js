import React, {useContext} from 'react';
import {AuthContext} from '../AuthProvider';
import {navigationRef} from '../RootNavigation';
import openDrawerButton from "../openDrawerButton";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen'
import RoomScreen from '../../screens/RoomScreen'
import {IconButton} from 'react-native-paper';


const Stack = createStackNavigator();
function HomeStack() {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator
      mode="modal"
      // headerMode="none"
      ref={navigationRef}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#106623',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <Stack.Screen
        name="Dashboard"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <IconButton
              icon="message-plus"
              size={28}
              color="#ffffff"
              onPress={() => navigation.navigate('AddRoomScreen')}
            />
          ),
          headerLeft: () => (
            <IconButton
              icon="logout-variant"
              size={28}
              color="#ffffff"
              onPress={() => logout()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Room"
        component={RoomScreen}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
