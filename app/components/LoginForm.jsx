
import { Button, TextInput, PasswordInput, Title } from "@mantine/core";
import style from './style/loginForm.module.css'

export default function LoginForm({onSubmit, title}){

    return(
        <div className={style.loginBox}>
        <Title align="center" style={{color:"#0000007a"}}>{title || 'Login'}</Title>
        <TextInput label="E-mail" required/>
        <PasswordInput label="Senha" required/>
        <Button type="submit" className={style.loginBt}>Entrar</Button>
        </div>
    )
    
}

