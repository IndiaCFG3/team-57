import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';


export default function Analytics({ navigation }) {
 
 

  /**
   * Create a new Firestore collection to save threads
   */
  
  return (
    <View style={styles.rootContainer}>
     <Text style={{textAlign: 'center',color: 'red',fontSize:20,fontWeight: 'bold'}} >Inquilab Foundation</Text>
     <Text style={{textAlign: 'center',color: 'black',fontSize:16}}>The mediocre teacher tells </Text>
     <Text style={{textAlign: 'center',color: 'black',fontSize:16}}>The good teacher explains </Text>
     <Text style={{textAlign: 'center',color: 'black',fontSize:16}}>The superior teacher demonstrates </Text>
     <Text style={{textAlign: 'center',color: 'black',fontSize:16}}>The great teacher inspires </Text>
     <Text style={{textAlign: 'center',color: 'black',fontWeight: 'bold',fontSize:16}} > Made with love by team CODE-STARS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  buttonLabel: {
    fontSize: 22
  }
});