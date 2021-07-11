import { useSelector } from "react-redux";
import { AppState } from "../store/store.types";
import { TodoUnit } from "./todo-unit";

export function TodoList() {
  const state = useSelector((state: AppState) => state);
  return (
    <div>
      {state.todos.map((todo, i) => {
        return (
          <TodoUnit label={todo.label} done={todo.done} id={todo.id} key={i} />
        );
      })}
    </div>
  );
}
