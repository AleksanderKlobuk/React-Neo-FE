/*import axios from 'axios';*/
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/userSlice';
import "../../Styles/Login.css"
export {}
const Login=()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function registerUser(event:any){
    event.preventDefault();
    /*"http://localhost:5000/product/create"*/
     /*"http://localhost:5000/users"*/
     /*"http://localhost:5000/user1/create"*/

    const response = await fetch("http://localhost:5000/user1/create",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
       
        email,
        password
      })
    })
    const data = await response.json();
    console.log(data);

  };
  
  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    /*axios.post("http://localhost:5000/users",{name:name,email:email,password:password});*/
 
    dispatch(
      login({
        
        email:email,
        password:password,
        loggedIn:true,
      })
    );
  };
  

  return(
    <div className='login'>
      <form className="login_form" onSubmit={function(e){handleSubmit(e);registerUser(e)}}>
        
        <h1>You Can Login Here</h1>

        
        <input type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
       
        <input 
        type="password" 
        placeholder='Password' 
        value={password}  
        onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" className='submit_btn' >
        Submit</button>
        
      </form>
      <div  className='login-link' >
        Need New Account? <Link to="/signin">Sign In Now</Link></div>
    </div>
    

  );  ;
}

export default Login;
