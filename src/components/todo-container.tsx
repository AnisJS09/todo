import React from "react";
import { AddTodo } from "./add-todo";
import { TodoList } from "./todo-list";

export function TodoContainer() {
  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center p-5 m-5">
      <div className="mt-5 w-50">
        <AddTodo />
      </div>
      <div className="mt-5 w-50">
        <TodoList />
      </div>
    </div>
  );
}
