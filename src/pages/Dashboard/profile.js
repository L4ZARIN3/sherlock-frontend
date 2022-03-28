import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, SafeAreaView, KeyboardAvoidingView,ScrollView,TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
const env = require("../../config.json");



export default function Profile({navigation}){

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPassword_Confirmation] = useState(null);

  useLayoutEffect(() => {

    async function handleUserNextScreen() {

      const userToken = await AsyncStorage.getItem('TOKEN');
      axios({
        method: 'get',
        url: env.urlBase+'/dashboard/userInformation',
        headers:{
          Accept: 'application/json',
          Authorization: `Bearer ${userToken}`
      }
      }).then(function (response) {
        setEmail(response.data.email);
        setName(response.data.name);

      }).catch(function (error) {
        console.log(error);
        Alert.alert("Network Error.");
      });
    }

    handleUserNextScreen();
  }, []);


  async function UpdateInfo(){
    const userToken = await AsyncStorage.getItem('TOKEN');

      try {
        const response = await axios({
          method: 'POST',
          url: env.urlBase+'/dashboard/updateUserInformation',
          data: {
          "email" : email,
          "password": password,
          "password_confirmation": password_confirmation
          },
          headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`
          }
        });
        
        Alert.alert(response.data.message);
        console.log(response.data);
      } catch (err) {
        console.log(err);
        //Alert.alert(err.response.data.message);

      }


  }

  return (
    <ScrollView style={styles.ScrollView}>
      <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, color: '#FFFF' }}>Configurações</Text>
        <View style={{ flexDirection: 'column'} }>
            <Text style={styles.text}>Nome</Text>
            <TextInput style={styles.input} defaultValue={name} editable={false} selectTextOnFocus={false} ></TextInput>

            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} defaultValue={email} onChangeText={value => setEmail(value)} ></TextInput>

            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} onChangeText={value => setPassword(value)}></TextInput>

            <Text style={styles.text}>Confirmar Senha</Text>
            <TextInput style={styles.input} onChangeText={value => setPassword_Confirmation(value)}></TextInput>

            <TouchableOpacity
                style={styles.botao}
                onPress={ () => UpdateInfo()}
            >
          <Text style={styles.botaoText}>Atualizar Informações</Text>
        </TouchableOpacity>

        </View>
        
      </SafeAreaView>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
        text: {
            marginTop: 10,
            color: '#FFFF'
        },
        container:{
            flex: 1,
            alignItems: 'center',
        },
        ScrollView:{
          backgroundColor: '#484553',
          marginHorizontal: 0,
        },
        input:{
            marginTop: 10,
            padding: 10,
            width: 300,
            backgroundColor: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
            borderRadius: 3
        },
          botao: {
            width: 300,
            height: 42,
            backgroundColor: '#3e236e',
            marginTop: 20,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
        },
          botaoText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#FFF',

        }
});