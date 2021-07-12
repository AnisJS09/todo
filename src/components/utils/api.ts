import { Todo } from "../../store/store.types";
export interface ApiResponse {
  data: Todo[];
  code: number;
  error: string | null;
}
export class ApiMock {
  public static init() {}

  public static async saveToDo(todos: Todo[]): Promise<ApiResponse> {
    //const dataToBeInserted = this.dataToBeInserted(todos);
    //console.log(dataToBeInserted);
    return new Promise((resolve, reject) => {
      if (todos) {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(todos));
        resolve({
          data: todos,
          code: 200,
          error: null,
        });
      } else {
        reject({
          data: [],
          code: 500,
          error: "nothing to save",
        });
      }
    });
  }

  public static async getTodos(): Promise<ApiResponse> {
    const todos = localStorage.getItem("todos");
    return new Promise((resolve, reject) => {
      if (todos) {
        const data = JSON.parse(todos) as Todo[];
        resolve({
          data,
          code: 200,
          error: null,
        });
      } else {
        reject({
          data: [],
          code: 500,
          error: null,
        });
      }
    });
  }

  public static async removeItem(todo: Todo): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem("todos");
        let todos = data ? (JSON.parse(data) as Todo[]) : [];
        todos = todos.filter((e) => e.id !== todo.id);
        console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
        resolve({
          data: todos,
          code: 200,
          error: null,
        });
      } catch (e) {
        reject({
          data: [],
          code: 500,
          error: "nothing to delete",
        });
      }
    });
  }

  public static dataToBeInserted(todos: Todo[]) {
    let localData = localStorage.getItem("todos");
    const existing = localData ? (JSON.parse(localData) as Todo[]) : null;
    const diff = existing ? [...todos, ...existing] : todos;
    return diff;
  }
}
