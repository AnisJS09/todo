import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store/store.actions";
import { Todo } from "../store/store.types";

export function TodoUnit(props: Todo) {
  const { label, done } = props;
  const [isDone, setIsDone] = useState(done);
  const dispatch = useDispatch();

  const handleCheck = (isChecked: boolean) => {
    setIsDone(isChecked);
  };
  const handleDelete = () => {
    dispatch(deleteToDo(props));
  };
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
        <span>{label}</span>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}