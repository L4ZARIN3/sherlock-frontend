import React, { useState, useEffect } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function Home({navigation}){
    return (
      <View style={styles.container}>
      <TextInput> Home </TextInput>
      </View>
    );

}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#484553'
        }
});