import { AppAction, Todo } from "./store.types";

export enum ACTIONS {
  ADD = "ADD",
  DELETE = "DELETE",
  EDIT = "EDIT",
  UNDO = "UNDO",
  LOCAL_FETCH = "LOCAL_FETCH",
  SHOW_TOAST = "SHOW_TOAST",
}

export function fetchFromLocalStorage(todos: Todo[]): AppAction<Todo[]> {
  return {
    type: ACTIONS.LOCAL_FETCH,
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

export function showToast(show: boolean): AppAction<boolean> {
  return {
    type: ACTIONS.SHOW_TOAST,
    payload: show,
  };
}
