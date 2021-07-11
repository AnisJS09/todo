import { AppAction, Todo } from "./store.types";

export enum ACTIONS {
  ADD = "ADD",
  DELETE = "DELETE",
  EDIT = "EDIT",
  UNDO = "UNDO",
  LOCAL_FETCH = "LOCAL_FETCH",
}

export function fetchFromLocalStorage(todos: Todo[]): AppAction<Todo[]> {
  return {
    type: ACTIONS.ADD,
    payload: todos,
  };
}

export function addToDo(todo: Todo): AppAction<Todo> {
  return {
    type: ACTIONS.ADD,
    payload: todo,
  };
}

export function UpdateToDo(todo: Todo): AppAction<Todo> {
  return {
    type: ACTIONS.EDIT,
    payload: todo,
  };
}

export function deleteToDo(todo: Todo): AppAction<Todo> {
  return {
    type: ACTIONS.DELETE,
    payload: todo,
  };
}

export function undoToDo(todo: Todo): AppAction<Todo> {
  return {
    type: ACTIONS.UNDO,
    payload: todo,
  };
}
