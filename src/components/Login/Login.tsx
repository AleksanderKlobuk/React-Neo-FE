import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import "../../Styles/Login.css"
export {}
const SignUp=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function registerUser(event:any){
    event.preventDefault();
    const response = await fetch("http://localhost:1000/api/register",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name,
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
 
    dispatch(
      login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      })
    );
  };
  

  return(
    <div className='login'>
      <form className="login_form" onSubmit={function(e){handleSubmit(e);registerUser(e)}}>
        
        <h1>🟩You Can Login Here🟩</h1>
        <input 
        type="name"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        /> 
        
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
    </div>
    

  );  ;
}

export default SignUp;