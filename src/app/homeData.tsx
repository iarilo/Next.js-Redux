"use client"

import styles from "./page.module.css";
import { useAppSelector } from '@/redux/hooks/hooks';

export const HomeData = () => {
    const name = useAppSelector(ell => ell.reducerAuth.value.username);
    const moderator = useAppSelector( ell => ell.reducerAuth.value.isModerator);
  return (
    <>
     <h3 className={styles.user}>UserName: {name}</h3>
      {moderator && <h2 className={styles.user}>Это модератор</h2>}
    </>
  )
}
