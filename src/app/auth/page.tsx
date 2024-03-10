import style from "@/app/auth/page.module.css";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface objectAuth {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  username: string;
  password: string;
  image: string;
  height: number;
  weight: number;
  map: any;
}
interface Auth {
  users: objectAuth[];
}

const AuthData = async () => {
  const userData = axios.get<Auth>("https://dummyjson.com/users?limit=1");
  const response = (await userData).data;
  const { users } = response;
  return users;
};

const Auth = async () => {
  const resData = await AuthData();
  const { image, username } = resData[0];
   return (
    <div className={style.all_user_container}>
      <Image src={image} alt={username} width={300} height={300} />
     <div  className={style.link_user_container}>
     имя пользователя: 
      <Link href={"/users/" + username}>
        <span className={style.text_auth_container}>{username}</span>
      </Link>
     </div>
    
    </div>
  );
};

export default Auth;
