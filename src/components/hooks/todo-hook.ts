import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, fetchFromLocalStorage } from "../../store/store.actions";
import { AppState, Todo } from "../../store/store.types";
import { ApiMock, ApiResponse } from "../utils/api";
import { hasAllKeys } from "../utils/helpers";

export const useTodoSave = (label: string) => {
  const [response, setResponse] = useState([] as Todo[]);
  const [error, setError] = useState({});
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state);
  const saveData = () => {
    const todo = {
      id: state.todos.length + 1,
      label: label,
      done: false,
    };
    if (!hasAllKeys(["id", "label", "done"], todo)) return;
    setloading(true);
    console.log(state);
    ApiMock.saveToDo(state.todos.concat(todo))
      .then((value) => {
        setResponse(value.data);
        dispatch(fetchFromLocalStorage(value.data));
      })
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  };
  return { response, error, loading, saveData };
};

export const useGetTodos = () => {
  const [response, setResponse] = useState([] as Todo[]);
  const [error, setError] = useState({} as ApiResponse);
  const [loading, setloading] = useState(true);
  const state = useSelector((state: AppState) => state);

  useEffect(() => {
    setloading(true);
    ApiMock.getTodos()
      .then((value) => {
        setResponse(value.data);
      })
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  }, [state]);

  return { response, error, loading };
};

export const useTodoDelete = () => {
  const [response, setResponse] = useState([] as Todo[]);
  const [error, setError] = useState({});
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();
  const deleteData = (todo: Todo) => {
    setloading(true);
    dispatch(deleteToDo(todo));
    ApiMock.removeItem(todo)
      .then((value) => {
        setResponse(value.data);
      })
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  };
  return { response, error, loading, deleteData };
};
