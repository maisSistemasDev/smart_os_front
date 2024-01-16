import styles from './login.module.css';
import LoginForm from '../components/LoginForm'
import { SimpleGrid } from '@mantine/core';


export default function Login(){
 return <>
<SimpleGrid cols={1} h="100vh">
<div className={styles.loginContainer}>
<LoginForm title="Smart OS"/>
</div>
</SimpleGrid>
    </>
}