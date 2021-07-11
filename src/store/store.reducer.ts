import { ACTIONS } from "./store.actions";
import { AppAction, AppState } from "./store.types";

export const initState: AppState = {
  todos: [],
};

const appReducer = (
  state: AppState = initState,
  action: AppAction<any>
): AppState => {
  switch (action.type) {
    case ACTIONS.LOCAL_FETCH: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case ACTIONS.ADD: {
      console.log(state, action);
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    }

    case ACTIONS.EDIT: {
      const updateToDo = () => {
        return state.todos.filter((todo) => todo.id === action.payload.id);
      };
      return {
        ...state,
        todos: updateToDo().concat(action.payload),
      };
    }
    case ACTIONS.DELETE: {
      const deleteToDo = () => {
        return state.todos.filter((todo) => todo.id !== action.payload.id);
      };
      return {
        ...state,
        todos: deleteToDo(),
      };
    }
    case ACTIONS.UNDO: {
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default appReducer;
