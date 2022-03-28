import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import auth from '../services/auth';
import { Ionicons } from '@expo/vector-icons';

export default function Logout({ navigation }){

  useEffect(() => {

    AsyncStorage.setItem("TOKEN","").then(() => {
        
      navigation.navigate('Root', { screen: 'Login' });

    }).catch((error) => {
      console.log(error);
    })
    
  }, []);

    return (
      <View>
        <Text>OI</Text>
      </View>
    );

}

//