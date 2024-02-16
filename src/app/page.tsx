"use client"
//import Image from "next/image";
import styles from "./page.module.css";
import Login from "../component/login/log-in";
import { useAppSelector } from "@/redux/hooks/hooks";


export default function Home() {
  const  username = useAppSelector((state) => state.reducerAuth.value.username);
  const moderator = useAppSelector((state) => state.reducerAuth.value.isModerator);
  return (
    <main className={styles.main}>
      <h2 className={styles.content}>Essss</h2>
      <Login/>
      <h3 className={styles.user}>UserName: {username}</h3>
      {moderator && <h2 className={styles.user}>Это модератор</h2>}
    </main>
  );
}
