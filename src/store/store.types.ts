export interface Todo {
  id: number;
  label: string;
  done: boolean;
}

export interface AppAction<T> {
  type: string;
  payload: T;
}

export interface AppState {
  todos: Todo[];
  toast: boolean;
}
