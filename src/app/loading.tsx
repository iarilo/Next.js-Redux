import React from 'react';
import Image from 'next/image';
import ImageLoading from '@/app/image/Самолет.gif';
import style from '@/app/page.module.css'

const Loading = () => {
  return (
    <div className={style.container_ImageLoading}>
        <h1  className={style.text_ImageLoading}>Идёт загрузка</h1>
        <Image  className={style.image_ImageLoading}  src={ImageLoading} alt='Загрузка'/>
    </div>
  )
}

export default Loading