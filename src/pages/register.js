import React, { useState } from 'react'
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import auth from '../services/auth';


export default function Register({navigation}){

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [password_confirmation, setConfirmPassword] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const singUp = () =>{

      let data = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      
      if(data.name === null){
        Alert.alert('Aviso', 'Campo Usuario obrigatorio.');
        return;
      }
      if(data.email === null){
        Alert.alert('Aviso', 'Campo email obrigatorio.');
        return;
      }
      if(data.password === null){
        Alert.alert('Aviso', 'Campo senha obrigatorio.');
        return;
      }
      if(data.password_confirmation === null){
        Alert.alert('Aviso', 'Campo Confirmar Senha obrigatorio.');
        return;
      }

      if (data.password.trim().length < 8) {
        Alert.alert('Aviso', 'Minimo de 8 caracteres para senha.');
        return;
      }
      
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(data.email) === false) {
        Alert.alert('Aviso', 'Email invalido.');
        return;
      }

      if(data.password !== data.password_confirmation){
        Alert.alert('Aviso', 'Confirmação de senha invalida.');
        return;
      }

      auth.register(data)
          .then((response) => {
            setLoading(false)
            navigation.reset({
              index: 0,
              routes: [{name: "Dashboard"}]
            })
      }).catch((error) => {
            setLoading(false)
            console.log(error)
            Alert.alert('Rede inacessivel.')
      })
      
    }

    const returnLogin = () => {
        navigation.navigate("Login")
    }

    return (
      <View style={styles.container}>
        <Image 
        style={styles.logo}
        source={require('../../assets/favicon.png')}
        />
        <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={value => setName(value)}
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
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirmar Senha"
        onChangeText={value => setConfirmPassword(value)}
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={ () => singUp()}
        >
          <Text style={styles.botaoText}>Criar Conta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={ () => returnLogin() }
        >
        <Text style={styles.botaoText}>Fazer Login</Text>
        </TouchableOpacity>
        
      </View>
    );
}

const styles = StyleSheet.create({
        logo:{
            width: 150,
            height: 150,
            marginVertical: 20
        },
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#484553'
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