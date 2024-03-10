"use client"
import { useState } from "react";
import styles from './page.module.css';
import { LogIn, LogOut,togleModerator } from "@/redux/features/auth-slice";
import {useAppSelector,useAppDispatch} from '@/redux/hooks/hooks'

const Login = () => {
  const [userName, setUserName ] = useState('');
  const dispath = useAppDispatch()
  const isAuth = useAppSelector((state) => state.reducerAuth.value.isAuth); 


  const onClockLogin = () => {dispath(LogIn(userName))};
  const onClickToggle = () => {dispath(togleModerator())};
  const onClickLogOut = () => {dispath(LogOut())}

  return (
    <div className= { styles.container} >
      <input type="text" onChange={(e) => setUserName(e.target.value)} 
      className={styles.input}
      />
      <button  className={styles.button} onClick={onClockLogin}>
        авторизоваться
      </button>
      <button className={styles.button} onClick={onClickLogOut}>
        выйти из системы
      </button>


      { isAuth && (<button className={styles.button} onClick={onClickToggle}>
        статус модератора
      </button>)}


    </div>
  )
}

export default Login
