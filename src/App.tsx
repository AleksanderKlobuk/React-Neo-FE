import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './Styles/App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './views/Services';
import Products from './views/Products';
import Weather from './components/Weather/Weather';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {selectUser } from './features/userSlice';
import {useSelector} from "react-redux"
import { useState } from 'react';
import { Todo } from './model';
import Todolistinput from './components/Todolist/todolist_input';
import TodoList from './components/TodoList2/Todolist';

function App() {
  const user = useSelector(selectUser)
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
  
  if (todo){
    setTodos([...todos,{id:Date.now(), todo, isDone:false}])
    setTodo("")};
  };
  console.log(todos);

  console.log(todo);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/sign-up' element={user ? <Logout/> : <Login/>} />
          <Route path='/todolist' element={
          <><Todolistinput todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos}/></>  
        }/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
