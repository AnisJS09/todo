import { Todo } from "../../store/store.types";
export interface ApiResponse {
  data: Todo[];
  code: number;
  error: string | null;
}
export class ApiMock {
  public static init() {}

  public static async saveToDo(todos: Todo[]): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      if (todos?.length > 0) {
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

  public static async removeItem(todos: Todo[]): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem("todos");
        localStorage.setItem("todos", todos.toString());
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
}
