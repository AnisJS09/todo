import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContainer } from "./components/todo-container";
function App() {
  return (
    <div className="container-fluid w-100">
      <main>
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
