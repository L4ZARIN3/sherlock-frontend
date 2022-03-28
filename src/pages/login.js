import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import auth from '../services/auth';
import { Ionicons } from '@expo/vector-icons';

export default function Login({navigation}){
    
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isPasswordView, setPasswordView] = useState(true)

    const entrar = () =>{
        let data = {
          email: email,
          password: password
        }
        
        if(data.email === null){
          Alert.alert('Aviso', 'Campo email obrigatorio.');
          return;
        }
        if(data.password === null){
          Alert.alert('Aviso', 'Campo senha obrigatorio.');
          return;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(data.email) === false) {
          Alert.alert('Aviso', 'Email invalido.');
          return;
        }        

      auth.login(data)
          .then((response) => {
              setLoading(false)
              navigation.reset({
                index: 0,
                routes: [{name: "Dashboard"}]
              })
      }).catch((error) => {
        setLoading(false)
        Alert.alert('Usuario ou senha incorretos.')
      })
    }

    const criarConta = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Register"}]
        })
    }  

    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../../assets/favicon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={ () => entrar()}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={ () => criarConta()}
        >
          <Text style={styles.botaoText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
        logo:{
            width: 200,
            height: 200,
            marginVertical: 20
        },
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#800080'
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
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
        },
        botaoText: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#FFF'
        }
       
});