/*import axios from "axios";*/
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../../model";

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit,] = useState<boolean>(false);
  const [editTodo, setEditTodo,] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null,);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };


/*
  async function deleteTodo(todo){
    const response = await fetch('http://localhost:3002/todos/{todo}',{
      method:'DELETE',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        todo,      
             
      })
    })
    const data = await response.json();
    console.log(data);
  };*/

  
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    console.log(id,("idd"))
    console.log(todo,('To jest TODO'))
    /*axios.delete(`http://localhost:3002/todos/:todo${id}`)*/
;

    /*deleteTodo(todo);*/
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        
      ) 
    );
  };

  return (
    <form data-testid="Card-Render-Test" className="todos__single"   onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="todo-icon edit-icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="todo-icon delete-icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="todo-icon accept-icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;