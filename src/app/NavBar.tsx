"use client"
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavBar = () => {

const router = useRouter();       // Маршрутизатор приложения
const pathname = usePathname()    //Название страницы в  http:// строке 
//console.log('Active: ',pathname)  //  '/' , 'blog', 'about'
const queryParam = useSearchParams()// Параметры из(post?query=)квэри параметры


//const isActive = (href: string) => (pathname === href)
  return (
    <nav className={styles.container_nav_bar}>
      <Link href = "/"  className={styles.nav_link}
       //className={isActive('/') ? 'active' : ''}
       >
        home
      </Link>

      <Link href = "/blog"  className={styles.nav_link}>
        blog
      </Link>

      <Link href = "/shop"  className={styles.nav_link}>
      shop
      </Link>


      <Link href = "/auth"  className={styles.nav_link}>
      auth
      </Link>

    </nav>
  );
};

export default NavBar;
