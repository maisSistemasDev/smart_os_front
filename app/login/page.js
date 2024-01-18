import styles from './login.module.css';
import LoginForm from '../components/LoginForm'
import { SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { callLogin } from '../controllers/auth';
import { useRouter } from 'next/router';
export default function Login(){

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    
    const handleLogin = async (email, password)=>{
        setLoading(true)
        const response = await callLogin(email, password)
        if(response.token){
            router.push('/')
        }else{
            setError('E-mail ou senha incorretos')
        }
        setLoading(false)
    }


 return <>
<SimpleGrid cols={1} h="100vh">
<div className={styles.loginContainer}>
<LoginForm title="Smart OS" onSubmit={handleLogin} loading={loading}/>
</div>
</SimpleGrid>
    </>
}