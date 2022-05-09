import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './Styles/App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import Logout from './components/Logout/Logout';
import {selectUser } from './features/userSlice';
import {useSelector} from "react-redux";
import { useState } from 'react';
import { Todo } from './model';
import Todolistinput from './components/Todolist/todolist_input';
import TodoList from './components/TodoList2/Todolist';
import Header from './components/Budget/Header';
import Balance from './components/Budget/Balance';
import IncomeList from './components/Budget/IncomeList';
import ExpenseList from './components/Budget/ExpenseList';
import AddTransaction from './components/Budget/AddTransaction';
import { GlobalContextProvider } from './features/GlobalState';
import News from './components/NewsApp/NewsApp';
import NonLoggedHome from './views/UnlogedHome';
import UseStateCounter from './components/Hooks/UseState';
import ShoppingListApp from './components/ShoppingLista/ShoppingListApp';
import Register from './components/Register/Register';
import LoginPage from './components/Register/Login';



function App() {
  const user = useSelector(selectUser);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
  
  if (todo){
    setTodos([...todos,{id:Date.now(), todo, isDone:false}])
    setTodo("")};
  };
  console.log(todo);

  return (

    <>  
        <Router>
         <Navbar/>
         <Routes>      
          <Route path='/' element={user ? <Home/> : <NonLoggedHome />} />
          <Route path='/create_account' element={< Register/>} />
         
          <Route path='/weather' element={<Weather />} />

          <Route path="/budget" element={ 
          <GlobalContextProvider>
            <Header/>
            <Balance/>
            <IncomeList/>
            <ExpenseList/>
            <AddTransaction/>           
          </GlobalContextProvider>}/>

          <Route path='/shoppinglist' element={< ShoppingListApp/>} />
          <Route path='/news' element={< News/>} />
          <Route path='/login' element={user ? <Logout/> : <LoginPage/>} />
          <Route path='/signin' element={user ? <Logout/> : <Register/>} />

          <Route path='/todolist' element={
          <><Todolistinput todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos}/></>}/>


          <Route path='/products' element={
          <GlobalContextProvider>
            <UseStateCounter/>
          </GlobalContextProvider>}/> 

          </Routes>
      </Router>
    </>
  );
}

export default App;
