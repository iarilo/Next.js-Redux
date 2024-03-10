import React from 'react';
import Image from 'next/image';
import ImageError from '@/app/image/error_Gif.gif';
import style from '@/app/page.module.css'


export default function Error () {
  return (
    <div className= {style.context_notFound}>
        <h1  className={style.text_notFound}>такая страница отсутствует</h1>
    <Image
      className={style.image_error}
      src={ImageError}
      alt='Ошибка'/>
    </div>
  )
}
