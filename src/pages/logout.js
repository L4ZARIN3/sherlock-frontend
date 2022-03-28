import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useLayoutEffect } from 'react'
import { View, ActivityIndicator } from 'react-native';

export default function Logout({ navigation }){

  useLayoutEffect(() => {

    AsyncStorage.setItem("TOKEN","").then(() => {
        
      navigation.navigate('Root', { screen: 'Login' });

    }).catch((error) => {
      console.log(error);
    })
    
  }, []);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#484553' }}>
      <ActivityIndicator size="large" color="#3e236e" />
    </View>
    );

}

//