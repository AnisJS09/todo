import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateToDo } from "../store/store.actions";
import { Todo } from "../store/store.types";
import { useTodoDelete } from "./hooks/todo-hook";
import { DeleteICon } from "./icons/delete-icon";
import { UndoIcon } from "./icons/undo-icon";

var deleteTimeout: NodeJS.Timeout;

export function TodoUnit(props: Todo) {
  const { label, id, done } = props;
  const [isDone, setIsDone] = useState(done);
  const [showUndo, setShowUndo] = useState(false);
  const dispatch = useDispatch();
  const { deleteData } = useTodoDelete();
  const handleCheck = (isChecked: boolean) => {
    setIsDone(isChecked);
    dispatch(
      UpdateToDo({
        id,
        label,
        done: isDone,
      })
    );
  };
  const handleDelete = () => {
    deleteData({
      id,
      label,
      done: isDone,
    });
  };
  const triggerDelete = () => {
    return setTimeout(() => {
      setShowUndo(true);
      handleDelete();
    }, 3000);
  };

  useEffect(() => {
    if (showUndo) {
      deleteTimeout = triggerDelete();
    } else {
      clearTimeout(deleteTimeout);
    }
  }, [showUndo]);
  return (
    <div className="card d-flex w-100 flex-row justify-content-between align-items-center p-4 bd-highlight  bg-light mb-3">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={isDone}
          onChange={(e) => {
            handleCheck(e.target.checked);
          }}
        />
      </div>
      <div>
        <span className={isDone ? "text-decoration-line-through" : ""}>
          {label}
        </span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          {!showUndo && (
            <button
              className="btn btn-danger"
              onClick={() => {
                setShowUndo(true);
              }}
            >
              <DeleteICon />
            </button>
          )}
          {showUndo && (
            <button
              className="btn btn-success"
              onClick={() => {
                setShowUndo(false);
              }}
            >
              <UndoIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
