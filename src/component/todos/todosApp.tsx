"use client";
import React from "react";
import { TodosList } from "./todosList";
import { useEffect} from "react";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { allTodos } from "@/redux/actionTodo";



export const TodosApp = () => {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath( allTodos());
  }, [dispath]);

  return (
    <div>
      <TodosList />
    </div>
  );
};
