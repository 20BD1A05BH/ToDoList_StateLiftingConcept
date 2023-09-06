import AddTodo from "./Components/AddTodo";
import Heading from "./Components/Heading";
import TodoCount from "./Components/TodoCount";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [todos,setTodos]=useState([])

    const onFormSubmit=(todoObj)=>{
        console.log(todoObj)
        setTodos([...todos,todoObj.todo])
    }
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="text-center"><Heading /></div>
        <div className="col-sm-4"><AddTodo onFormSubmit={onFormSubmit} /></div>
        <div className="col-sm-4"><TodoList todos={todos} /></div>
        <div className="col-sm-4"><TodoCount todos={todos} /></div>
      </div>
    </div>
  );
}

export default App;
