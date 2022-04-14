import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './Styles/App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './views/Products';
import Weather from './components/Weather/Weather';
import Login from './components/Login/Login';
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
import ShoppingList from './components/ShoppingList/ShoppingList';
import News from './components/NewsApp/NewsApp';
import SignIn from './components/Login/SignIn';
import { ProtectedRoute } from './protected-route.component';
import NonLoggedHome from './views/UnlogedHome';


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

         <Route path='/dummy1' element={user ? <Home/> : <NonLoggedHome/>} />
          
          <Route path='/dummy2' element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>} />        

          <Route path='/' element={user ? <Home/> : <NonLoggedHome />} />
          


          <Route path='/products' element={<Products />} />
          <Route path='/weather' element={<Weather />} />
          

          <Route path="/budget" element={ 
          <GlobalContextProvider>
            <Header/>
            <Balance/>
            <IncomeList/>
            <ExpenseList/>
            <AddTransaction/>           
          </GlobalContextProvider>}/>

          <Route path='/shoppinglist' element={< ShoppingList/>} />
          <Route path='/news' element={< News/>} />



          <Route path='/login' element={user ? <Logout/> : <Login/>} />
          <Route path='/signin' element={user ? <Logout/> : <SignIn/>} />



          <Route path='/todolist' element={
          <><Todolistinput todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
          <TodoList todos={todos} setTodos={setTodos}/></>}/>

          </Routes>
      </Router>
    </>
  );
}

export default App;
