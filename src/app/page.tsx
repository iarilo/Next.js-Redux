import styles from "./page.module.css";
import Login from "../component/login/log-in";
import { HomeData } from "./homeData";
import { Metadata } from "next";



export const metadata:Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title:'Домашняя',
  description:'Описание домашней  страницы'
}

export default async function Home() {
  await new Promise((resolve)=> setTimeout(resolve, 3000));
  //throw Error("Помогите Home")
  return (
    <main className={styles.main}>
      <h2 className={styles.content}>Redux from Next</h2>
      <Login />
      <HomeData />
    </main>
  );
}
