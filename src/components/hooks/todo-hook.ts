import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDo,
  deleteToDo,
  fetchFromLocalStorage,
} from "../../store/store.actions";
import { AppState, Todo } from "../../store/store.types";
import { ApiMock } from "../utils/api";

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
    setloading(true);
    dispatch(addToDo(todo));
    ApiMock.saveToDo(state.todos)
      .then((value) => setResponse(value.data))
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  };
  return { response, error, loading, saveData };
};

export const useGetTodos = () => {
  const [response, setResponse] = useState([] as Todo[]);
  const [error, setError] = useState({});
  const [loading, setloading] = useState(true);
  const state = useSelector((state: AppState) => state);
  useEffect(() => {
    setloading(true);
    ApiMock.getTodos()
      .then((value) => setResponse(value.data))
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  }, [state]);

  return { response, error, loading };
};

export const useTodoDelete = (todo: Todo) => {
  const [response, setResponse] = useState([] as Todo[]);
  const [error, setError] = useState({});
  const [loading, setloading] = useState(true);
  const state = useSelector((state: AppState) => state);

  const dispatch = useDispatch();
  const deleteData = () => {
    setloading(true);
    dispatch(deleteToDo(todo));
    dispatch(fetchFromLocalStorage(state.todos));
    ApiMock.removeItem(state.todos)
      .then((value) => setResponse(value.data))
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  };
  return { response, error, loading, deleteData };
};
