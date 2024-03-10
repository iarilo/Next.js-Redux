import React from "react";
import { TodosItem } from "./todosItem";
import { useAppSelector } from "@/redux/hooks/hooks";
import { objectTodos } from "@/app/blog/types/blog_types";

export const TodosList = () => {
  const todos = useAppSelector((ell) => ell.reducertodos.todos);
 
  return (
    <>
      <h4>TodosList</h4>
      <br />
      <ul>
        {todos.map((ell: objectTodos) => (
          <TodosItem key={ell.id} {...ell} />
        ))}
      </ul>
    </>
  );
};
