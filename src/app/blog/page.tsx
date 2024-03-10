import style from '@/app/blog/page.module.css';
import type { Metadata } from "next";
import { TodosApp } from '@/component/todos/todosApp';

export const metadata:Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title:'Blog'
}

const Blog = () => {
  return (
    <div className= {style.container_blog}>
     <p  className= {style.context_blog}> Blog </p> 
     <TodosApp/>
    </div>
  )
}

export default Blog;
