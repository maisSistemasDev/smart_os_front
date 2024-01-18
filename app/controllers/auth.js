"use client"; 
import {GET, POST} from './handleRequests'
import { config } from './config'

export const callLogin = async (email, password)=>{
    const data = {
        "username": email,
        "password":password,
        "client_id": config.CLIENT_ID,
        "client_secret":config.CLIENT_SECRET,
        "grant_type": "password"
}
    
    const response = await POST('api-auth/token', data, {"content-type":"application-json"})
    if(!response.error){
        const data = response.data
        window.localStorage.setItem({'accessToken':data.token})
        window.localStorage.setItem({'refreshToken':data.refresh_token})
        return data
    }
}



const accessToken = ()=>window.localStorage.getItem('accessToken')
const refreshToken = ()=>window.localStorage.getItem('refreshToken')