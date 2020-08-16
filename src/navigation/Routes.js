import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

import {navigationRef} from './RootNavigation';
import AuthStack from './stacks/AuthStack';

import {AuthContext} from './AuthProvider';
import Loading from '../components/Loading';
import CustomDrawerContent from './DrawerContent';
import {drawerLabelStyle} from '../constants/styles';
import RootStack from './RootStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  coreDrawer = () => {
    return (
      
      <Drawer.Navigator
        drawerType={'slide'}
        drawerContent={drawerProps => <CustomDrawerContent {...drawerProps} />}
        drawerStyle={{
          width: 240,
        }}>
        <Drawer.Screen
          name="Home"
          component={RootStack}
          options={{
            drawerLabel: ({focused, color}) => (
              <Text style={drawerLabelStyle}>Home</Text>
            ),
          }}
        />
      </Drawer.Navigator>
    

    );
  };

  coreApplication = () => {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="123" component={coreDrawer} />
        </Stack.Navigator>
        </NavigationContainer>
     
    );
  };

  return (
    <>
      {user? (coreApplication()) :  <NavigationContainer ><AuthStack /></NavigationContainer>}
   </>
  );
}
