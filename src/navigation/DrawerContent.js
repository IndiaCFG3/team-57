import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import * as React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const drawerLabelStyle = {
  color: 'white',
  fontSize: 20,
};
function CustomDrawerContent({navigation}) {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#1848cc', marginTop: -5}}>
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <Image
          source={{
            uri:
              'https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg',
          }}
          styles={{height: 200, width: 90}}
        />
        
      </TouchableOpacity>
      <View style={styles.list}>
       
        <DrawerItem
          label="ANALYTICS"
          labelStyle={drawerLabelStyle}
          onPress={() => {navigation.navigate('Analytics')}}
        />
         <DrawerItem
          label="ABOUT"
          labelStyle={drawerLabelStyle}
          onPress={() => {navigation.navigate('About')}}
        />

       
       

       

       
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    color: 'green',

    fontSize: 18,
  },
  list: {
    marginLeft: 5,
  },
});

export default CustomDrawerContent;
