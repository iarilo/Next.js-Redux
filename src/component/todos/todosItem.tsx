import React from 'react'
import { objectTodos } from '@/app/blog/types/blog_types'

export const TodosItem = (props: objectTodos) => {
  const{title} = props
  return (
      <li>{title}</li>
    
   
  )
}
