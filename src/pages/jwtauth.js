import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator } from 'react-native';
import JwtAuto from '../services/auth';
const env = require("../config.json");

export default function JwtAuth({navigation}) {

  useEffect(() => {

    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('TOKEN');
        
      if(userToken){    
        JwtAuto.JwtAuto(userToken)
            .then((response) => {              
                    navigation.reset({
                    index: 0,
                    routes: [{name: "Dashboard"}]
                    })
            }).catch((error) => {
                    navigation.reset({
                    index: 0,
                    routes: [{name: "Login"}]
                    })
            })
          
        }else{
                navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
                })
        }

    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#484553' }}>
      <ActivityIndicator size="large" color="#3e236e" />
    </View>
  );
}

JwtAuth.navigationOptions = () => {
  return {
    header: null,
  };
};