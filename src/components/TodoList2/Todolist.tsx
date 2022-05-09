import React, { useEffect } from "react";
import { Todo } from '../../model';
import SingleTodo from "../SingleTodo/SingleTodo";
import "../../Styles/todolist_input.css"

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos}) => {
 //Get from local storage!!!!
  useEffect(()=>{
    const data:any = window.localStorage.getItem('todos');
    setTodos(JSON.parse(data))

  },[]);

//Put data into local storage!!!
  useEffect(()=>{
    window.localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])



  return (
    <div className="todos">
      {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;