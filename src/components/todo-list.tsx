import { useGetTodos } from "./hooks/todo-hook";
import { TodoUnit } from "./todo-unit";

export function TodoList() {
  const { response, error } = useGetTodos();
  console.log(response);

  return (
    <>
      {response && (
        <div>
          {response.map((todo, i) => {
            return (
              <TodoUnit
                label={todo.label}
                done={todo.done}
                id={todo.id}
                key={i}
              />
            );
          })}
        </div>
      )}
      {!response && error && (
        <div className="alert alert-warning text-center" role="alert">
          {error.error}
        </div>
      )}
    </>
  );
}
