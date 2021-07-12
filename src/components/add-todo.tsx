import { useState } from "react";
import { useTodoSave } from "./hooks/todo-hook";
export function AddTodo() {
  const [label, setLabel] = useState("");
  const { saveData } = useTodoSave(label);

  const handleSave = () => {
    saveData();
  };

  return (
    <div className="card d-flex w-100 flex-column justify-content-center align-items-center p-4 bd-highlight  bg-light">
      <div className="w-100">
        <input
          className="form-control"
          type="text"
          onChange={(event) => {
            setLabel(event.target.value);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter" || event.keyCode === 13) {
              handleSave();
            }
          }}
        />
      </div>
      <div className="todo-label">
        <span>{}</span>
      </div>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => handleSave()}
          disabled={!label}
        >
          Add
        </button>
      </div>
    </div>
  );
}
