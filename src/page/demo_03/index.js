
import ReactDOM from "react-dom";
import React from "react";
import TodoList from "./todoList/TodoList";

function demo03run() {
    ReactDOM.render(
        <TodoList/>,
        document.querySelector("#root"));
}

export  default demo03run;