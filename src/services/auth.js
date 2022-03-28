import axios, { Axios } from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const env = require("../config.json");

class authSevice{

    async login(data){
        return axios({
            url: env.urlBase+'/auth/login',
            method: "POST",
            timeout: 5000,
            data: data,
            headers:{
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token);
            return Promise.resolve(response);
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    async register(data){
        return axios({
            url: env.urlBase+'/auth/register',
            method: "POST",
            timeout: 5000,
            data: data,
            headers:{
                Accept: 'application/json'
            }
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token);
            return Promise.resolve(response);
        }).catch((error) => {
            return Promise.reject(error);
        });

    }

    async JwtAuto(data){
        return axios({
            url: env.urlBase+'/dashboard/check',
            method: "GET",
            timeout: 5000,
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${data}`
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        });
    }

    async Logout(data){
        return axios({
            url: env.urlBase+'/dashboard/logout',
            method: "GET",
            timeout: 5000,
            headers:{
                Accept: 'application/json',
                Authorization: `Bearer ${data}`
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        });
    }

}

const auth = new authSevice()
export default auth